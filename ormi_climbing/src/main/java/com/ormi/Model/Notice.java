package com.ormi.Model;

import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notice {

    private Integer notice_id;  // 자동 증가되는 값 (DB에서 설정됨)
    private String admin_id;     // 공지사항 작성자 ID
    private String title;         // 공지사항 제목
    private String content;       // 공지사항 내용
    private int views;             // 조회수
    private String file_path;     // 첨부 파일 경로

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime created_at;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updated_at;
}
