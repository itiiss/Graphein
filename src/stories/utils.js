import * as zrender from 'zrender';
import {
  cartesian, createCoordinate,
} from '../coordinate';
import { createRenderer } from '../renderer';
import { createZRenderer } from '../zRender';
import { createRoughRenderer } from '../roughRender';
import { createGuides } from '../plot/guide';
import { patchEncode } from '../plot/encode';
import { valuesOf } from '../plot/data';
import { calcDimensions } from '../plot/dimension';
import { range } from '../plot/utils';
import { createScales, applyScales } from '../plot/scale';
import { applyStatistics } from '../plot/statistic';

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
  element: geometryType,
  rendererType = 'svg',
  data = [],
  scale: scaleOptions = [],
  coordinate: transformDescriptors = [cartesian()],
  encode = [],
  statistic: statisticDescriptors = [],
  guide: guidesDescriptors = [],
  style = {},
  index,
  channels,
  styles,
  geometry,
  transforms = [cartesian()],
  ...options
}) {
  const encodes = patchEncode(geometryType, encode);

  const values = valuesOf(data, encodes, channels);
  const transformedValues = applyStatistics(index, values, geometryType, statisticDescriptors);
  const [scaleDescriptors, scales] = createScales(
    transformedValues,
    channels,
    transformDescriptors,
    [scaleOptions],
  );
  const scaledValues = applyScales(transformedValues, scales);

  console.log('zrender', zrender);

  const [guides, ticks, titles] = createGuides(
    guidesDescriptors,
    scaleDescriptors,
    scales,
    encodes,
  );

  const {
    width, height, marginTop, marginLeft, chartHeight, chartWidth,
  } = calcDimensions(ticks, titles, transformDescriptors, options);

  const coordinate = createCoordinate({
    x: marginLeft,
    y: marginTop,
    width: chartWidth,
    height: chartHeight,
    transforms: transformDescriptors,
  });

  let renderer;
  if (rendererType === 'svg') {
    renderer = createRenderer(width, height);
  } else if (rendererType === 'canvas') {
    renderer = createZRenderer(width, height);
  } else if (rendererType === 'rough') {
    renderer = createRoughRenderer(width, height);
  }

  geometry({
    renderer, index, values: channels, directStyles: styles, scales: scaleOptions, coordinate,
  });

  for (const [key, guide] of Object.entries(guides)) {
    guide({
      renderer, scale: scales[key], values: ticks[key], coordinate, title: titles[key],
    });
  }
  return renderer.node();
}
