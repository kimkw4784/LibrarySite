import React from 'react';
import './Header.css';

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-logo" role="img" aria-label="화성시립도서관 로고">
        <img 
          src="/logo.png" 
          alt="" 
          className="logo-image" 
        />
        <h1 className="site-name">화성시립도서관</h1>
      </div>
      <button className="menu-button" aria-label="메뉴 열기" onClick={onMenuClick}>
        <svg width="32" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2H33M0 12H33M0 22H33" stroke="var(--color-black)" strokeWidth="3"/>
        </svg>
      </button>
    </header>
  );
};

export default Header;
