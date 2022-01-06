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
    rendererType: 'canvas',
    scale: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.2,
      }),
    },
    styles: {
      stroke: 'black',
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 0, y: 0.6, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 1 / 3, y: 0.4, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 2 / 3, y: 0.2, fill: '#5D7092', stroke: '#5D7092',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'lang',
      },
      {
        channel: 'y',
        field: 'y',
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
    scale: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.2,
      }),
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 0, y: 0.6, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 1 / 3, y: 0.5, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 2 / 3, y: 0.8, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Python', x1: 0.1, y1: 0.6, x: 0, y: 0.3, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 0.5, x: 1 / 3, y: 0.2, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 0.8, x: 2 / 3, y: 0.3, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'lang',
      },
      {
        channel: 'y',
        field: 'y',
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
      fill: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5AD8A6', '#5AD8A6', '#5AD8A6'],
      x: [0, 1 / 3, 2 / 3, 0, 1 / 3, 2 / 3],
      y: [0.6, 0.5, 0.8, 0.3, 0.2, 0.3],
      y1: [1, 1, 1, 0.6, 0.5, 0.8],
    },
  });

  const groupInterval = plot({
    geometry: interval(),
    index: [0, 1, 2, 3, 4, 5],
    rendererType: 'rough',
    styles: {
      stroke: 'black',
    },
    scale: {
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
    data: [
      {
        lang: 'Python', z: 0, y1: 1, x: 0, y: 0.6, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', z: 0, y1: 1, x: 1 / 3, y: 0.5, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Ruby', z: 0, y1: 1, x: 2 / 3, y: 0.8, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Python', z: 0.5, y1: 1, x: 0, y: 0.3, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Clang', z: 0.5, y1: 1, x: 1 / 3, y: 0.2, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', z: 0.5, y1: 1, x: 2 / 3, y: 0.3, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'lang',
      },
      {
        channel: 'y',
        field: 'y',
      },
      {
        channel: 'z',
        field: 'z',
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
    scale: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.2,
      }),
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 0, y: 0.6, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 1 / 3, y: 0.4, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 2 / 3, y: 0.2, fill: '#5D7092', stroke: '#5D7092',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'lang',
      },
      {
        channel: 'y',
        field: 'y',
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
      x: [0, 1 / 3, 2 / 3],
      y: [0.6, 0.4, 0.2],
      y1: [1, 1, 1],
    },
    coordinate: [transpose(), cartesian()],
  });

  const roseInterval = plot({
    geometry: interval(),
    index: [0, 1, 2],
    styles: {
      stroke: 'black',
    },
    scale: {
      x: createBand({
        domain: ['a', 'b', 'c'],
        range: [0, 1],
        padding: 0.2,
      }),
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1, x: 0, y: 0.6, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 1, x: 1 / 3, y: 0.4, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 2 / 3, y: 0.2, fill: '#5D7092', stroke: '#5D7092',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'lang',
      },
      {
        channel: 'y',
        field: 'y',
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
      x: [0, 1 / 3, 2 / 3],
      y: [0.6, 0.4, 0.2],
      y1: [1, 1, 1],
    },
    coordinate: [
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
    scale: {
      x: createBand({ domain: [0], range: [0, 1], padding: 0 }),
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1 / 3, x: 0, y: 0, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 2 / 3, x: 0, y: 1 / 3, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 0.1, y: 2 / 3, fill: '#5D7092', stroke: '#5D7092',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'lang',
      },
      {
        channel: 'y',
        field: 'y',
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
      x: [0, 0, 0],
      y: [0, 1 / 3, 2 / 3],
      y1: [1 / 3, 2 / 3, 1],
    },
    coordinate: [
      polar({
        startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
      }),
      cartesian(),
    ],
  });

  const pieInterval = plot({
    geometry: interval(),
    rendererType: 'rough',
    index: [0, 1, 2],
    styles: {
      stroke: 'black',
    },
    scale: {
      x: createBand({ domain: [0], range: [0, 1], padding: 0 }),
    },
    data: [
      {
        lang: 'Python', x1: 0.1, y1: 1 / 3, x: 0, y: 0, fill: '#5B8FF9', stroke: '#5B8FF9',
      },
      {
        lang: 'Clang', x1: 0.3, y1: 2 / 3, x: 0, y: 1 / 3, fill: '#5AD8A6', stroke: '#5AD8A6',
      },
      {
        lang: 'Ruby', x1: 0.5, y1: 1, x: 0.1, y: 2 / 3, fill: '#5D7092', stroke: '#5D7092',
      },
    ],
    encode: [
      {
        channel: 'x',
        field: 'lang',
      },
      {
        channel: 'y',
        field: 'y',
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
      x: [0, 0, 0],
      y: [0, 1 / 3, 2 / 3],
      y1: [1 / 3, 2 / 3, 1],
    },
    coordinate: [
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
