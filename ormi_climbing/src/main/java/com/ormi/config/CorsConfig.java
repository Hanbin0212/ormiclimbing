package com.ormi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // /api 경로 하위 모든 요청에 대해 CORS 허용
                .allowedOrigins("http://localhost:5173")  // React 개발 서버 허용
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // 모든 HTTP 메서드 허용
                .allowedHeaders("*")  // 모든 헤더 허용
                .allowCredentials(true)  // 쿠키 허용
                .maxAge(3600);  // Preflight 요청 캐시 시간 설정 (1시간)
    }
}
