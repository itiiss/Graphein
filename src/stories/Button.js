import './button.css';
import * as sp from '../plot';
import { createBand } from '../scale';

export const createButton = ({
}) => {
  const page = document.createElement('page');

  // '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16'
  const data = [
    {
      genre: 'Sports', x: 0.1, x1: 0.1, y: 0.2, y1: 0, group: 'a', fill: '5B8FF9',
    },
    {
      genre: 'Strategy', x: 0.3, x1: 0.3, y: 0.2, y1: 0, group: 'a', fill: '5B8FF9',
    },
    {
      genre: 'Action', x: 0.5, x1: 0.5, y: 0.3, y1: 0, group: 'a', fill: '5B8FF9',
    },
    {
      genre: 'Shooter', x: 0.9, x1: 0.9, y: 0.2, y1: 0.01, group: 'a', fill: 'F6BD16',
    },
  ];

  const rectData = [
    {
      genre: 'Sports', x: 0, x1: 1, y: 0, y1: 0.5, group: 'a', fill: '5B8FF9',
    },
    {
      genre: 'Strategy', x: 0.5, x1: 0.5, y: 0.5, y1: 1, group: 'a', fill: '5B8FF9',
    },
    {
      genre: 'Action', x: 0, x1: 1, y: 0.5, y1: 1, group: 'a', fill: '5B8FF9',
    },
    // {
    //   genre: 'Shooter', x: 0.9, x1: 0.9, y: 0.2, y1: 0.01, group: 'a', fill: 'F6BD16',
    // },
  ];

  const cellData = [
    {
      genre: 'Sports', x: 0, x1: 1, y: 0, y1: 0.5, group: 'a', fill: '5B8FF9',
    },
    {
      genre: 'Strategy', x: 0, x1: 0.5, y: 0.5, y1: 1, group: 'a', fill: '5B8FF9',
    },
    {
      genre: 'Action', x: 0.5, x1: 1, y: 0, y1: 1, group: 'a', fill: '5B8FF9',
    },
    {
      genre: 'Shooter', x: 0.5, x1: 0.9, y: 0.5, y1: 0.01, group: 'a', fill: 'F6BD16',
    },
  ];

  const areaChart = sp
    .area()
    .data(data)
    .encode(
      sp.x().field('x'),
      sp.y().field('y'),
      sp.x1().field('x1'),
      sp.y1().field('y1'),
      sp.stroke().field('genre'),
      sp.fill().field('fill'),
    )
    .plot();

  const areaPolarChart = sp
    .area()
    .data(data)
    .encode(
      sp.x().field('x'),
      sp.y().field('y'),
      sp.x1().field('x1'),
      sp.y1().field('y1'),
      sp.stroke().field('genre'),
      sp.fill().field('fill'),
    )
    .coordinate(sp.polar())
    .plot();

  const rectChart = sp
    .rect()
    .data(rectData)
    .encode(
      sp.x().field('x'),
      sp.y().field('y'),
      sp.x1().field('x1'),
      sp.y1().field('y1'),
      sp.stroke().field('genre'),
      sp.fill().field('fill'),
    )
    .plot();

  const rectPolarChart = sp
    .rect()
    .data(rectData)
    .encode(
      sp.x().field('x'),
      sp.y().field('y'),
      sp.x1().field('x1'),
      sp.y1().field('y1'),
      sp.stroke().field('genre'),
      sp.fill().field('fill'),
    )
    .coordinate(sp.polar())
    .plot();

  const cellChart = sp
    .cell()
    .data(cellData)
    .encode(
      sp.x().field('x'),
      sp.y().field('y'),
      sp.stroke().field('genre'),
      sp.fill().field('fill'),
    )
    .scale(
      {
        x: createBand({
          domain: ['a', 'b'],
          range: [0, 1],
          padding: 0,
        }),
        y: createBand({
          domain: ['c', 'd'],
          range: [0, 1],
          padding: 0,
        }),
      },
    )
    .plot();

  page.appendChild(areaChart);
  page.appendChild(areaPolarChart);
  page.appendChild(rectChart);
  page.appendChild(rectPolarChart);
  page.appendChild(cellChart);

  return page;
};
