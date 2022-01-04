import {
  cartesian, createCoordinate,
} from '../coordinate';
import { createRenderer } from '../renderer';

export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function plot({
  index,
  values,
  width = 600,
  height = 400,
  scales,
  channels,
  styles,
  geometry,
  guide: guidesDescriptors = [],
  transforms = [cartesian()],
  get = (d) => d[0],
}) {
  const renderer = createRenderer(width, height);
  const coordinate = createCoordinate({
    width,
    height,
    x: 0,
    y: 0,
    transforms,
  });

  geometry({
    renderer, index, values: channels, directStyles: styles, scales, coordinate,
  });

  // for (const [key, guide] of Object.entries(guides)) {
  //   guide({
  //     renderer, scale: scales[key], values: ticks[key], coordinate, title: titles[key],
  //   });
  // }

  //   mount(createDiv(), renderer.node());

  //   const shape = get(shapes);
  return renderer.node();
}
