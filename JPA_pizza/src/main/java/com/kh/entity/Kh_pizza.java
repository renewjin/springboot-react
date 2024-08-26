package com.kh.entity;

/*
 * model = dto, entity, vo
 * 기존에 db에 테이블이 존재하는 것을 연결 = dto
 * 기존에 테이블이 존재하는지 알 수는 없지만 db와 java에서 객체로 사용 entity
 * db랑 관계없음 = vo (ex 인증번호)
 * */

//lombok에도 Entity 존재하기 때문에 표기명시를 자카르타로 확실히 해줘야함
import jakarta.persistence.Entity; 
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity // 만약에 DB에는 pizzas로 테이블을 저장하길 원하면 @Table 에 이름명시를 해주면 됨
public class Kh_pizza {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String description;
	private double price;
}
