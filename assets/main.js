async function loadPatches() {
  const response = await fetch('/data/patches.json');
  const patches = await response.json();
  const list = document.getElementById('patchList');
  const searchInput = document.getElementById('search');

  function render(filtered) {
    list.innerHTML = '';
    filtered.forEach(patch => {
      const el = document.createElement('div');
      el.className = 'p-4 bg-zinc-800 rounded shadow';

      const tags = patch.tags.map(tag => `<span class="bg-zinc-700 text-xs px-2 py-1 rounded mr-2">${tag}</span>`).join('');
      const links = patch.download_links.map(link => `<a href="${link.url}" class="underline mr-4" target="_blank">${link.label}</a>`).join('');

      el.innerHTML = `
        <h2 class="text-lg font-semibold">${patch.title}</h2>
        <p class="text-sm text-zinc-400 mb-1">By ${patch.developer} • ${patch.platform}</p>
        <p class="mb-2">${patch.description}</p>
        <div class="mb-2">${tags}</div>
        <p class="mb-2"><strong>Instructions:</strong> ${patch.instructions}</p>
        <div class="mb-2">${links}</div>
        <p class="text-xs text-zinc-500">Added: ${patch.date_added}</p>
      `;
      list.appendChild(el);
    });
  }

  render(patches);

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    const filtered = patches.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.platform.toLowerCase().includes(q) ||
      p.tags.join(' ').toLowerCase().includes(q)
    );
    render(filtered);
  });
}

loadPatches();
