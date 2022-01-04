import {
  cartesian, polar,
} from '../../coordinate';
import { createText as text } from '../../geometry';

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
