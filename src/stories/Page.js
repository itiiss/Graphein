import './page.css';
import { createHeader } from './Header';
import * as sp from '../plot';

export const createPage = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const article = document.createElement('article');

  const header = createHeader({ onLogin, onLogout, onCreateAccount, user });
  article.appendChild(header);

  const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];


  const chart = sp
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

  article.appendChild(chart);

  // article.insertAdjacentHTML('beforeend', section);

  return article;
};
