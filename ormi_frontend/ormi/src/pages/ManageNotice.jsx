// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import '../styles/ManageNotice.css';

// const ManageNotice = () => {
//   const { user } = useAuth();
//   const [notices, setNotices] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [selectedNoticeId, setSelectedNoticeId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/notice")
//     .then((response) => {
//         console.log("서버로부터 받은 데이터:", response.data);
//         setNotices(response.data);
//     })
//     .catch((error) => console.error("공지사항 목록 불러오기 실패:", error));
//   }, []);

//   const handleAdd = () => {
//     console.log("📌 로그인된 사용자 정보:", user);

//     if (user?.role !== "관리자") {
//       alert("공지사항을 추가할 권한이 없습니다.");
//       return;
//     }

//     axios.post("http://localhost:8080/api/notice",
//       {
//         admin_id: user?.memberId || "admin",
//         title,
//         content
//       },
//       {
//         headers: { 'Content-Type': 'application/json' }
//       }
//     )
//     .then((response) => {
//         console.log("공지사항 추가 성공:", response.data);
//         setTitle("");
//         setContent("");
//         window.location.reload();
//     })
//     .catch((error) => {
//         console.error("공지사항 추가 오류:", error);
//     });
//   };

//   const handleEdit = () => {
//     if (selectedNoticeId) {
//       axios.put(`http://localhost:8080/api/notice/${selectedNoticeId}`,
//         {
//           admin_id: user?.memberId || "admin",
//           title,
//           content
//         },
//         {
//           headers: { 'Content-Type': 'application/json' }
//         }
//       )
//       .then(() => {
//           setTitle("");
//           setContent("");
//           setSelectedNoticeId(null);
//           window.location.reload();
//       })
//       .catch((error) => {
//           console.error("공지사항 수정 오류:", error);
//       });
//     }
//   };

//   const handleDelete = (notice_id) => {
//     axios.delete(`http://localhost:8080/api/notice/${notice_id}`)
//       .then(() => {
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.error("공지사항 삭제 오류:", error);
//       });
//   };

//   const handleSelectNotice = (notice) => {
//     setSelectedNoticeId(notice.notice_id);
//     setTitle(notice.title);
//     setContent(notice.content);
//   };

//   return (
//     <div>
//       <h2>공지사항 관리</h2>
//       {user?.role === "관리자" && (
//         <div>
//           <label>제목</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

//           <label>내용</label>
//           <textarea value={content} onChange={(e) => setContent(e.target.value)} />

//           {selectedNoticeId ? (
//             <button onClick={handleEdit}>수정</button>
//           ) : (
//             <button onClick={handleAdd}>추가</button>
//           )}
//         </div>
//       )}

//       <ul>
//         {notices.map((notice) => (
//           <li key={notice.notice_id}>
//             <h3>{notice.title}</h3>
//             {user?.role === "관리자" && (
//               <>
//                 <button onClick={() => handleSelectNotice(notice)}>수정</button>
//                 <button onClick={() => handleDelete(notice.notice_id)}>삭제</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ManageNotice;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import '../styles/ManageNotice.css';

const ManageNotice = () => {
  const { user } = useAuth();
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/notice")
    .then((response) => {
        console.log("서버로부터 받은 데이터:", response.data);
        setNotices(response.data);
    })
    .catch((error) => console.error("공지사항 목록 불러오기 실패:", error));
  }, []);

  const handleAdd = () => {
    console.log("📌 로그인된 사용자 정보:", user);

    if (user?.role !== "관리자") {
      alert("공지사항을 추가할 권한이 없습니다.");
      return;
    }

    axios.post("http://localhost:8080/api/notice",
      {
        admin_id: user?.memberId || "admin",
        title,
        content
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then((response) => {
        console.log("공지사항 추가 성공:", response.data);
        setTitle("");
        setContent("");
        window.location.reload();
    })
    .catch((error) => {
        console.error("공지사항 추가 오류:", error);
    });
  };

  const handleEdit = () => {
    if (selectedNoticeId) {
      axios.put(`http://localhost:8080/api/notice/${selectedNoticeId}`,
        {
          admin_id: user?.memberId || "admin",
          title,
          content
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      .then(() => {
          setTitle("");
          setContent("");
          setSelectedNoticeId(null);
          window.location.reload();
      })
      .catch((error) => {
          console.error("공지사항 수정 오류:", error);
      });
    }
  };

  const handleDelete = (notice_id) => {
    axios.delete(`http://localhost:8080/api/notice/${notice_id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("공지사항 삭제 오류:", error);
      });
  };

  const handleSelectNotice = (notice) => {
    setSelectedNoticeId(notice.notice_id);
    setTitle(notice.title);
    setContent(notice.content);
  };

  return (
    <div className="manage-notice-container">
      <div className="manage-notice-header">
        <h2>공지사항 관리</h2>
      </div>
      {user?.role === "관리자" && (
        <div className="manage-notice-inputs">
          <label>제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>내용</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />

          {selectedNoticeId ? (
            <button onClick={handleEdit}>수정</button>
          ) : (
            <button onClick={handleAdd}>생성</button>
          )}
        </div>
      )}

      <ul className="manage-notice-list">
        {notices.map((notice) => (
          <li key={notice.notice_id}>
            <h3>{notice.title}</h3>
            {user?.role === "관리자" && (
              <>
                <button onClick={() => handleSelectNotice(notice)}>수정</button>
                <button onClick={() => handleDelete(notice.notice_id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageNotice;
