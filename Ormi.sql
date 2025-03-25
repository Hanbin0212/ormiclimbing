USE Ormi;

-- 기존 테이블 삭제 (종속성 고려)
DROP TABLE IF EXISTS gallery_comments;
DROP TABLE IF EXISTS gallery;
DROP TABLE IF EXISTS schedule_attendee;
DROP TABLE IF EXISTS schedule_statistics;
DROP TABLE IF EXISTS schedule;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS notice;
DROP TABLE IF EXISTS board;
DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS crew;
DROP TABLE IF EXISTS crew_member;

-- SELECT *FROM admin;
-- SELECT *FROM member;
-- SELECT * FROM notice;

-- 운영자 테이블
CREATE TABLE admin (
	id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id VARCHAR(50) NOT NULL UNIQUE,
    admin_name VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    role VARCHAR(20) DEFAULT '관리자'
);
INSERT INTO admin (admin_id, admin_name, password, email, phone, role)
VALUES ('admin', '관리자', '1234', '1234@naver.com', '01012345678', '관리자');



-- 회원 테이블
CREATE TABLE member (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id VARCHAR(50) NOT NULL UNIQUE,
    member_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL,
    password VARCHAR(100) NOT NULL,
    crewname VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    role ENUM('PRESIDENT', 'MANAGER', 'MEMBER') DEFAULT 'MEMBER',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
);


-- 크루 테이블
CREATE TABLE crew (
    crew_id INT AUTO_INCREMENT PRIMARY KEY,
    crew_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    president_id VARCHAR(50),
    FOREIGN KEY (president_id) REFERENCES member(member_id)
);

-- 크루 멤버 테이블
CREATE TABLE crew_member (
    crew_member_id INT AUTO_INCREMENT PRIMARY KEY,
    crew_id INT,
    member_id VARCHAR(50),
    role ENUM('PRESIDENT', 'MANAGER', 'MEMBER') DEFAULT 'MEMBER',
    joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (crew_id) REFERENCES crew(crew_id) ON DELETE CASCADE,
    FOREIGN KEY (member_id) REFERENCES member(member_id) ON DELETE CASCADE
);


-- 게시판 테이블
CREATE TABLE board (
    board_id INT AUTO_INCREMENT PRIMARY KEY,
    board_name VARCHAR(100) NOT NULL,
    board_type ENUM('default', 'info', 'vote', 'qna', 'survey') DEFAULT 'default'
);

-- 게시글 테이블
CREATE TABLE post (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    post_name VARCHAR(200) NOT NULL,
    content TEXT,
    author_id VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    board_type VARCHAR(50),
    file_path VARCHAR(200),
    FOREIGN KEY (author_id) REFERENCES member(member_id)
);

-- 댓글 테이블
CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    author_id VARCHAR(50),
    post_id INT,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    likes INT DEFAULT 0,
    FOREIGN KEY (author_id) REFERENCES member(member_id),
    FOREIGN KEY (post_id) REFERENCES post(post_id)
);

-- 공지사항 테이블
CREATE TABLE notice (
    notice_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    admin_id VARCHAR (50),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    views INT DEFAULT 0,
    file_path VARCHAR(200),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES admin(admin_id)
);

-- 일정 테이블
CREATE TABLE schedule (
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id VARCHAR(50),
    title VARCHAR(200) NOT NULL,
    description TEXT,
    schedule_date DATETIME,
    location VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES member(member_id) ON DELETE CASCADE
);

-- 일정 참석자 테이블
CREATE TABLE schedule_attendee (
    attendee_id INT AUTO_INCREMENT PRIMARY KEY,
    schedule_id INT,
    member_id VARCHAR(50),
    status ENUM('pending', 'present', 'declined') DEFAULT 'present',
    FOREIGN KEY (schedule_id) REFERENCES schedule(schedule_id) ON DELETE CASCADE,
    FOREIGN KEY (member_id) REFERENCES member(member_id) ON DELETE CASCADE
);

-- 일정 참여 통계 테이블
CREATE TABLE schedule_statistics (
    state_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id VARCHAR(50),
    total_attended INT DEFAULT 0,
    last_attended DATETIME,
    FOREIGN KEY (member_id) REFERENCES member(member_id)
);

-- 갤러리 테이블
CREATE TABLE gallery (
    photo_id INT AUTO_INCREMENT PRIMARY KEY,
    photo_name VARCHAR(100),
    file_path VARCHAR(200),
    author_id VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    board_type VARCHAR(50),
    FOREIGN KEY (author_id) REFERENCES member(member_id)
);

-- 갤러리 댓글 테이블
CREATE TABLE gallery_comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    author_id VARCHAR(50),
    photo_id INT,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    likes INT DEFAULT 0,
    FOREIGN KEY (author_id) REFERENCES member(member_id),
    FOREIGN KEY (photo_id) REFERENCES gallery(photo_id)
);
