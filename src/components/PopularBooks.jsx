import React, { useState } from 'react';
import './PopularBooks.css';
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import book5 from '../assets/book5.png';
import book6 from '../assets/book6.png';
import book7 from '../assets/book7.png';
import book8 from '../assets/book8.png';
import book9 from '../assets/book9.png';
import book10 from '../assets/book10.png';
import book11 from '../assets/book11.png';
import book12 from '../assets/book12.png';

const categories = [
  { id: 'popular', label: '인기도서' },
  { id: 'recommended', label: '추천도서' },
  { id: 'new', label: '신착도서' },
];

const bookData = {
  popular: [
    { id: 1, title: '한국인의 건강 밥상', author: '김첨지', cover: book1 },
    { id: 2, title: '달빛에 그린 사랑', author: '문사랑', cover: book2 },
    { id: 3, title: '부의 지도', author: '강부자', cover: book3 },
    { id: 4, title: '빛나는 우리들의 계절', author: '박가을', cover: book4 },
  ],
  recommended: [
    { id: 5, title: 'THE WORLD IS YOURS', author: '신세계', cover: book5 },
    { id: 6, title: '꿈의 온도 20', author: '마음샘', cover: book6 },
    { id: 7, title: '서른, 인생을 다시 쓰는 시간', author: '김지은', cover: book7 },
    { id: 8, title: '긍정의 힘, 성공을 부르다', author: '김지영', cover: book8 },
  ],
  new: [
    { id: 9, title: '나혼자만 레벨업', author: '최만렙', cover: book9 },
    { id: 10, title: '악역의 엔딩은 죽음뿐', author: '끝판왕', cover: book10 },
    { id: 11, title: '킬러 베드로', author: 'A. KIM', cover: book11 },
    { id: 12, title: '허균의 맛', author: '허균', cover: book12 },
  ],
};

const PopularBooks = () => {
  const [activeTab, setActiveTab] = useState('popular');

  return (
    <section className="popular-books" aria-labelledby="popular-books-title">
      <h2 id="popular-books-title" className="sr-only">도서 큐레이션</h2>

      <div className="book-tabs" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeTab === cat.id}
            aria-controls={`${cat.id}-panel`}
            id={`tab-${cat.id}`}
            className={`tab-button ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div
        className="book-list-wrapper"
        role="tabpanel"
        id={`${activeTab}-panel`}
        aria-labelledby={`tab-${activeTab}`}
      >
        <div className="book-list">
          {bookData[activeTab].map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                <img src={book.cover} alt={`${book.title} 표지`} />
              </div>
              <div className="book-info">
                <span className="book-title">{book.title}</span>
                <span className="book-author">{book.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
