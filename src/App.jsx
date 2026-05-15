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

function App() {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  const toggleSitemap = () => {
    setIsSitemapOpen(!isSitemapOpen);
  };

  return (
    <div className="container">
      <Header onMenuClick={toggleSitemap} />
      <Sitemap isOpen={isSitemapOpen} onClose={() => setIsSitemapOpen(false)} />
      <main>
        <div className="desktop-top-row">
          <PopupZone />
          <div className="desktop-top-right">
            <SearchContainer />
            <IconsContainer />
          </div>
        </div>
        <div className="desktop-middle-row">
          <CoreMenus />
          <CultureEvents />
        </div>
        <PopularBooks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
