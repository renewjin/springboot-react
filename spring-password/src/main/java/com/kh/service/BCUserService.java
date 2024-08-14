package com.kh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kh.dto.BCUser;
import com.kh.repository.BCUserRepository;

@Service
public class BCUserService {
	
	@Autowired
	private BCUserRepository bcUserRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	// 패스워드 인코드롤 저장
	public void saveUser(BCUser bcUser) {
		// 한 번 암호화 처리된 암호를 가져오는 것
		// bcUser.getPassword()를 이용해 비밀번호를 가져와 passwordEncoder를 사용해 암호화처리
		// -> bcUser.setPassword 를 이용해 암호화된 비밀번호를 입력
		bcUser.setPassword(passwordEncoder.encode(bcUser.getPassword()));
		// JPA Repository 안에 save 이미 저장되어있기 때문에 굳이 작성 x
		bcUserRepository.save(bcUser);
	}

}
