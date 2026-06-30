import React, { useState, useEffect } from 'react';
import './PopupZone.css';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';

const banners = [
  {
    id: 1,
    title: '2026 화성특례시민 함께 읽는 책 - 작가와의 만남',
    color: '#0f7a5f',
    image: banner1,
    description: '2026 화성특례시민 함께 읽는 책 작가와의 만남! 허은미 작가와 함께하는 <친구를 만드는 커다란 귀> 북토크에 초대합니다. (저학년) \'경청\'의 의미와 필요성을 알아보고 나만의 경청노트를 만드는 재미있는 활동이 진행됩니다.',
    date: '2026. 06. 13(토) 10:00 ~ 12:00',
    location: '진안도서관',
    target: '초등 저학년 아동 및 학부모',
    contact: '031-228-4775 (진안도서관)'
  },
  {
    id: 2,
    title: '2026년 화성특례시민 독서감상문 공모전',
    color: '#1c6246',
    image: banner2,
    description: '책 읽는 도시, 꿈꾸는 화성을 위한 2026년 독서감상문 공모전 개최! 화성특례시민 함께 읽는 책을 주제로 책을 읽고 느낀 감동을 글에 담아 나누어 주세요. 시민 여러분의 많은 참여 바랍니다.',
    date: '2026. 06. 01 ~ 2026. 08. 31',
    location: '화성시립도서관 홈페이지 접수',
    target: '화성시민 누구나 (초등부 / 청소년부 / 일반부)',
    contact: '031-8015-8200 (도서관운영과)'
  },
  {
    id: 3,
    title: '2026 화성시 북스타트 책꾸러미 배부 안내',
    color: '#d38c12',
    image: banner3,
    description: '책과 함께 인생을 시작하자! 화성특례시 모든 아가들에게 그림책 꾸러미를 선물로 드립니다. 1단계 책꾸러미 택배 서비스와 그림책을 활용한 다양한 북스타트 후속 프로그램이 운영됩니다.',
    date: '2026. 05. 07 ~ 소진 시까지',
    location: '화성시 관내 시립도서관 방문 및 온라인 택배 신청',
    target: '화성특례시에 거주하는 영유아 및 양육자',
    contact: '031-8015-8200 (북스타트 담당자)'
  },
  {
    id: 4,
    title: '2026 화성특례시민 올해의 책 18권 선정',
    color: '#16a085',
    image: banner4,
    description: '2026년 화성특례시민이 한 해 동안 함께 읽을 "올해의 책" 18권이 최종 선정되었습니다. 어린이, 청소년, 성인 부문별로 선정된 멋진 도서들을 화성시립도서관에서 지금 바로 만나보세요.',
    date: '연중 상시',
    location: '화성시립도서관 전 관 및 홈페이지',
    target: '도서관을 이용하는 시민 누구나',
    contact: '031-8015-8273 (수서팀)'
  },
  {
    id: 5,
    title: '제6회 화성시민의 유쾌한 서평대결 - 비블리오배틀 6',
    color: '#e67e22',
    image: banner5,
    description: '내가 소개하는 책이 최고의 책이 된다! "세상을 보는 눈을 키워주는 책"을 주제로 펼쳐지는 유쾌한 서평대결, 비블리오배틀 6에 도전하세요. 예선 참가 접수 후 책 소개 영상을 메일로 제출해주시면 참여가 완료됩니다. (시상: 챔피언북 및 우수상)',
    date: '2026. 05. 20 ~ 2026. 07. 13',
    location: '온라인 접수 및 본선 현장 대결',
    target: '화성시민 (초등 4~6학년, 청소년, 일반)',
    contact: 'ksj83@hcf.or.kr (독서문화팀)'
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

      const prevPhysicalIndex = banners.length + prevIndex;
      const leftDistance = (prevIndex - currentIndex + banners.length) % banners.length;
      let targetIndex;
      let isLooping = false;

      if (leftDistance === 1) {
        // 왼쪽으로 1칸 이동하는 경우에만 왼쪽(역방향)으로 스크롤
        targetIndex = prevPhysicalIndex - 1;
        if (targetIndex < banners.length) {
          isLooping = true;
        }
      } else {
        // 그 외 모든 이동(오른쪽 이동 및 2칸 이상 왼쪽 이동)은 오른쪽(순방향)으로 스크롤
        const rightDistance = (currentIndex - prevIndex + banners.length) % banners.length;
        targetIndex = prevPhysicalIndex + rightDistance;
        if (targetIndex >= banners.length * 2) {
          isLooping = true;
        }
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

            <div className="indicator-container" aria-hidden="true">
              {banners.map((_, index) => (
                <span
                  key={index}
                  className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          <div className="banner-controls">
            <button className="control-btn prev" onClick={goToPrev} aria-label="이전 배너">
              <span className="icon">←</span>
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
              <span className="icon">→</span>
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
