package com.ormi.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String memberId;
    private String memberName;
    private String birthDate;
    private String password;
    private String crewname;
    private String email;
    private String phone;
    private String role; // 추가 (PRESIDENT, MANAGER, MEMBER)
    private String createdAt;
    private String updatedAt;
}
