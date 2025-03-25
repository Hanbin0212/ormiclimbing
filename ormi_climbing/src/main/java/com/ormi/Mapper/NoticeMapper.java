package com.ormi.Mapper;

import java.util.List;
import com.ormi.Model.Notice;
import org.apache.ibatis.annotations.*;

@Mapper
public interface NoticeMapper {

    @Select("SELECT notice_id, admin_id, title, content, views, file_path, created_at, updated_at FROM notice ORDER BY created_at DESC")
    @Results({
        @Result(property = "notice_id", column = "notice_id"),
        @Result(property = "admin_id", column = "admin_id"),
        @Result(property = "title", column = "title"),
        @Result(property = "content", column = "content"),
        @Result(property = "views", column = "views"),
        @Result(property = "file_path", column = "file_path"),
        @Result(property = "created_at", column = "created_at"),
        @Result(property = "updated_at", column = "updated_at")
    })
    List<Notice> getAllNotices();

    @Select("SELECT notice_id, admin_id, title, content, views, file_path, created_at, updated_at FROM notice WHERE notice_id = #{notice_id}")
    Notice getNoticeById(int notice_id);

    @Insert("INSERT INTO notice (admin_id, title, content) VALUES (#{admin_id}, #{title}, #{content})")
    @Options(useGeneratedKeys = true, keyProperty = "notice_id", keyColumn = "notice_id")
    void createNotice(Notice notice);

    @Update("UPDATE notice SET title = #{title}, content = #{content} WHERE notice_id = #{notice_id}")
    void updateNotice(Notice notice);

    @Delete("DELETE FROM notice WHERE notice_id = #{notice_id}")
    void deleteNotice(int notice_id);
}
