import {
  cartesian, polar,
} from '../../coordinate';
import { createPoint as point } from '../../geometry';

import { plot } from '../utils';

export const PointDemos = () => {
  const article = document.createElement('article');

  const normalPoint = plot({
    geometry: point(),
    index: [0, 1, 2, 3],
    scales: {},
    styles: {
      strokeWidth: 2,
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 0.2, y: 0.3, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 0.5, y: 0.1, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 0.7, y: 0.4, fill: '#5D7092', stroke: '#5D7092',
      },
      {
        lang: 'JavaScript', x1: 0.5, y1: 1, x: 0.9, y: 0.5, fill: '#5D7092', stroke: '#F6BD16',
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
      stroke: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
      x: [0.2, 0.5, 0.7, 0.9],
      y: [0.3, 0.1, 0.4, 0.5],
    },
  });

  const radiusPoint = plot({
    geometry: point(),
    index: [0, 1, 2, 3],
    scales: {},
    styles: {
      fillOpacity: 0.5,
    },
    data: [
      {
        lang: 'Python', r: 20, y1: 1, x: 0.2, y: 0.3, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', r: 5, y1: 1, x: 0.5, y: 0.1, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', r: 30, y1: 1, x: 0.7, y: 0.4, fill: '#5D7092', stroke: '#5D7092',
      },
      {
        lang: 'JavaScript', r: 40, y1: 1, x: 0.9, y: 0.5, fill: '#F6BD16', stroke: '#F6BD16',
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
      {
        channel: 'r',
        field: 'r',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
      x: [0.2, 0.5, 0.7, 0.9],
      y: [0.3, 0.1, 0.4, 0.5],
      r: [20, 5, 30, 40],
    },
  });

  const polarPoint = plot({
    geometry: point(),
    index: [0, 1, 2, 3],
    scales: {},
    styles: {
      fillOpacity: 0.5,
    },
    coordinate: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
    ],
    data: [
      {
        lang: 'Python', r: 20, y1: 1, x: 0.2, y: 0.3, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', r: 5, y1: 1, x: 0.5, y: 0.1, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', r: 30, y1: 1, x: 0.7, y: 0.4, fill: '#5D7092', stroke: '#5D7092',
      },
      {
        lang: 'JavaScript', r: 40, y1: 1, x: 0.9, y: 0.5, fill: '#F6BD16', stroke: '#F6BD16',
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
      {
        channel: 'r',
        field: 'r',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
      x: [0.2, 0.5, 0.7, 0.9],
      y: [0.3, 0.1, 0.4, 0.5],
      r: [20, 5, 30, 40],
    },
  });

  article.appendChild(normalPoint);
  article.appendChild(radiusPoint);
  article.appendChild(polarPoint);

  return article;
};
