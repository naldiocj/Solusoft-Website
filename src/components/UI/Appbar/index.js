import React from 'react';

import './styles.css';

import logo from '../../../assets/icons/logo-white.svg';
import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import twitter from '../../../assets/icons/twitter.svg';
import youtube from '../../../assets/icons/youtube.svg';

const Appbar = () => (
  <header className='navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-blue'>
    <div className='container'>
      <a className='navbar-brand mr-0 mr-md-2' href='/' aria-label='Bootstrap'>
        <img src={logo} alt='Logotipo da Solusoft' />
      </a>

      <div className='navbar-nav-scroll'>
        <ul className='navbar-nav bd-navbar-nav flex-row menu-main'>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Início
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Bootcamp
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Produtos
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Suporte
            </a>
          </li>
        </ul>
      </div>

      <ul className='navbar-nav ml-md-auto'>
        <li className='nav-item'>
          <a href='#!' className='nav-link'>
            <img src={facebook} alt='Youtube da Solusoft' />
          </a>
        </li>
        <li className='nav-item'>
          <a href='#!' className='nav-link'>
            <img src={instagram} alt='Instagram da Solusoft' />
          </a>
        </li>
        <li className='nav-item'>
          <a href='#!' className='nav-link'>
            <img src={twitter} alt='Instagram da Solusoft' />
          </a>
        </li>
        <li className='nav-item'>
          <a href='#!' className='nav-link'>
            <img src={youtube} alt='Youtube da Solusoft' />
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Appbar;
