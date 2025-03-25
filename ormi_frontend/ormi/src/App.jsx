import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Notice from './components/Notice';
import ManageNotice from './pages/ManageNotice'; 
import NoticeDetail from './pages/NoticeDetail';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/manage" element={<ManageNotice />} />
        <Route path="/notice/:notice_id" element={<NoticeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
