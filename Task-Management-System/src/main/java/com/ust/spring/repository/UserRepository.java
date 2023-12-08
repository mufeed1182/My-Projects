package com.ust.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ust.spring.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
//	User findByLoginName(String loginName);
	
	List<User> findByRole(String role);

}
