import React from 'react';

import './header.scss';
import Logo from '../../../public/logo.png';

const Header = ({ score }) => {
  return (
    <header className="header d-flex">
      <div className="top-row">
        <a href="#/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <div className="score">
          Score: <span>{score}</span>
        </div>
      </div>

      <ul className="pagination">
        <li className="page-item active">
          <a className="page-link" href="/#">
            Разминка
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">
            Воробьиные
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">
            Лесные птицы
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">
            Певчие птицы
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">
            Хищные птицы
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">
            Морские птицы
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
