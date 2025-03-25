// src/pages/MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <main className="main-container">
      <h2 className="main-title">오르미 클라이밍 커뮤니티에 오신 것을 환영합니다!</h2>
      <p className="main-description">
        클라이밍을 사랑하는 사람들과 함께 소통하고 일정을 공유하세요.
      </p>

      <div className="features-grid">
        <Link to="/notice" className="feature-card notice">
          <h3 className="feature-card__title">공지사항</h3>
          <p className="feature-card__desc">운영자 공지를 확인하세요.</p>
        </Link>

        <Link to="/gallery" className="feature-card gallery">
          <h3 className="feature-card__title">갤러리</h3>
          <p className="feature-card__desc">클라이밍 사진을 공유하고 댓글을 남기세요.</p>
        </Link>

        <Link to="/register" className="feature-card primary">
          <h3 className="feature-card__title">크루 가입하기</h3>
          <h3 className="feature-card__title">크루 창설하기</h3>
          <p className="feature-card__desc">클라이밍 크루에 가입하세요!</p>
        </Link>

        <Link to="/login" className="feature-card secondary">
          <h3 className="feature-card__title">나의 크루</h3>
          <p className="feature-card__desc">내 크루 정보를 확인하세요.</p>
        </Link>
      </div>
    </main>
  );
};

export default MainPage;
