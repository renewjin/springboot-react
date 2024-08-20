package com.kh.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity // mysql에 테이블이 존재하지 않으면 테이블 생성
@Getter // 룸북이나 자카르타가 나오지 않음 -> build.gradle의 dependencies 작성되어있는지(spring, lombok), refresh 했는지
@Setter
public class Chicken {

	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // NextValue
	private int id;
	
	private String chickenName;
	private String description;
	private double price; // 소수점 고려
}
