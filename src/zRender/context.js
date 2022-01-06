import * as zrender from 'zrender';

export function createContext(width, height) {
  const canvasContainer = document.createElement('div');
  canvasContainer.style.width = `${width}px`;
  canvasContainer.style.height = `${height}px`;

  const render = zrender.init(canvasContainer, { renderer: 'canvas', width, height });

  return {
    node: canvasContainer,
    render,
  };
}
