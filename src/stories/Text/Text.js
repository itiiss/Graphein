import {
  cartesian, polar,
} from '../../coordinate';
import { createText as text, createLine as line  } from '../../geometry';
import * as sp from '../../index';
import { plot } from '../utils';

export const TextDemos = () => {
  const article = document.createElement('article');

  const normalText = plot({
    geometry: text(),
    index: [0, 1, 2, 3],
    scales: {},
    styles: {
      stroke: 'black',
      fontWeight: 600,
    },
    data: [
      {
        lang: 'Python', fontSize: 40, rotate: 40, x: 0.2, y: 0.4, fill: '#5B8FF9',
      },
      {
        lang: 'Clang', fontSize: 20, rotate: 180, x: 0.7, y: 0.2, fill: '#5AD8A6',
      },
      {
        lang: 'Ruby', fontSize: 60, rotate: 60, x: 0.7, y: 0.6, fill: '#5D7092',
      },
      {
        lang: 'JavaScript', fontSize: 80, rotate: -30, x: 0.3, y: 0.9, fill: '#F6BD16',
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
        channel: 'text',
        field: 'lang',
      },
      {
        channel: 'fontSize',
        field: 'fontSize',
      },
      {
        channel: 'fill',
        field: 'name',
      },
      {
        channel: 'rotate',
        field: 'rotate',
      },
      {
        channel: 'fill',
        field: 'fill',
      },
    ],
    channels: {
      fill: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
      text: ['Rust', 'C', 'JavaScript', 'Python'],
      rotate: [45, 180, 60, -30],
      fontSize: [40, 60, 20, 80],
      x: [0.2, 0.7, 0.7, 0.3],
      y: [0.4, 0.2, 0.6, 0.9],
    },
  });

  article.appendChild(normalText);

  return article;
};
