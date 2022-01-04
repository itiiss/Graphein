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
    scales: {},
    styles: {
      stroke: 'black',
    },
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
    channels: {
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.2, 0.4, 0.6, 0.8],
      y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.5, 0.9],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
    get: (d) => d[1],
  });

  const radarLine = plot({
    geometry: line(),
    index: [0, 1, 2, 3, 4, 5, 6, 7],
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
      stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
      x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
      y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.4, 0.9],
      z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
    },
    get: (d) => d[1],
  });

  article.appendChild(normalLine);
  article.appendChild(groupLine);
  article.appendChild(radarLine);

  return article;
};
