// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import '../styles/Notice.css';

// const Notice = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [notices, setNotices] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/notice")
//       .then((response) => {
//         console.log("📌 서버로부터 받은 데이터:", response.data);
//         setNotices(response.data);
//       })
//       .catch((error) => console.error("공지사항 목록 불러오기 실패:", error));
//   }, []);

//   const handleClick = (notice_id) => {
//     if (notice_id && Number(notice_id) > 0) {  
//       navigate(`/notice/${notice_id}`);
//     } else {
//       console.error("유효하지 않은 notice_id입니다.");
//     }
//   };

//   return (
//     <div>
//       <h2>공지사항</h2>
//       {user?.memberId === "admin" && (
//         <button onClick={() => navigate("/notice/manage")}>공지사항 관리</button>
//       )}
//       <ul>
//         {notices.map((notice) => (
//           <li key={notice.notice_id} onClick={() => handleClick(notice.notice_id)}>
//             {notice.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notice;

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Notice.css';  // ✅ CSS 파일 임포트 확인

const Notice = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/notice")
      .then((response) => {
        console.log("📌 서버로부터 받은 데이터:", response.data);
        setNotices(response.data);
      })
      .catch((error) => console.error("공지사항 목록 불러오기 실패:", error));
  }, []);

  const handleClick = (notice_id) => {
    if (notice_id && Number(notice_id) > 0) {  
      navigate(`/notice/${notice_id}`);
    } else {
      console.error("유효하지 않은 notice_id입니다.");
    }
  };

  return (
    <div className="notice-container">  {/* ✅ 클래스 이름 추가 */}
      <div className="notice-header">  {/* ✅ 클래스 이름 추가 */}
        <h2>공지사항</h2>
        {user?.memberId === "admin" && (
          <button onClick={() => navigate("/notice/manage")}>공지사항 관리</button>
        )}
      </div>
      
      <ul className="notice-list">  {/* ✅ 클래스 이름 추가 */}
        {notices.map((notice) => (
          <li key={notice.notice_id} onClick={() => handleClick(notice.notice_id)}>
            {notice.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notice;
