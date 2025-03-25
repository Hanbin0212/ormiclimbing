import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 🔑 추가: 초기 로딩 시 sessionStorage에서 사용자 정보 불러오기
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (memberId, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/login', {
        memberId,
        password,
      });

      if (response.data.success) {
        console.log('로그인 성공, 받은 데이터:', response.data);
        setUser(response.data);
        sessionStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
      }
      return null;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message;
      alert('로그인 실패: ' + errorMessage);
      return null;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
