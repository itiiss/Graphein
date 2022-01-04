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
    transforms: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
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
