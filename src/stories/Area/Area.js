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
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.4, 0.6, 0.9],
      y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.5, 0.9],
      x1: [0.1, 0.3, 0.5, 0.9, 0.1, 0.4, 0.6, 0.9],
      y1: [1, 1, 1, 1, 1, 1, 1, 1],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
    get: (d) => d[1],
  });

  const stackArea = plot({
    geometry: area(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
    scales: {},
    styles: {
      stroke: 'black',
      fillOpacity: 0.5,
    },
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      x1: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      y: [0.6, 0.5, 0.8, 0.4, 0.3, 0.2, 0.3, 0.1],
      y1: [1, 1, 1, 1, 0.6, 0.5, 0.8, 0.4],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
    get: (d) => d[1],
  });

  const radarArea = plot({
    geometry: area(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
    scales: {},
    styles: {
      stroke: 'black',
      fillOpacity: 0.2,
    },
    transforms: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0, outerRadius: 1,
      }),
      cartesian(),
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
    get: (d) => d[1][1],
  });

  const polarStackArea = plot({
    geometry: area(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
    scales: {},
    styles: {
      stroke: 'black',
      fillOpacity: 0.2,
    },
    transforms: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0, outerRadius: 1,
      }),
      cartesian(),
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
    get: (d) => d[1][1],
  });

  article.appendChild(normalArea);
  article.appendChild(stackArea);
  article.appendChild(groupArea);
  article.appendChild(radarArea);
  article.appendChild(polarStackArea);

  return article;
};
