import {
  cartesian, polar,
} from '../../coordinate';
import { createArea as area } from '../../geometry';

import { plot } from '../utils';

export const AreaDemos = () => {
  const article = document.createElement('article');

  const normalArea = plot({
    geometry: area(),
    index: [0, 1, 2, 3],
    scales: {},
    styles: {
      stroke: 'black',
      fillOpacity: 0.5,
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 0.1, y: 0.2, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 0.3, y: 0.1, fill: '#5AD8A6', stroke: '#5B8FF9',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 0.5, y: 0.9, fill: '#5D7092', stroke: '#5B8FF9',
      },
      {
        lang: 'JavaScript', x1: 0.9, y1: 1, x: 0.9, y: 0.2, fill: '#F6BD16', stroke: '#5B8FF9',
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
        channel: 'stroke',
        field: 'stroke',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16'],
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9],
      y: [0.2, 0.1, 0.9, 0.2],
      x1: [0.1, 0.3, 0.5, 0.9],
      y1: [1, 1, 1, 1],
    },
  });

  const groupArea = plot({
    geometry: area(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
    scales: {},
    styles: {
      stroke: 'black',
      fillOpacity: 0.2,
    },
    data: [
      {
        group: 'a', x1: 0.1, y1: 1, x: 0.1, y: 0.2, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.3, y1: 1, x: 0.3, y: 0.1, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.5, y1: 1, x: 0.5, y: 0.9, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.9, y1: 1, x: 0.9, y: 0.2, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'b', x1: 0.1, y1: 1, x: 0.1, y: 0.9, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.4, y1: 1, x: 0.4, y: 0.3, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.6, y1: 1, x: 0.6, y: 0.5, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.9, y1: 1, x: 0.9, y: 0.9, fill: '#F6BD16', stroke: '#F6BD16',
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
        channel: 'z',
        field: 'group',
      },
      {
        channel: 'stroke',
        field: 'stroke',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.4, 0.6, 0.9],
      y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.5, 0.9],
      x1: [0.1, 0.3, 0.5, 0.9, 0.1, 0.4, 0.6, 0.9],
      y1: [1, 1, 1, 1, 1, 1, 1, 1],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
  });

  const stackArea = plot({
    geometry: area(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
    scales: {},
    styles: {
      stroke: 'black',
      fillOpacity: 0.5,
    },
    data: [
      {
        group: 'a', x1: 0.1, y1: 1, x: 0.1, y: 0.6, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.3, y1: 1, x: 0.3, y: 0.5, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.5, y1: 1, x: 0.5, y: 0.8, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.9, y1: 1, x: 0.9, y: 0.4, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'b', x1: 0.1, y1: 0.6, x: 0.1, y: 0.3, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.4, y1: 0.5, x: 0.4, y: 0.2, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.6, y1: 0.8, x: 0.6, y: 0.3, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.9, y1: 0.4, x: 0.9, y: 0.1, fill: '#F6BD16', stroke: '#F6BD16',
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
        channel: 'z',
        field: 'group',
      },
      {
        channel: 'stroke',
        field: 'stroke',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      x1: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      y: [0.6, 0.5, 0.8, 0.4, 0.3, 0.2, 0.3, 0.1],
      y1: [1, 1, 1, 1, 0.6, 0.5, 0.8, 0.4],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
  });

  const radarArea = plot({
    geometry: area(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
    scales: {},
    styles: {
      stroke: 'black',
      fillOpacity: 0.2,
    },
    coordinate: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0, outerRadius: 1,
      }),
      cartesian(),
    ],
    data: [
      {
        group: 'a', x1: 0.1, y1: 1, x: 0.1, y: 0.2, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.3, y1: 1, x: 0.3, y: 0.1, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.5, y1: 1, x: 0.5, y: 0.9, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.9, y1: 1, x: 0.9, y: 0.2, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'b', x1: 0.1, y1: 1, x: 0.1, y: 0.9, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.3, y1: 1, x: 0.3, y: 0.3, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.5, y1: 1, x: 0.5, y: 0.4, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.9, y1: 1, x: 0.9, y: 0.9, fill: '#F6BD16', stroke: '#F6BD16',
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
        channel: 'z',
        field: 'group',
      },
      {
        channel: 'stroke',
        field: 'stroke',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.4, 0.9],
      x1: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      y1: [1, 1, 1, 1, 1, 1, 1, 1],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
  });

  const polarStackArea = plot({
    geometry: area(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
    scales: {},
    styles: {
      stroke: 'black',
      fillOpacity: 0.2,
    },
    coordinate: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0, outerRadius: 1,
      }),
      cartesian(),
    ],
    data: [
      {
        group: 'a', x1: 0.1, y1: 1, x: 0.1, y: 0.6, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.3, y1: 1, x: 0.3, y: 0.5, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.5, y1: 1, x: 0.5, y: 0.8, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'a', x1: 0.9, y1: 1, x: 0.9, y: 0.4, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        group: 'b', x1: 0.1, y1: 0.6, x: 0.1, y: 0.3, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.3, y1: 0.5, x: 0.3, y: 0.2, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.5, y1: 0.8, x: 0.5, y: 0.3, fill: '#F6BD16', stroke: '#F6BD16',
      },
      {
        group: 'b', x1: 0.9, y1: 0.4, x: 0.9, y: 0.1, fill: '#F6BD16', stroke: '#F6BD16',
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
        channel: 'z',
        field: 'group',
      },
      {
        channel: 'stroke',
        field: 'stroke',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      x1: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      y: [0.6, 0.5, 0.8, 0.4, 0.3, 0.2, 0.3, 0.1],
      y1: [1, 1, 1, 1, 0.6, 0.5, 0.8, 0.4],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
  });

  article.appendChild(normalArea);
  article.appendChild(stackArea);
  article.appendChild(groupArea);
  article.appendChild(radarArea);
  article.appendChild(polarStackArea);

  return article;
};
