package com.kh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kh.dto.NaverUser;
import com.kh.service.LoginService;

@RestController
public class LoginController {
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/login")
	// login @RequestParam -> @RequestBody Map<String, String> loginData
	public ResponseEntity<String> login(@RequestParam("id") String id,
						@RequestParam("password") String password) {
		System.out.println("id : " + id);
		System.out.println("password : " + password);
		NaverUser user = loginService.login(id, password);
		if(user != null) { // 유저정보가 존재하면 null 아닐 것
			return ResponseEntity.ok("로그인 성공");
		} else { // 유저정보가 존재하지 않아  null로 전달
			// ResponseEntity.status = DB나 어떤 값에 대한 결과 상태
			// HttpStatus = GET POST와 같은 메서드 기능이 잘 동작했느냐
			// UNAUTHORIZED = 인증실패 주로 로그인 실패
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
		}
		  
	}

}
