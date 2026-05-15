import React, { useEffect, useState } from 'react';
import './Sitemap.css';

const sitemapData = {
  '도서관 안내': ['도서관 이용안내', '도서관 상징', '도서관 정책', '운영규정', '조직도', '공공도서관', '작은도서관', '스마트도서관', '리브로피아(모바일)'],
  '자료검색': ['통합자료검색', '주제별검색', '신착자료검색', '스마트도서관검색', '인기도서', '추천도서', '정기간행물 구독목록', '희망도서신청'],
  '도서관 서비스': ['함께읽는 책', '북스타트', '책읽는 50+', '사람책 도서관', '상호대차', '사립작은도서관', '책이음', '[중앙/도]책배달', '사서에게 물어보세요'],
  '디지털 자료': ['오디오북', '전자책', '전자잡지', '학술논문원문', '소식지(도서관풍경)'],
  '열린마당': ['공지사항', '보도자료', '도서관 행사', '월별 주요행사', '설문조사', '열람실 좌석현황'],
  '나의 서재': ['나의정보', '도서이용정보', '상호대차조회', '작은도서관책배달 조회', '희망도서신청 조회', '온라인신청 현황', '나만의 책장', '맞춤 추천도서'],
  '회원정보': ['로그인', '회원가입', '아이디찾기', '비밀번호재발급'],
  '홈페이지 이용안내': ['사이트맵', '개인정보처리방침', '영상정보처리기기 방침', '이용약관', '이메일무단수집거부']
};

const Sitemap = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState('도서관 안내');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      // 스크롤바 너비를 계산하여 padding-right로 추가 (레이아웃 이동 방지)
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';

      window.addEventListener('keydown', handleKeyDown);
      setActiveMenu('도서관 안내');
    } else {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`sitemap-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} aria-hidden={!isOpen}>
      <aside
        className={`sitemap-container ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="사이트맵"
        aria-modal="true"
      >
        <div className="sitemap-header">
          <h1 className="sitemap-title">화성시립도서관</h1>
          <button className="sitemap-close" onClick={onClose} aria-label="메뉴 닫기">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="sitemap-content">
          <div className="sitemap-left-pane">
            {Object.keys(sitemapData).map((menu) => (
              <button
                key={menu}
                className={`sitemap-menu-item ${activeMenu === menu ? 'active' : ''}`}
                onClick={() => setActiveMenu(menu)}
              >
                {menu}
              </button>
            ))}
          </div>
          <div className="sitemap-right-pane">
            <ul className="sitemap-submenu-list">
              {sitemapData[activeMenu].map((submenu, index) => (
                <li key={index}>
                  <a href="#" className="sitemap-submenu-item">{submenu}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sitemap;

