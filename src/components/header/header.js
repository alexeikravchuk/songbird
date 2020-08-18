import React from 'react';

import './header.scss';
import Logo from '../../../public/assets/img/logo.png';
import steps from '../../../public/steps';

const Header = ({ score, step }) => {
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
        {steps.map((name, index) => (
          <li className={`page-item${step === index ? ' active' : ''}`}>
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
