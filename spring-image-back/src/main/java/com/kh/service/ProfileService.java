package com.kh.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.kh.dto.Profile;

public interface ProfileService {
	List<Profile> getProfile();
	void insertProfile(Profile profile);
	void uploadProfile(MultipartFile[] files, String username, String profileImageUrl);
}
