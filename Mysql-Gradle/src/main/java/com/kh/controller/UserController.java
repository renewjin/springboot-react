package com.kh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.dto.User;
import com.kh.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/users")
@Slf4j
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping // api 주소값 users
	public List<User> findAll() {
		List<User> user = userService.findAll();
		log.info("user : " + user);
		return userService.findAll();
	}
	
	@PostMapping
	public void insertUser(@RequestBody User user) {
		userService.insertUser(user);
		
	}
}
