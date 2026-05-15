import React from 'react';
import './SearchContainer.css';

const SearchContainer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('검색 실행');
  };

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={handleSubmit} role="search">
        <label htmlFor="library-search" className="sr-only">도서 검색</label>
        <input 
          type="search" 
          id="library-search" 
          className="search-input" 
          placeholder="찾으시는 도서를 검색하세요."
          aria-label="찾으시는 도서를 검색하세요"
        />
        <button type="submit" className="search-button" aria-label="검색">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2.5"/>
            <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchContainer;
