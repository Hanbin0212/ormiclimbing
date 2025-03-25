package com.ormi.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ormi.Mapper.UserMapper;
import com.ormi.Mapper.AdminMapper;
import com.ormi.Model.User;

@Service
public class UserService {

    @Autowired 
    private UserMapper userMapper;

    @Autowired
    private AdminMapper adminMapper;

    public void registerUser(User user) throws Exception {
        if (userMapper.findByMemberId(user.getMemberId()) != null) {
            throw new Exception("이미 존재하는 회원 아이디입니다.");
        }

        // role이 지정되지 않은 경우 기본값 "MEMBER"로 설정
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("MEMBER");
        }

        // 현재 시각으로 생성일과 수정일 설정
        String now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        user.setCreatedAt(now);
        user.setUpdatedAt(now);

        userMapper.insertUser(user);
    }

    public User loginUser(String memberId, String rawPassword) throws Exception {
        User user = userMapper.findByMemberId(memberId);

        if (user == null) {
            // member 테이블에 존재하지 않으면 admin 테이블에서 조회
            user = adminMapper.findByAdminId(memberId);
            if (user == null) {
                throw new Exception("존재하지 않는 회원 아이디입니다.");
            }
        }

        // 비밀번호 검사
        if (!rawPassword.equals(user.getPassword())) {
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }

        System.out.println("📌 로그인된 사용자 정보: " + user);  // 로그인된 사용자 정보 확인

        return user;
    }
}
