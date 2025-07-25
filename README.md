# Game Patch Index

Welcome to the Game Patch Index — a community-driven archive of game patches and optional content add-ons.

## What is this?

This site indexes patches created by developers and fans to restore or enhance games. It **does not host patch files** directly; instead, it links to downloads hosted elsewhere.

## How to Use

- Browse the patch listings on the site.
- Use the search bar to find patches by game title, platform, or tags.
- Follow the instructions provided for each patch.
- Click the download links to get the patch files from trusted hosts.

## How to Contribute a Patch Entry

If you’ve created a patch and want to add it to the index:

1. Fork this repository.
2. Open the `data/patches.json` file.
3. Add a new entry following the existing format:

```json
{
  "title": "Example Game: Patch Name",
  "developer": "Your Name or Team",
  "game_url": "https://link-to-game.com",
  "platform": "Windows, Mac, etc.",
  "tags": ["Restoration", "Audio", "Optional"],
  "description": "Brief description of what the patch does.",
  "instructions": "How users install this patch.",
  "download_links": [
    { "label": "Mirror 1", "url": "https://example.com/download" }
  ],
  "date_added": "YYYY-MM-DD"
}


