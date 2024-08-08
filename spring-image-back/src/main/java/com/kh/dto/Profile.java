package com.kh.dto;

import java.time.LocalDateTime;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor //기본생성자
@AllArgsConstructor // 필수생성자
@ToString // DB에서 값이 제대로 들어왔는지
public class Profile {
	private int userId;
	private String userName;
	private String profileImageUrl;
	private LocalDateTime createdAt;
	// Localhost = 현재내주소
	// LocalDateTime = 현재 날짜와시간
	
}
