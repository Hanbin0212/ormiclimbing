// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import '../styles/NoticeDetail.css';

// const NoticeDetail = () => {
//   const { notice_id } = useParams();
//   const [notice, setNotice] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (notice_id && Number(notice_id) > 0) {
//       axios.get(`http://localhost:8080/api/notice/${notice_id}`)
//         .then(response => setNotice(response.data))
//         .catch(error => setError("공지사항을 불러오는 중 오류가 발생했습니다."));
//     } else {
//       setError("잘못된 요청입니다.");
//     }
//   }, [notice_id]);

//   if (!notice) return <div>로딩 중...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>{notice.title}</h1>
//       <p>{notice.content}</p>
//     </div>
//   );
// };

// export default NoticeDetail;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/NoticeDetail.css';

const NoticeDetail = () => {
  const { notice_id } = useParams();
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (notice_id && Number(notice_id) > 0) {
      axios.get(`http://localhost:8080/api/notice/${notice_id}`)
        .then(response => setNotice(response.data))
        .catch(error => setError("공지사항을 불러오는 중 오류가 발생했습니다."));
    } else {
      setError("잘못된 요청입니다.");
    }
  }, [notice_id]);

  if (!notice) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="notice-detail-container">
      <div className="notice-detail-header">
        <h1>{notice.title}</h1>
      </div>
      <div className="notice-detail-content">
        <p>{notice.content}</p>
      </div>
    </div>
  );
};

export default NoticeDetail;
