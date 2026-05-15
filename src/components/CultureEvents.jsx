import React from 'react';
import './CultureEvents.css';

const events = [
  { id: 1, tag: '문화행사', title: '[문화교실]그림책아, 나랑 놀자!', status: '접수중' },
  { id: 2, tag: '문화행사', title: '[성인강좌] 목요일에 만나는 인문학 카페', status: '접수마감' },
  { id: 3, tag: '강좌', title: '[청소년] 나만의 AI 에이전트 만들기 기초', status: '접수중' },
  { id: 4, tag: '문화행사', title: '여름밤의 클래식 음악회 초대', status: '접수중' },
];

const CultureEvents = () => {
  return (
    <section className="culture-events" aria-labelledby="events-heading">
      <div className="section-header">
        <h2 id="events-heading" className="section-title">문화행사/강좌</h2>
        <button className="more-btn" aria-label="문화행사/강좌 더보기">더보기 &gt;</button>
      </div>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <div className="event-content">
              <span className="tag blue">{event.tag}</span>
              <a href="#" className="event-link">{event.title}</a>
            </div>
            <span className={`event-status ${event.status === '접수중' ? 'active' : ''}`}>
              {event.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CultureEvents;
