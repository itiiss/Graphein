import './page.css';
import { createHeader } from './Header';
import * as sp from '../plot';

export const createPage = ({
  user, onLogout, onLogin, onCreateAccount,
}) => {
  const article = document.createElement('article');

  const header = createHeader({
    onLogin, onLogout, onCreateAccount, user,
  });
  article.appendChild(header);

  const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];

  const chart = sp
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

  const chart2 = sp
    .interval()
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

  const chart5 = sp
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

  const chart6 = sp
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

  const chart3 = sp
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

  const chart4 = sp
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

  const chart7 = sp
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

  article.appendChild(chart);
  article.appendChild(chart2);
  article.appendChild(chart5);
  article.appendChild(chart6);
  article.appendChild(chart3);
  article.appendChild(chart4);
  article.appendChild(chart7);

  // article.insertAdjacentHTML('beforeend', section);

  return article;
};
