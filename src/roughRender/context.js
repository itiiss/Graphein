import rc from 'roughjs/bundled/rough.esm';
import { createSVGElement, mount } from './utils';

export function createContext(width, height) {
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const g = createSVGElement('g');
  mount(svg, g);

  const rough = rc.svg(svg);

  return {
    node: svg,
    group: g,
    rough,
  };
}
