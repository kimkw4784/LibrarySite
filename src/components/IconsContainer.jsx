import React from 'react';
import './IconsContainer.css';
import quick1 from '../quick1.png';
import quick2 from '../quick2.png';
import quick3 from '../quick3.png';
import quick4 from '../quick4.png';

const quickMenus = [
  { 
    id: 1, 
    title: '도서관 이용안내', 
    description: '휴관, 회원가입, 대출안내',
    icon: quick1 
  },
  { 
    id: 2, 
    title: '지하철역 도서관', 
    description: '이용장소, 시간, 방법안내',
    icon: quick2 
  },
  { 
    id: 3, 
    title: '희망도서 신청', 
    description: '희망도서 신청, 조회(현황)',
    icon: quick3 
  },
  { 
    id: 4, 
    title: '내가 빌린 책', 
    description: '대출조회, 예약, 연장',
    icon: quick4 
  },
];

const IconsContainer = () => {
  return (
    <div className="icons-container">
      <div className="quick-menu-list">
        {quickMenus.map((menu) => (
          <button key={menu.id} className="quick-menu-item" aria-label={`${menu.title}: ${menu.description}`}>
            <div className="quick-icon-wrapper">
              <img src={menu.icon} alt="" className="quick-icon-img" aria-hidden="true" />
            </div>
            <div className="quick-text-wrapper">
              <span className="quick-title">{menu.title}</span>
              <span className="quick-desc">{menu.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconsContainer;
