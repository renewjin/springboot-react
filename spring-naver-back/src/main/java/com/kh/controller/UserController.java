package com.kh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kh.dto.User;
import com.kh.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/users") // Mapping 하는 주소앞에 자동으로 /users경로가 추가됨
@Slf4j
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping // api 주소값 users, @GetMapping("/test")이면 api 주소값은 /users/test 가 됨
	public List<User> findAll() {
		List<User> user = userService.findAll();
		log.info("user : " + user);
		return userService.findAll();
	}
	
	@PostMapping
	public void insertUser(@RequestBody User user) {
		userService.insertUser(user);
		
	}
	

	// await axios.delete(`/users/${id}`);
	
	@DeleteMapping("/{id}") // 삭제를 진행하기 위해 만나는 주소(api) users/유저번호
	public void deleteUser(@PathVariable("id") int id) { // body는 전체, param은 하나
		userService.deleteUser(id);
	}
	
	/*
	// await axios.delete(`/users`,{params: {id});
	// await axios.delete(`/users?id=${id}`);
	@DeleteMapping()				// 삭제를 진행하기 위해 만나는 주소 (api) users
	public void deleteUser(@RequestParam("id") int id) { // body는 전체, param은 하나
		userService.deleteUser(id);
	}
	*/
	@PutMapping // 수정
	public void updateUser(@RequestBody User user) {
		userService.updateUser(user);
	}
	
}
