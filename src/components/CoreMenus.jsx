import React from 'react';
import './CoreMenus.css';

const notices = [
  { id: 1, category: '공통', categoryType: 'darkgray', title: '[도서관 소식지 풍경] 2026년 봄호(65호) 발간 안내', date: '2026-04-10' },
  { id: 2, category: '화성', categoryType: 'coralred', title: '화성시립남양도서관 기간제근로자 채용 공고', date: '2026-04-03' },
  { id: 3, category: '공통', categoryType: 'darkgray', title: '제60회 도서관주간 및 도서관의 날 행사 안내', date: '2026-03-25' },
  { id: 4, category: '이벤트', categoryType: 'coralred', title: '2026년 상반기 독서교실 수강생 모집', date: '2026-03-15' },
];

const CoreMenus = ({ onItemClick }) => {
  return (
    <div className="core-services">
      <section className="notice-section">
        <div className="section-header">
          <h2 className="section-title">공지사항</h2>
          <button className="more-btn" aria-label="공지사항 더보기">+ 더보기</button>
        </div>
        <ul className="notice-list">
          {notices.map((notice) => (
            <li key={notice.id} className="notice-item">
              <div className="notice-content">
                <span className={`tag ${notice.categoryType}`}>{notice.category}</span>
                <a href="#" className="notice-link" onClick={(e) => {
                  e.preventDefault();
                  if (onItemClick) onItemClick(notice);
                }}>{notice.title}</a>
              </div>
              <span className="notice-date">{notice.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CoreMenus;
