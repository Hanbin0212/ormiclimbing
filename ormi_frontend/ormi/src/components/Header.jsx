import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css'; // Header.css 파일 import

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  // 로그아웃 함수 호출
    navigate("/");  // ✅ 메인 화면으로 이동
  };


  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo-link">
          <img src="/logo.png" alt="ORMI 로고" className="header__logo" />
          <span className="header__title">오르미 클라이밍</span>
        </Link>
      </div>
      <div className="header__right">
        {user ? (
          <div className="header__user-info">
            <span className="header__welcome">{user.memberName}님 환영합니다!</span>
            <button className="header__logout-button" onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        ) : (
          <div className="header__menu">
            <Link to="/register" className="header__menu-button header__register">
              회원가입
            </Link>
            <Link to="/login" className="header__menu-button header__login">
              로그인
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
