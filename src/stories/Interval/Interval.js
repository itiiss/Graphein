import {
  cartesian, polar, transpose,
} from '../../coordinate';
import { createInterval as interval } from '../../geometry';
import { createBand } from '../../scale';
import { plot } from '../utils';

export const IntervalDemos = () => {
  const article = document.createElement('article');

  const normalInterval = plot({
    geometry: interval(),
    index: [0, 1, 2],
    scales: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.2,
      }),
    },
    styles: {
      stroke: 'black',
    },
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092'],
      x: [0, 1 / 3, 2 / 3],
      y: [0.6, 0.4, 0.2],
      y1: [1, 1, 1],
    },
  });

  const stackInterval = plot({
    geometry: interval(),
    index: [0, 1, 2, 3, 4, 5],
    styles: {
      stroke: 'black',
    },
    scales: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.2,
      }),
    },
    channels: {
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5AD8A6', '#5AD8A6', '#5AD8A6'],
      x: [0, 1 / 3, 2 / 3, 0, 1 / 3, 2 / 3],
      y: [0.6, 0.5, 0.8, 0.3, 0.2, 0.3],
      y1: [1, 1, 1, 0.6, 0.5, 0.8],
    },
  });

  const groupInterval = plot({
    geometry: interval(),
    index: [0, 1, 2, 3, 4, 5],
    styles: {
      stroke: 'black',
    },
    scales: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.1,
      }),
      z: createBand({
        domain: ['1', '2'],
        range: [0, 1],
        padding: 0.1,
      }),
    },
    channels: {
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5AD8A6', '#5AD8A6', '#5AD8A6'],
      x: [0, 1 / 3, 2 / 3, 0, 1 / 3, 2 / 3],
      y: [0.6, 0.5, 0.8, 0.3, 0.2, 0.3],
      y1: [1, 1, 1, 1, 1, 1],
      z: [0, 0, 0, 1 / 2, 1 / 2, 1 / 2],
    },
  });

  const horizontalInterval = plot({
    geometry: interval(),
    index: [0, 1, 2],
    styles: {
      stroke: 'black',
    },
    scales: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.2,
      }),
    },
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092'],
      x: [0, 1 / 3, 2 / 3],
      y: [0.6, 0.4, 0.2],
      y1: [1, 1, 1],
    },
    transforms: [transpose(), cartesian()],
  });

  const roseInterval = plot({
    geometry: interval(),
    index: [0, 1, 2],
    styles: {
      stroke: 'black',
    },
    scales: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.2,
      }),
    },
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092'],
      x: [0, 1 / 3, 2 / 3],
      y: [0.6, 0.4, 0.2],
      y1: [1, 1, 1],
    },
    transforms: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
    ],
  });

  const donutInterval = plot({
    geometry: interval(),
    index: [0, 1, 2],
    styles: {
      stroke: 'black',
    },
    scales: {
      x: createBand({ domain: [0], range: [0, 1], padding: 0 }),
    },
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092'],
      x: [0, 0, 0],
      y: [0, 1 / 3, 2 / 3],
      y1: [1 / 3, 2 / 3, 1],
    },
    transforms: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
    ],
    get: (d) => d[0][1],
  });

  const pieInterval = plot({
    geometry: interval(),
    index: [0, 1, 2],
    styles: {
      stroke: 'black',
    },
    scales: {
      x: createBand({ domain: [0], range: [0, 1], padding: 0 }),
    },
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092'],
      x: [0, 0, 0],
      y: [0, 1 / 3, 2 / 3],
      y1: [1 / 3, 2 / 3, 1],
    },
    transforms: [
      transpose(),
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
    ],
  });

  article.appendChild(normalInterval);
  article.appendChild(stackInterval);
  article.appendChild(groupInterval);
  article.appendChild(horizontalInterval);
  article.appendChild(roseInterval);
  article.appendChild(donutInterval);
  article.appendChild(pieInterval);

  return article;
};
