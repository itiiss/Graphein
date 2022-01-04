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
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 0, y: 0, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 0, y: 0.5, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 0.5, y: 0, fill: '#5D7092', stroke: '#5D7092',
      },
      {
        lang: 'JavaScript', x1: 0.5, y1: 1, x: 0.5, y: 0.5, fill: '#F6BD16', stroke: '#5D7092',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'x',
      },
      {
        channel: 'y',
        field: 'y',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    scale: {
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
    scale: {
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
    coordinate: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
    ],
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 0, y: 0, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 0, y: 0.5, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 0.5, y: 0, fill: '#5D7092', stroke: '#5D7092',
      },
      {
        lang: 'JavaScript', x1: 0.5, y1: 1, x: 0.5, y: 0.5, fill: '#F6BD16', stroke: '#5D7092',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'x',
      },
      {
        channel: 'y',
        field: 'y',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
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
