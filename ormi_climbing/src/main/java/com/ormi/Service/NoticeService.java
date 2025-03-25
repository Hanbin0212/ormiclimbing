package com.ormi.Service;

import java.util.List;
import com.ormi.Model.Notice;

public interface NoticeService {

    // 모든 공지사항 조회
    List<Notice> getAllNotices();

    // 특정 공지사항 조회
    Notice getNoticeById(int notice_id);

    // 공지사항 추가
    void createNotice(Notice notice);

    // 공지사항 수정
    void updateNotice(Notice notice);

    // 공지사항 삭제
    void deleteNotice(int notice_id);
}
