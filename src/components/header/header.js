import React from 'react';

import './header.scss';
import Logo from '../../../public/assets/img/logo.png';
import { birdGroups } from '../../../public/birdbase';

const Header = ({ score, step }) => {
  return (
    <header className="header d-flex">
      <div className="top-row">
        <a href="#/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <h5 className="score">
          Score: <span>{score}</span>
        </h5>
      </div>

      <ul className="pagination">
        {birdGroups.map((name, index) => (
          <li className={`page-item${step === index ? ' active' : ''}`} key={name}>
            <a className="page-link" href="/#">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
