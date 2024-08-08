package com.kh.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kh.dto.Profile;
import com.kh.mapper.ProfileMapper;

@Service
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileMapper profileMapper;
	
	// application.properties에 존재하는 파일 경로 가져와서 변수에 넣어주기
	@Value("${file.upload-dir}")
	private String profileDir;
	
	@Override
	public List<Profile> getProfile() {
		return profileMapper.getProfile();
	}
	
	@Override
	public void insertProfile(Profile profile) {
		profileMapper.insertProfile(profile);
	}
	
	@Override
	public void uploadProfile(MultipartFile[] files, String username, String profileImageUrl) {
		// 폴더 존재하는지 확인 후 폴더 없으면 생성
		// 폴더도 하나의 파일이므로 파일로 폴더 확인
		// 글자 이외 모두 파일
		File uploadDirFile = new File(profileDir);
		// 만약에 폴더가 존재하지 않으면 폴더들 생성하기
		if(!uploadDirFile.exists()) {
			if(!uploadDirFile.mkdirs()) {
				System.out.println("finished creating folder");
				
			}
		}
		
		// 프로필을 업데이트 하기 위해 받은 이미지가 없기 때문에 처음 이미지들 이름은 null로 줌
		// 없음 = null = 빈 값
		List<String> fileNames = null;
		
		fileNames = List.of(files).stream().map(file -> {
			String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
			File df = new File(profileDir + File.separator + fileName);
			try {
				file.transferTo(df);
			} catch (Exception e) { // 파일 업로드 실패
				e.printStackTrace();
			}
			
			return fileName;
		}).collect(Collectors.toList());
		
		//Profile 객체 생성 각 객체에 현재 작성한 값들 넣어주는 set 작성
		// image = join ,
		Profile p = new Profile();
		p.setUserName(username);
		p.setProfileImageUrl(String.join(",", fileNames));
		insertProfile(p);
		
		
	}
}
