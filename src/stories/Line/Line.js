import {
  cartesian, polar,
} from '../../coordinate';
import { createLine as line } from '../../geometry';

import { plot } from '../utils';

export const LineDemos = () => {
  const article = document.createElement('article');

  const normalLine = plot({
    geometry: line(),
    index: [0, 1, 2, 3],
    styles: {
      stroke: 'black',
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 1, y: 0.2, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 0.3, y: 0.1, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 0.5, y: 0.9, fill: '#5D7092', stroke: '#5D7092',
      },
      {
        lang: 'JavaScript', x1: 0.5, y1: 1, x: 0.9, y: 0.2, fill: '#5D7092', stroke: '#5D7092',
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
        channel: 'stroke',
        field: 'stroke',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9],
      y: [0.2, 0.1, 0.9, 0.2],
    },
  });

  const groupLine = plot({
    geometry: line(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
    scales: {},
    styles: {
      stroke: 'black',
    },
    data: [
      {
        group: 'a', x1: 0.1, y1: 1, x: 0.1, y: 0.2, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.3, y1: 1, x: 0.3, y: 0.1, fill: '#5AD8A6', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.5, y1: 1, x: 0.5, y: 0.9, fill: '#5D7092', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.5, y1: 1, x: 0.9, y: 0.2, fill: '#5D7092', stroke: '#5B8FF9',
      },
      {
        group: 'b', x1: 0.1, y1: 1, x: 0.2, y: 0.9, fill: '#5B8FF9', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.3, y1: 1, x: 0.4, y: 0.3, fill: '#5AD8A6', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.5, y1: 1, x: 0.6, y: 0.5, fill: '#5D7092', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.5, y1: 1, x: 0.8, y: 0.9, fill: '#5D7092', stroke: '#F6BD16',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'x',
      },
      {
        channel: 'z',
        field: 'group',
      },
      {
        channel: 'y',
        field: 'y',
      },
      {
        channel: 'stroke',
        field: 'stroke',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.2, 0.4, 0.6, 0.8],
      y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.5, 0.9],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
  });

  const radarLine = plot({
    geometry: line(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
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
        group: 'a', x1: 0.1, y1: 1, x: 0.1, y: 0.2, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.3, y1: 1, x: 0.3, y: 0.1, fill: '#5AD8A6', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.5, y1: 1, x: 0.5, y: 0.9, fill: '#5D7092', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.5, y1: 1, x: 0.9, y: 0.2, fill: '#5D7092', stroke: '#5B8FF9',
      },
      {
        group: 'b', x1: 0.1, y1: 1, x: 0.1, y: 0.9, fill: '#5B8FF9', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.3, y1: 1, x: 0.3, y: 0.3, fill: '#5AD8A6', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.5, y1: 1, x: 0.5, y: 0.5, fill: '#5D7092', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.5, y1: 1, x: 0.9, y: 0.9, fill: '#5D7092', stroke: '#F6BD16',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'x',
      },
      {
        channel: 'z',
        field: 'group',
      },
      {
        channel: 'y',
        field: 'y',
      },
      {
        channel: 'stroke',
        field: 'stroke',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.4, 0.9],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
  });

  article.appendChild(normalLine);
  article.appendChild(groupLine);
  article.appendChild(radarLine);

  return article;
};
