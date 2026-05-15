import React, { useState, useEffect } from 'react';
import './PopupZone.css';

const banners = [
  {
    id: 1,
    title: '<매주 수요일> 문화가 있는 날',
    color: '#1a3c6e',
    image: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84c5d734-33f0-4c50-ab2d-0cb0e54a757f',
    description: '4월 1일부터 화성시립도서관에서 매주 수요일 문화가 있는 날 두배로 대출 DAY가 시작됩니다~',
    date: '매주 수요일',
    location: '도서관 소식 - 공지사항',
    target: '화성시립도서관 회원',
    contact: '031-123-4567'
  },
  {
    id: 2,
    title: '전자책(e-Book) 이용 방법 안내',
    color: '#2b908f',
    image: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99957617-fce2-4560-981f-b583a3e6010b',
    description: '스마트폰과 PC로 언제 어디서나 편리하게 화성시립도서관의 5만 여종 전자책을 무료로 대출하고 열람하는 방법을 안내해 드립니다.',
    date: '연중 상시',
    location: '도서관 소식 - 이용안내',
    target: '화성시립도서관 정회원',
    contact: '031-123-1002 (디지털자료팀)'
  },
  {
    id: 3,
    title: '도서관 주간 두배로 대출 이벤트',
    color: '#f9a826',
    image: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d49dd4b6-555e-4e9b-baf0-a482a605a889',
    description: '제62회 도서관 주간을 맞이하여, 행사 기간 동안 1인당 도서 대출 권수를 기존 7권에서 14권으로 두 배 확대합니다!',
    date: '2026. 04. 12 ~ 2026. 04. 18',
    location: '도서관 소식 - 행사안내',
    target: '도서관 대출회원 누구나',
    contact: '031-123-1003 (종합자료실)'
  },
  {
    id: 4,
    title: '오디오북 제작사업 참여자 모집',
    color: '#673ab7',
    image: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/703214eb-ad8e-4ced-aebe-778783563940',
    description: '시각장애인을 위한 소리 도서 제작에 목소리 재능기부로 참여할 낭독 봉사자를 모집합니다. 전문 성우의 낭독 교육도 무료로 지원됩니다.',
    date: '2026. 06. 01 ~ 2026. 06. 15',
    location: '도서관 소식 - 자원봉사',
    target: '낭독 봉사에 관심 있는 성인 20명',
    contact: '031-123-1004 (정보서비스팀)'
  },
  {
    id: 5,
    title: '비블리오 배틀 주제 시민 공모',
    color: '#2e7d32',
    image: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6db72490-58c5-412b-b57f-1cec14a6470d',
    description: '시민들이 직접 책을 소개하고 토론하는 서평 대결, "비블리오 배틀"에서 다룰 흥미로운 주제를 시민 여러분이 직접 제안해 주세요!',
    date: '2026. 05. 20 ~ 2026. 06. 10',
    location: '도서관 소식 - 공지사항',
    target: '책을 사랑하는 화성시민',
    contact: '031-123-1005 (독서문화팀)'
  },
];

