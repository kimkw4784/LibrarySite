import React, { useState } from 'react';
import './DetailPage.css';

const DetailPage = ({ item, onBack }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('신청자 이름과 연락처를 입력해주세요.');
      return;
    }
    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해야 신청이 가능합니다.');
      return;
    }
    setIsSubmitted(true);
  };

  const isNotice = item.type === 'notice';

  return (
    <div className="detail-page-container">
      {/* 뒤로가기(목록) 헤더 */}
      <div className="detail-header-nav">
        <button className="back-btn" onClick={onBack} aria-label="목록으로 돌아가기">
          <span className="back-icon">←</span> 목록으로 돌아가기
        </button>
        <span className="nav-indicator">
          홈 &gt; {isNotice ? '도서관 소식' : '문화행사 및 강좌'} &gt; 상세 정보
        </span>
      </div>

      <article className="detail-content-card">
        {/* 타이틀 및 메타 정보 */}
        <header className="detail-main-header">
          <div className="title-tags">
            <span className={`detail-tag ${isNotice ? item.categoryType || 'darkgray' : 'blue'}`}>
              {isNotice ? item.category : item.tag}
            </span>
            {!isNotice && (
              <span className={`status-tag ${item.status === '접수중' ? 'active' : ''}`}>
                {item.status}
              </span>
            )}
          </div>
          <h1 className="detail-title">{item.title}</h1>
          <div className="meta-info-row">
            <span className="meta-item"><strong>작성자:</strong> 화성시립도서관(행정지원과)</span>
            <span className="meta-item"><strong>등록일:</strong> {isNotice ? item.date : '2026-05-20'}</span>
            <span className="meta-item"><strong>조회수:</strong> 254</span>
          </div>
        </header>

        {isNotice ? (
          /* ==================== 공지사항 상세 UI ==================== */
          <section className="detail-body-section">
            <div className="rich-text-content">
              <p>안녕하세요. 화성시립도서관입니다.</p>
              <p>도서관을 이용해주시는 시민 여러분께 진심으로 감사드리며, 이번 공지사항에 대해 다음과 같이 세부 내용을 안내해 드립니다.</p>
              
              <div className="detail-notice-box">
                <h4>[주요 안내 요약]</h4>
                <ul>
                  <li><strong>대상 범위:</strong> 화성시 관내 모든 시립도서관 이용객</li>
                  <li><strong>적용 일정:</strong> 2026년 6월 1일부터 상시 적용</li>
                  <li><strong>관련 문의:</strong> 도서관 운영운영팀 (031-123-4500)</li>
                </ul>
              </div>

              <p>자세한 변경 규정이나 세부 일자별 운영 안내는 하단의 첨부파일을 다운로드하시어 상세히 참고해 주시기 바랍니다.</p>
              <p>앞으로도 더욱 쾌적하고 유익한 독서 환경을 제공하기 위해 최선을 다하는 화성시립도서관이 되겠습니다. 감사합니다.</p>
            </div>

            {/* 첨부파일 다운로드 영역 */}
            <div className="attachment-section">
              <h3 className="section-subtitle">첨부파일 다운로드</h3>
              <div className="attachment-box">
                <a href="#download" className="attachment-link" onClick={(e) => { e.preventDefault(); alert('파일 다운로드가 완료되었습니다.'); }}>
                  <span className="file-icon">📎</span>
                  <div className="file-info">
                    <span className="file-name">{item.title.replace(/\[|\]/g, '')}_상세안내문.pdf</span>
                    <span className="file-size">1.8 MB (PDF 문서)</span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        ) : (
          /* ==================== 문화행사/강좌 상세 UI ==================== */
          <section className="detail-body-section">
            <div className="info-summary-table">
              <div className="table-row">
                <div className="table-label">대상 연령</div>
                <div className="table-value">{item.title.includes('청소년') ? '중/고등 청소년 (14세~19세)' : item.title.includes('성인') ? '일반 성인 (20세 이상)' : '어린이 및 동반 가족'}</div>
              </div>
              <div className="table-row">
                <div className="table-label">모집 인원</div>
                <div className="table-value">선착순 30명 (현재 18명 접수 완료)</div>
              </div>
              <div className="table-row">
                <div className="table-label">접수 기간</div>
                <div className="table-value">2026. 05. 20 (수) ~ 2026. 05. 31 (일)</div>
              </div>
              <div className="table-row">
                <div className="table-label">교육 기간</div>
                <div className="table-value">2026. 06. 03 (수) ~ 2026. 06. 24 (수) 매주 수요일 19:00 - 21:00 (총 4회)</div>
              </div>
              <div className="table-row">
                <div className="table-label">교육 장소</div>
                <div className="table-value">화성시립도서관 3층 배움 1실 (대면 강의)</div>
              </div>
              <div className="table-row">
                <div className="table-label">참가 비용</div>
                <div className="table-value-highlight">무료 (재료비 전액 도서관 지원)</div>
              </div>
            </div>

            <div className="rich-text-content">
              <h3>[행사/강좌 소개]</h3>
              <p>시민들의 독서 문화 정착과 디지털 역량 강화를 위해 마련된 특별 교육 과정입니다.</p>
              <p>본 강의는 기초 이론부터 조별 실습까지 초보자도 쉽게 따라 할 수 있는 커리큘럼으로 구성되어 있습니다. 관심 있는 시민 여러분의 많은 참여 바랍니다.</p>
            </div>

            {/* 신청 프로세스 (Form & Success) */}
            <div className="registration-container">
              {!isSubmitted ? (
                /* 신청 양식 입력 (ApplyForm) */
                <form className="apply-form-box" onSubmit={handleSubmit}>
                  <h3 className="section-subtitle">수강 / 참여 신청하기</h3>
                  
                  {item.status !== '접수중' ? (
                    <div className="apply-closed-notice">
                      ⚠ 본 강좌는 현재 모집 접수가 마감되어 추가 신청이 불가능합니다.
                    </div>
                  ) : (
                    <>
                      <div className="form-group">
                        <label htmlFor="user-name">신청자 성함 <span className="required">*</span></label>
                        <input
                          id="user-name"
                          type="text"
                          placeholder="성함을 정확히 입력해주세요."
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="user-phone">연락처 <span className="required">*</span></label>
                        <input
                          id="user-phone"
                          type="tel"
                          placeholder="예: 010-1234-5678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="form-group-checkbox">
                        <input
                          id="privacy-agree"
                          type="checkbox"
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                          className="checkbox-control"
                          required
                        />
                        <label htmlFor="privacy-agree">
                          [필수] 수강 신청 및 본인 확인을 위한 개인정보 수집 및 이용에 동의합니다.
                        </label>
                      </div>

                      <button type="submit" className="submit-application-btn">
                        참여 신청서 제출하기
                      </button>
                    </>
                  )}
                </form>
              ) : (
                /* 신청 성공 화면 (SuccessPage) */
                <div className="success-page-box">
                  <div className="success-icon-badge">✓</div>
                  <h3 className="success-title">강좌 수강 신청 완료!</h3>
                  <p className="success-message">
                    <strong>{name}</strong>님의 참여 신청이 정상적으로 완료되었습니다.
                  </p>
                  
                  <div className="success-summary-box">
                    <p><strong>신청 강좌:</strong> {item.title}</p>
                    <p><strong>수강 일시:</strong> 2026. 06. 03 (수) 개강 (매주 수요일 저녁 7시)</p>
                    <p><strong>접수 번호:</strong> HSL-{Math.floor(Math.random() * 90000) + 10000}</p>
                  </div>

                  <p className="success-subtext">
                    * 관련 안내 및 확정 문자는 입력하신 연락처({phone})로 전송될 예정입니다.
                  </p>
                  
                  <div className="success-actions">
                    <button className="confirm-btn" onClick={onBack}>
                      확인 및 목록으로 이동
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 하단 목록가기 공통 버튼 */}
        {!isSubmitted && (
          <footer className="detail-main-footer">
            <button className="list-back-btn" onClick={onBack}>
              이전 목록으로 돌아가기
            </button>
          </footer>
        )}
      </article>
    </div>
  );
};

export default DetailPage;
