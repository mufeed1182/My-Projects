package com.ust.spring.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.spring.entity.User;
import com.ust.spring.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository ur;
	
	public User craate(User user) {
		return ur.save(user);
	}
	public List<User> read() {
		return ur.findAll();
	}
	public User read(Long id) {
		Optional<User> temp = ur.findById(id);
		User user=null;
		if(temp.isPresent())
		{
			user=temp.get();
		}
		return user;
	}
	public User update(User user) {
		User temp = read(user.getId());
		if(temp!=null)
		{
			temp=user;
			ur.save(temp);
		}
		return temp;
	}
	public User delete(Long id) {
		User temp = read(id);
		if(temp!=null)
		{
			ur.delete(temp);
		}
		return temp;
	}
	

	public List<User> findByRole(String role) {
		return ur.findByRole(role);
	}
	
	
	

}
