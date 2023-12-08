package com.ust.ecom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.ecom.entity.AuthReq;
import com.ust.ecom.entity.User;
import com.ust.ecom.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService us;
	
	@PostMapping("/validate")
	public User Validatelogin(@RequestBody AuthReq ar)
	{
		System.out.println(ar);
		User user = us.readById(ar.getId());
		if(user!=null)
		{
			if(user.getPassword().equals(ar.getPassword()))
			{
				return user;
			}else
			{
				return null;
			}
		}else {
			return null;
		}
	}
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return us.create(user);
	}
	
	@GetMapping
	public List<User> retrieveAllUsers() {
		return us.read();
	}
	
	@GetMapping("/{id}")
	public User FindByUserId(@PathVariable("id") Long id) {
		return us.readById(id);
	}
	
	@PutMapping("/{id}")
	public User updateUser(@PathVariable("id") Long id,@RequestBody User user) {
		return us.update(user);
	}
	
	@DeleteMapping("/{id}")
	public User deleteUser(@PathVariable("id") Long id) {
		return us.delete(id);
	}

}
