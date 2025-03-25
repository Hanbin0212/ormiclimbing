package com.ormi.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ormi.Model.Notice;
import com.ormi.Service.NoticeService;

@RestController
@RequestMapping("/api/notice")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @GetMapping
    public List<Notice> getAllNotices() {
        System.out.println("📌 모든 공지사항 요청 받음");
        List<Notice> notices = noticeService.getAllNotices();
        System.out.println("📌 조회된 공지사항 목록: " + notices);
        return notices;
    }

    @GetMapping("/{notice_id}")  // ✅ 특정 공지사항 가져오기 (GET 요청 허용)
    public Notice getNoticeById(@PathVariable("notice_id") int notice_id) {
        System.out.println("📌 특정 공지사항 요청 받음: ID = " + notice_id);
        return noticeService.getNoticeById(notice_id);
    }

    @PostMapping  // ✅ 공지사항 추가 (POST 요청)
    public void createNotice(@RequestBody Notice notice) {
        System.out.println("📌 받은 Notice 객체 정보: " + notice);
        noticeService.createNotice(notice);
    }

    @PutMapping("/{notice_id}")  // ✅ 공지사항 수정 (PUT 요청)
    public void updateNotice(@PathVariable("notice_id") int notice_id, @RequestBody Notice notice) {
        notice.setNotice_id(notice_id);
        noticeService.updateNotice(notice);
        System.out.println("📌 공지사항 수정 완료: " + notice);
    }

    @DeleteMapping("/{notice_id}")  // ✅ 공지사항 삭제 (DELETE 요청)
    public void deleteNotice(@PathVariable("notice_id") int notice_id) {
        noticeService.deleteNotice(notice_id);
        System.out.println("📌 공지사항 삭제 완료: ID = " + notice_id);
    }
}
