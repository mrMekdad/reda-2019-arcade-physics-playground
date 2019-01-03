// Red@ entrypoint for Arcade Physics Playground
const root = document.getElementById('app');
const state = { project: 'arcade-physics-playground', author: 'Red@', theme: 'games', milestones: 3 };
if (root) root.textContent = JSON.stringify(state, null, 2);
