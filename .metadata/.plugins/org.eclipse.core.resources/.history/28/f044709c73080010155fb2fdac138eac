package com.ormi.Mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.ormi.Model.User;

@Mapper public interface UserMapper {
	@Insert("INSERT INTO member(member_id, member_name, birth_date, password, crewname, email, phone, role, created_at, updated_at) " +
	        "VALUES(#{memberId}, #{memberName}, #{birthDate}, #{password}, #{crewname}, #{email}, #{phone}, #{role}, #{createdAt}, #{updatedAt})")
	void insertUser(User user);

	@Select("SELECT * FROM member WHERE member_id = #{memberId}")
	User findByMemberId(String memberId);
}