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
    data: [
      {
        lang: 'Python', x1: 1, y1: 0.5, x: 0, y: 0, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.5, y1: 1, x: 0, y: 0.5, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 1, y1: 1, x: 0.5, y: 0.5, fill: '#5D7092', stroke: '#5D7092',
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
        channel: 'x1',
        field: 'x1',
      },
      {
        channel: 'y1',
        field: 'y1',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
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
    coordinate: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
    ],
    data: [
      {
        lang: 'Python', x1: 1, y1: 0.5, x: 0, y: 0, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.5, y1: 1, x: 0, y: 0.5, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 1, y1: 1, x: 0.5, y: 0.5, fill: '#5D7092', stroke: '#5D7092',
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
        channel: 'x1',
        field: 'x1',
      },
      {
        channel: 'y1',
        field: 'y1',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092'],
      x: [0, 0, 0.5],
      y: [0, 0.5, 0.5],
      x1: [1, 0.5, 1],
      y1: [0.5, 1, 1],
    },
  });

  article.appendChild(normalRect);
  article.appendChild(polarRect);

  return article;
};
