import {
  cartesian, polar,
} from '../../coordinate';
import { createRect as rect } from '../../geometry';

import { plot } from '../utils';

export const RectDemos = () => {
  const article = document.createElement('article');

  const normalRect = plot({
    geometry: rect(),
    index: [0, 1, 2],
    scales: {},
    styles: {
      stroke: 'black',
    },
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092'],
      x: [0, 0, 0.5],
      y: [0, 0.5, 0.5],
      x1: [1, 0.5, 1],
      y1: [0.5, 1, 1],
    },
  });

  const polarRect = plot({
    geometry: rect(),
    index: [0, 1, 2],
    scales: {},
    styles: {
      stroke: 'black',
    },
    transforms: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
    ],
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092'],
      x: [0, 0, 0.5],
      y: [0, 0.5, 0.5],
      x1: [1, 0.5, 1],
      y1: [0.5, 1, 1],
    },
    get: (d) => d[0][0],
  });

  article.appendChild(normalRect);
  article.appendChild(polarRect);

  return article;
};
