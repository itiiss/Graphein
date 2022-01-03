import { cartesian, polar } from '../coordinate';
import * as sp from '../plot';
import { createLine } from '../geometry';
import { plot } from './utils';

export const SingleChart = () => {
  const article = document.createElement('article');

  // article.appendChild(header);

  // const zData = [
  //   { genre: 'Sports', sold: 275, group: 'a' },
  //   { genre: 'Strategy', sold: 115, group: 'a' },
  //   { genre: 'Action', sold: 120, group: 'a' },
  //   { genre: 'Shooter', sold: 350, group: 'a' },
  //   { genre: 'Other', sold: 150, group: 'a' },
  //   { genre: 'jojo', sold: 50, group: 'a' },
  //   { genre: 'Sports', sold: 175, group: 'b' },
  //   { genre: 'Strategy', sold: 215, group: 'b' },
  //   { genre: 'Action', sold: 170, group: 'b' },
  //   { genre: 'Shooter', sold: 250, group: 'b' },
  //   { genre: 'Other', sold: 175, group: 'b' },
  //   { genre: 'jojo', sold: 150, group: 'b' },
  // ];

  const data = [
    { genre: 'Sports', sold: 275, group: 'a' },
    { genre: 'Strategy', sold: 115, group: 'a' },
    { genre: 'Action', sold: 120, group: 'a' },
    { genre: 'Shooter', sold: 350, group: 'a' },
    { genre: 'jojo', sold: 50, group: 'a' },
    { genre: 'Other', sold: 150, group: 'a' },
  ];

  // const radar = plot({
  //   geometry: createLine,
  //   index: [0, 1, 2, 3, 4, 5, 6, 7],
  //   scales: {},
  //   styles: {
  //     stroke: 'black',
  //   },
  //   transforms: [
  //     polar({
  //       startAngle: 0, endAngle: Math.PI * 2, innerRadius: 0.2, outerRadius: 1,
  //     }),
  //     cartesian(),
  //   ],
  //   channels: {
  //     stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
  //     x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
  //     y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.4, 0.9],
  //     z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
  //   },
  //   get: (d) => d[1],
  // });

  // const lineChart = sp.plot({
  //   element: 'line',
  //   data: zData,
  //   scales: {},
  //   encode: [{ channel: 'x', field: 'genre' }, { channel: 'y', field: 'sold' }, { channel: 'stroke', field: 'genre' }, { channel: 'z', field: 'group' }],
  //   styles: {
  //     stroke: 'black',
  //   },
  //   coordinate: [],
  //   channels: {
  //     stroke: ['#5B8FF9', '#5B8FF9', '#5B8FF9', '#5B8FF9', '#F6BD16', '#F6BD16', '#F6BD16', '#F6BD16'],
  //     x: [0.1, 0.3, 0.5, 0.9, 0.2, 0.4, 0.6, 0.8],
  //     y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.5, 0.9],
  //     z: ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'],
  //   },
  // });

  const textChart = sp
    .word()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.stroke().field('genre'),
      sp.fill().field('genre'),
      sp.text().field('genre'),
      sp.fontSize().field('sold'),
    )
    .plot();

  const lineChart = sp
    .line()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.stroke().field('genre'),
      sp.fill().field('genre'),
    )
    .scale(sp.linear())
    // .coordinate(sp.transpose(), sp.polar())
    .plot();

  const radarLineChart = sp
    .line()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.stroke().field('genre'),
      sp.fill().field('genre'),
    )
    .scale(sp.linear())
    .coordinate(sp.polar())
    .plot();

  const barChart = sp
    .interval()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.fill().field('genre'),
    )
    // .coordinate(sp.transpose(), sp.polar())
    .plot();

  const horionzalBarChart = sp
    .interval()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.stroke().field('group'),
      sp.fill().field('group'),
    )
    .coordinate(sp.transpose())
    .plot();

  const scatterChart = sp
    .point()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.r().field('sold'),
      sp.stroke().field('genre'),
      sp.fill().field('genre'),
    )
    .scale(sp.linear())
    // .coordinate(sp.transpose(), sp.polar())
    .plot();

  const polarScatterChart = sp
    .point()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.r().field('sold'),
      sp.stroke().field('genre'),
      sp.fill().field('genre'),
    )
    .scale(sp.linear())
    .coordinate(sp.polar())
    .plot();

  const ringChart = sp
    .interval()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.stroke().field('genre'),
      sp.fill().field('genre'),
    )
    .scale(sp.linear())
    .coordinate(sp.transpose(), sp.polar())
    .plot();

  const pieChart = sp
    .interval()
    .data(data)
    .encode(
      sp.x().field('genre'),
      sp.y().field('sold'),
      sp.stroke().field('genre'),
      sp.fill().field('genre'),
    )
    .scale(sp.linear())
    .coordinate(sp.polar())
    .plot();

  article.appendChild(lineChart);
  article.appendChild(radarLineChart);
  article.appendChild(barChart);
  // article.appendChild(horionzalBarChart);
  article.appendChild(ringChart);
  article.appendChild(pieChart);
  article.appendChild(scatterChart);
  article.appendChild(polarScatterChart);
  article.appendChild(textChart);

  // article.insertAdjacentHTML('beforeend', section);

  return article;
};
