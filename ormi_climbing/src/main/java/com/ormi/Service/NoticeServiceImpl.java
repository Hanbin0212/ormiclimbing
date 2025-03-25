package com.ormi.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ormi.Mapper.NoticeMapper;
import com.ormi.Model.Notice;

@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeMapper noticeMapper;

    @Override
    public List<Notice> getAllNotices() {
        List<Notice> notices = noticeMapper.getAllNotices();
        System.out.println("📌 조회된 공지사항 목록: " + notices);
        return notices;
    }

    @Override
    public Notice getNoticeById(int notice_id) {
        Notice notice = noticeMapper.getNoticeById(notice_id);
        System.out.println("📌 조회된 공지사항: " + notice);
        return notice;
    }

    @Override
    public void createNotice(Notice notice) {
        System.out.println("📌 받은 Notice 객체 정보: " + notice);
        noticeMapper.createNotice(notice);

        if (notice.getNotice_id() != null) {
            System.out.println("✅ 생성된 공지사항 ID (DB 반영 성공): " + notice.getNotice_id());
        } else {
            System.err.println("❌ 공지사항 ID가 null입니다. 데이터베이스에 반영되지 않았습니다.");
        }
    }

    @Override
    public void updateNotice(Notice notice) {
        noticeMapper.updateNotice(notice);
        System.out.println("📌 공지사항 수정 완료: " + notice);
    }

    @Override
    public void deleteNotice(int notice_id) {
        noticeMapper.deleteNotice(notice_id);
        System.out.println("📌 공지사항 삭제 완료: ID = " + notice_id);
    }
}