const PopupZone = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const tabletCarouselRef = React.useRef(null);

  useEffect(() => {
    if (tabletCarouselRef.current) {
      const container = tabletCarouselRef.current;
      const thumbs = container.querySelectorAll('.tablet-thumb');

      // 기본 타겟은 중간 세트(두 번째 banners)
      let targetIndex = banners.length + currentIndex;
      let isLooping = false;

      // [특수 케이스 처리]
      // 5번(마지막) -> 1번(처음)으로 이동 시 아래로 내려가는 연출
      if (prevIndex === banners.length - 1 && currentIndex === 0) {
        targetIndex = banners.length * 2; // 세 번째 세트의 첫 번째 (index 10)
        isLooping = true;
      }
      // 1번(처음) -> 5번(마지막)으로 이동 시 위로 올라가는 연출
      else if (prevIndex === 0 && currentIndex === banners.length - 1) {
        targetIndex = banners.length - 1; // 첫 번째 세트의 마지막 (index 4)
        isLooping = true;
      }

      if (thumbs[targetIndex]) {
        const targetTop = thumbs[targetIndex].offsetTop;
        const targetLeft = thumbs[targetIndex].offsetLeft;

        try {
          container.scrollTo({
            top: targetTop,
            left: targetLeft,
            behavior: 'smooth'
          });

          // 루핑 연출 후 중간 위치로 몰래 복귀
          if (isLooping) {
            setTimeout(() => {
              const normalIndex = banners.length + currentIndex;
              const normalTop = thumbs[normalIndex].offsetTop;
              const normalLeft = thumbs[normalIndex].offsetLeft;
              container.scrollTo({
                top: normalTop,
                left: normalLeft,
                behavior: 'auto'
              });
            }, 450); // smooth scroll 애니메이션 시간 고려
          }
        } catch (e) {
          container.scrollTop = targetTop;
          container.scrollLeft = targetLeft;
        }
      }
      setPrevIndex(currentIndex);
    }
  }, [currentIndex]);

  useEffect(() => {
    let interval;
    if (isPlaying && !isModalOpen) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
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
  }, [isModalOpen]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

  const togglePlay = () => {
    if (!isPlaying) {
      goToNext();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const openModal = (banner) => {
    setSelectedBanner(banner);
    setIsExpanded(false);
    setIsModalOpen(true);
    setIsPlaying(false); // Stop rolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBanner(null);
  };

  return (
    <section className="popup-zone" aria-labelledby="banner-heading">
      <h2 id="banner-heading" className="sr-only">주요 소식 배너</h2>

      <div className="tablet-layout-wrapper">
        <div className="tablet-left-content">
          <div className="banner-container" aria-live="polite">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`banner-item ${index === currentIndex ? 'active' : ''}`}
                style={{
                  backgroundColor: banner.color,
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer'
                }}
                aria-hidden={index !== currentIndex}
                onClick={() => openModal(banner)}
                role="button"
                tabIndex={index === currentIndex ? 0 : -1}
              >
                <span className="sr-only">{banner.title}</span>
              </div>
            ))}

            <div className="indicator-container" role="tablist">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`${index + 1}번 배너로 이동`}
                  aria-selected={index === currentIndex}
                  role="tab"
                />
              ))}
            </div>
          </div>

          <div className="banner-controls">
            <button className="control-btn prev" onClick={goToPrev} aria-label="이전 배너">
              <span className="icon">◀</span>
            </button>

            <button
              className="control-btn play-pause"
              onClick={togglePlay}
              aria-label={isPlaying ? "배너 자동 재생 멈춤" : "배너 자동 재생 시작"}
            >
              <span className="icon">{isPlaying ? "Ⅱ" : "▶"}</span>
              <span className="play-text">{isPlaying ? "자동 재생 멈춤" : "자동 재생 시작"}</span>
            </button>

            <button className="control-btn next" onClick={goToNext} aria-label="다음 배너">
              <span className="icon">▶</span>
            </button>
          </div>
        </div>

        <div className="tablet-right-content">
          <div className="tablet-vertical-carousel">
            <div className="tablet-carousel-highlight" aria-hidden="true"></div>
            <div className="tablet-carousel-track" ref={tabletCarouselRef}>
              {/* 무한 루프처럼 보이기 위해 배열을 3번 반복 렌더링 */}
              {[...banners, ...banners, ...banners].map((banner, index) => {
                const realIndex = index % banners.length;
                return (
                  <div
                    key={`${banner.id}-${index}`}
                    className={`tablet-thumb ${realIndex === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(realIndex)}
                  >
                    <img src={banner.image} alt="" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedBanner && (
        <div className="popup-modal-overlay" onClick={closeModal}>
          <div className="popup-modal-container" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="popup-modal-header" style={{ backgroundColor: 'var(--color-primary)' }}>
              <h3 id="modal-title">{selectedBanner.title}</h3>
              <button className="popup-modal-close" onClick={closeModal} aria-label="닫기">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="popup-modal-body">
              <div className="preview-image-placeholder" style={{ backgroundColor: `${selectedBanner.color}33`, backgroundImage: `url(${selectedBanner.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className="sr-only">대표 이미지 영역</span>
              </div>
              {!isExpanded ? (
                <button className="expand-btn" onClick={() => setIsExpanded(true)}>자세히보기</button>
              ) : (
                <div className="popup-modal-detail">
                  <div className="detail-content">
                    <p className="detail-desc">{selectedBanner.description}</p>
                    <div className="detail-extra">
                      <p>일시: {selectedBanner.date}</p>
                      <p>장소: {selectedBanner.location}</p>
                      <p>대상: {selectedBanner.target}</p>
                      <p>문의: {selectedBanner.contact}</p>
                    </div>
                  </div>
                  <button className="collapse-btn" onClick={closeModal}>내용 닫기</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopupZone;
