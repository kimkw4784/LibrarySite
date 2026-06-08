import React, { useState } from 'react';
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';
import PopupZone from './components/PopupZone';
import CoreMenus from './components/CoreMenus';
import CultureEvents from './components/CultureEvents';
import IconsContainer from './components/IconsContainer';
import PopularBooks from './components/PopularBooks';
import Footer from './components/Footer';
import Sitemap from './components/Sitemap';
import DetailPage from './components/DetailPage';

function App() {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [viewDetail, setViewDetail] = useState(null);

  const toggleSitemap = () => {
    setIsSitemapOpen(!isSitemapOpen);
  };

  const handleItemClick = (type, item) => {
    if (window.innerWidth >= 1024) {
      setViewDetail({ type, ...item });
      // 스크롤 상단으로 올리기
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="container">
      <Header onMenuClick={toggleSitemap} />
      <Sitemap isOpen={isSitemapOpen} onClose={() => setIsSitemapOpen(false)} />
      
      {viewDetail && window.innerWidth >= 1024 ? (
        <DetailPage item={viewDetail} onBack={() => setViewDetail(null)} />
      ) : (
        <main>
          <div className="desktop-top-row">
            <PopupZone />
            <div className="desktop-top-right">
              <SearchContainer />
              <IconsContainer />
            </div>
          </div>
          <div className="desktop-middle-row">
            <CoreMenus onItemClick={(item) => handleItemClick('notice', item)} />
            <CultureEvents onItemClick={(item) => handleItemClick('event', item)} />
          </div>
          <PopularBooks />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
