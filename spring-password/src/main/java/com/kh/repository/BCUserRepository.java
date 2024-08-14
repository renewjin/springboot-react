package com.kh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kh.dto.BCUser;

/* JpaRepository
 * mybatis mapper 생략해서 작성하는 방법
 * sql 알아서 작성
 * */
public interface BCUserRepository extends JpaRepository<BCUser, Integer> { // int 객체인 Integer
	//  save select 특정적으로 무언가를 검색하거나 하지 않는한 기본적인 sql 작성x
	//BCUser saveUser();
	
	// 이메일 찾기 기능
	BCUser findByEmail(String email);
	// -> sql select * from BCUser where email = ? 
	// Jpa안에 있는 기능들을 외워야 사용가능함
}
