import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false);
  const familySiteRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (familySiteRef.current && !familySiteRef.current.contains(event.target)) {
        setIsFamilySiteOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <nav className="footer-nav" aria-label="하단 메뉴">
          <a href="#terms">이용약관</a>
          <a href="#privacy" className="privacy-policy">개인정보처리방침</a>
          <a href="#directions">찾아오시는 길</a>
          <a href="#sitemap">사이트맵</a>
        </nav>
      </div>

      <div className="footer-middle">
        <div className="family-site" ref={familySiteRef}>
          <button
            type="button"
            className={`family-site-btn ${isFamilySiteOpen ? 'open' : ''}`}
            onClick={() => setIsFamilySiteOpen(!isFamilySiteOpen)}
            aria-expanded={isFamilySiteOpen}
            aria-haspopup="listbox"
          >
            유관기관 사이트
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {isFamilySiteOpen && (
            <ul className="family-site-list" role="listbox">
              <li><a href="https://yeyak.hscity.go.kr/" target="_blank" rel="noopener noreferrer">화성시 통합예약시스템</a></li>
              <li><a href="https://www.hscity.go.kr" target="_blank" rel="noopener noreferrer">화성시청</a></li>
              <li><a href="https://www.hcf.or.kr/hcf/1" target="_blank" rel="noopener noreferrer">화성시문화재단</a></li>
              <li><a href="https://www.hstree.org/" target="_blank" rel="noopener noreferrer">화성시인재육성재단</a></li>
              <li><a href="https://hwaseong.egentouch.com/" target="_blank" rel="noopener noreferrer">화성시통합사립작은도서관</a></li>
              <li><a href="https://www.nl.go.kr/" target="_blank" rel="noopener noreferrer">국립중앙도서관</a></li>
              <li><a href="https://www.nld.go.kr/" target="_blank" rel="noopener noreferrer">국립장애인도서관</a></li>
              <li><a href="https://www.nlcy.go.kr/" target="_blank" rel="noopener noreferrer">국립어린이청소년도서관</a></li>
              <li><a href="https://www.riss.kr/" target="_blank" rel="noopener noreferrer">학술연구정보서비스RISS</a></li>
            </ul>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-info">
          <address>
            경기도 화성시 미래구 가상로 123 (우)00000<br />
            대표전화 : 031-123-4567 | 팩스 : 031-100-2000
          </address>
          <p className="copyright">
            Copyright © 2026 HWASUNG CITY LIBRARY. All Rights Reserved
          </p>
        </div>
        <div className="footer-sns">
          <a href="https://pf.kakao.com/_qxoIxjK" target="_blank" alt="새 창 열림" aria-label="카카오톡 채널">
            <span className="sns-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.91 1.932 5.454 4.876 6.91l-1.077 3.963c-.114.42.368.747.72.482l4.802-3.606c.222.035.448.051.679.051 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
              </svg>
            </span>
          </a>
          <a href="https://www.instagram.com/hwaseong_citylibrary" target="_blank" alt="새 창 열림" aria-label="인스타그램">
            <span className="sns-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
