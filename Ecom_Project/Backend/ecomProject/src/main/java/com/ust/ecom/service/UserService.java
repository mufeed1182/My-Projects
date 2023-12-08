package com.ust.ecom.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.ecom.entity.User;
import com.ust.ecom.exception.UserAlreadyExistException;
import com.ust.ecom.exception.UserNotFoundException;
import com.ust.ecom.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository ur;
	
	public User create(User user) {
		User temp=null;
		if(user.getId()!=null)
		{
			temp=readById(user.getId());
		}
		if (temp!=null)
		{
			
			throw new UserAlreadyExistException("User with "+user.getId()+"Already exist");
		}else {
			
			return ur.save(user);
		}
	}
	
	public List<User> read() {
		return ur.findAll();
	}
	
	public User readById(Long id) {
		Optional<User> temp = ur.findById(id);
		User user=null;
		if(temp.isPresent())
		{
			user=temp.get();
			return user;
		}else {
			throw new UserNotFoundException("There is no user found with id "+id);
		}
		
	}
	
	public User update(User user) {
		User temp = readById(user.getId());
		if(temp!=null)
		{
			temp=user;
			ur.save(temp);
		}
		return temp;
	}
	public User delete(Long id) {
		User temp = readById(id);
		if (temp!=null)
		{
			ur.delete(temp);
		}
		return temp;
	}

}
