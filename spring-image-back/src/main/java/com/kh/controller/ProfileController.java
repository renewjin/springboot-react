package com.kh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kh.dto.Profile;
import com.kh.service.ProfileService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/profile")
public class ProfileController {

	@Autowired
	private ProfileService profileService;
	
	/* @Autowired를 안쓰면 아래와 같이 작성
	public ProfileController(ProfileService profileService) {
		this.profileService = profileService;
	}
	*/
	
	@GetMapping("/watching")
	public ResponseEntity<List<Profile>> getProfile() {
		return ResponseEntity.ok(profileService.getProfile());
	}
	
	/*
	 * parameter Type error
	 * @RequestParm 안에 React에서 값을 가져올 때 값을 가져온 변수명을 작성하지 않으면 에러 발생
	 * */
	@PostMapping("/upload")
	//값을 하나하나 넣어줄 것이므로 String
	public ResponseEntity<String> insertProfile(@RequestParam("files") MultipartFile[] files,
												@RequestParam("usrename") String username,
												@RequestParam("profileImageUrl") String profileImageUrl) {
		profileService.uploadProfile(files, username, profileImageUrl);
		return ResponseEntity.ok("이미지 업로드 성공");
	}
}
