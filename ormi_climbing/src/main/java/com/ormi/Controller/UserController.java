package com.ormi.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ormi.Model.User;
import com.ormi.Service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired 
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "회원가입 성공");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> request) {
        try {
            User user = userService.loginUser(request.get("memberId"), request.get("password"));
            user.setPassword(null);

            // 사용자 정보가 제대로 넘어왔는지 확인하기
            System.out.println("📌 로그인된 사용자 정보: " + user);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("memberId", user.getMemberId());
            response.put("memberName", user.getMemberName());
            response.put("email", user.getEmail());
            response.put("phone", user.getPhone());
            response.put("role", user.getRole());  // 추가: 권한 정보 포함하기
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }

}
