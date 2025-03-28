package com.ormi.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.ormi.Model.User;

@Mapper
public interface AdminMapper {
    @Select("SELECT admin_id AS memberId, admin_name AS memberName, password, email, phone, role " +
            "FROM admin WHERE admin_id = #{adminId}")
    User findByAdminId(String adminId);
}
