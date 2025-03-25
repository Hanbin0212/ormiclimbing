// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [memberId, setMemberId] = useState('');
//   const [memberName, setMemberName] = useState('');
//   const [password, setPassword] = useState('');
//   const [birthDate, setBirthDate] = useState('');
//   const [email, setEmail] = useState('');
//   const [crewname, setCrewname] = useState('');
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const response = await axios.post('http://localhost:8080/api/user/register', {
//         memberId,
//         memberName,
//         password,
//         birthDate,
//         email,
//         crewname,
//         phone,
//       });
//       if (response.data.success) {
//         alert('회원가입 성공! 로그인 페이지로 이동합니다.');
//         navigate('/login');
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || '회원가입 실패');
//     }
//   };

//   return (
//     <div className="flex-grow flex justify-center items-center">
//       <form onSubmit={handleSubmit} className="w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4">회원가입</h2>
//         {error && <div className="mb-4 text-red-500">{error}</div>}
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
//         <div className="mb-4">
//           <label htmlFor="memberName" className="block text-gray-700 text-sm font-bold mb-2">
//             이름
//           </label>
//           <input
//             id="memberName"
//             type="text"
//             value={memberName}
//             onChange={(e) => setMemberName(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
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
//         <div className="mb-4">
//           <label htmlFor="birthDate" className="block text-gray-700 text-sm font-bold mb-2">
//             생년월일
//           </label>
//           <input
//             id="birthDate"
//             type="date"
//             value={birthDate}
//             onChange={(e) => setBirthDate(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//             이메일
//           </label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="crewname" className="block text-gray-700 text-sm font-bold mb-2">
//             크루명
//           </label>
//           <input
//             id="crewname"
//             type="text"
//             value={crewname}
//             onChange={(e) => setCrewname(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
//             전화번호
//           </label>
//           <input
//             id="phone"
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             회원가입
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';

const Register = () => {
  const [memberId, setMemberId] = useState('');
  const [memberName, setMemberName] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [crewname, setCrewname] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/user/register', {
        memberId,
        memberName,
        password,
        birthDate,
        email,
        crewname,
        phone,
      });

      if (response.data.success) {
        alert('회원가입 성공! 로그인 페이지로 이동합니다.');
        navigate('/login');
      }
    } catch (error) {
      setError(error.response?.data?.message || '회원가입 실패');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2 className="auth-form-title">회원가입</h2>

        {error && <div className="auth-error">{error}</div>}

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
          <label htmlFor="memberName" className="form-label">이름</label>
          <input
            id="memberName"
            type="text"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
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

        <div className="form-group">
          <label htmlFor="birthDate" className="form-label">생년월일</label>
          <input
            id="birthDate"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">이메일</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="crewname" className="form-label">크루명</label>
          <input
            id="crewname"
            type="text"
            value={crewname}
            onChange={(e) => setCrewname(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">전화번호</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
        </div>

        <button type="submit" className="auth-button register">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Register;
