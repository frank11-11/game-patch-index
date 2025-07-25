document.addEventListener("DOMContentLoaded", () => {
  const patchList = document.getElementById("patchList");

  fetch("/data/patches.json")
    .then(res => res.json())
    .then(patches => {
      patches.forEach(patch => {
        const patchCard = document.createElement("div");
        patchCard.className = "bg-zinc-800 p-4 rounded shadow";

        patchCard.innerHTML = `
          <h2 class="text-xl font-semibold">${patch.title}</h2>
          <p><strong>By:</strong> ${patch.developer}</p>
          <p><strong>Platform:</strong> ${patch.platform}</p>
          <p class="mt-2">${patch.description}</p>

          <button class="mt-3 text-sm text-blue-400 underline" type="button">Show Installation Instructions</button>
          <div class="instructions mt-2 hidden whitespace-pre-line">${patch.instructions}</div>

          <div class="mt-3">
            <strong>Download:</strong>
            <ul class="list-disc list-inside">
              ${patch.download_links.map(dl => `<li><a href="${dl.url}" target="_blank" class="text-blue-400 underline">${dl.label}</a></li>`).join('')}
            </ul>
          </div>
        `;

        // Toggle instructions visibility
        const btn = patchCard.querySelector("button");
        const instr = patchCard.querySelector(".instructions");
        btn.addEventListener("click", () => {
          if (instr.classList.contains("hidden")) {
            instr.classList.remove("hidden");
            btn.textContent = "Hide Installation Instructions";
          } else {
            instr.classList.add("hidden");
            btn.textContent = "Show Installation Instructions";
          }
        });

        patchList.appendChild(patchCard);
      });
    })
    .catch(err => {
      patchList.textContent = "Failed to load patches.";
      console.error(err);
    });
});
