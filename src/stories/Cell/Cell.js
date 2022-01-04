import {
  cartesian, polar,
} from '../../coordinate';
import { createCell as cell } from '../../geometry';
import { createBand } from '../../scale';

import { plot } from '../utils';

export const CellDemos = () => {
  const article = document.createElement('article');

  const normalCell = plot({
    geometry: cell(),
    index: [0, 1, 2, 3],
    scales: {
      x: createBand({
        domain: ['a', 'b'],
        range: [0, 1],
        padding: 0,
      }),
      y: createBand({
        domain: ['c', 'd'],
        range: [0, 1],
        padding: 0,
      }),
    },
    styles: {
      stroke: 'black',
    },
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
      x: [0, 0, 0.5, 0.5],
      y: [0, 0.5, 0, 0.5],
    },
  });

  const polarCell = plot({
    geometry: cell(),
    index: [0, 1, 2, 3],
    scales: {
      x: createBand({
        domain: ['a', 'b'],
        range: [0, 1],
        padding: 0,
      }),
      y: createBand({
        domain: ['c', 'd'],
        range: [0, 1],
        padding: 0,
      }),
    },
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
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
      x: [0, 0, 0.5, 0.5],
      y: [0, 0.5, 0, 0.5],
    },
  });

  article.appendChild(normalCell);
  article.appendChild(polarCell);

  return article;
};
