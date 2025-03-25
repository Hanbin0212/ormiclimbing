// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const { login } = useAuth();
//   const [memberId, setMemberId] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // login 호출 후, 사용자 정보를 받아온다.
//     const userData = await login(memberId, password);

//     if (userData) {
//       // 로그인 성공 시, 콘솔에 userData를 찍어본다.
//       console.log('로그인된 사용자 객체:', userData);
//       navigate('/');
//     }
//   };

//   return (
//     <div className="flex-grow flex justify-center items-center">
//       <form onSubmit={handleSubmit} className="w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4">로그인</h2>
//         <div className="mb-4">
//           <label htmlFor="memberId" className="block text-gray-700 text-sm font-bold mb-2">
//             아이디
//           </label>
//           <input
//             id="memberId"
//             type="text"
//             value={memberId}
//             onChange={(e) => setMemberId(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//             비밀번호
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             로그인
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/AuthPage.css';

const Login = () => {
  const { login } = useAuth();
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await login(memberId, password);

    if (userData) {
      console.log('로그인된 사용자 객체:', userData);
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2 className="auth-form-title">로그인</h2>

        <div className="form-group">
          <label htmlFor="memberId" className="form-label">아이디</label>
          <input
            id="memberId"
            type="text"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="auth-button login">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
