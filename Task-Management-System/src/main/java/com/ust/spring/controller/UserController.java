package com.ust.spring.controller;

import java.util.List;


import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ust.spring.entity.AuthRequest;
import com.ust.spring.entity.User;
import com.ust.spring.exception.InvalidCredentials;
import com.ust.spring.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService us;
	
	@PostMapping("/validate")
	public User Validatelogin(@RequestBody AuthRequest ar)
	{
		System.out.println(ar);
		User user =findByUserId(ar.getId());
		if(user!=null)
		{
			if(user.getPassword().equals(ar.getPassword()))
			{
				return user;
			}else {
				throw new InvalidCredentials("Inavlid Credentials..");
			}
		}else {
			return null;
		}
	}
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return us.craate(user);
	}
	@GetMapping
	public List<User> retriveAllUsers() {
		return us.read();
	}
	@GetMapping("/{id}")
	public User findByUserId(@PathVariable("id") Long id) {
		return us.read(id);
	}
	@PutMapping("/{id}")
	public User updateUser(@PathVariable("id") Long id,@RequestBody User user ){
		return us.update(user);
	}
	@DeleteMapping("/{id}")
	public User deleteUser(@PathVariable("id") Long id) {
		return us.delete(id);
	}
	
	@GetMapping("/role")
    public List<User> getUsersByRole(@RequestParam("role") String role) {
        return us.findByRole(role);
    }
	
//	@PostMapping("/{userId}/projects/{projectId}")
//	public User addProjectToTheUser(@PathVariable("userId") Long userId,@PathVariable("projectId") Long projectId) {
//		return us.addProjectToTheUser(userId, projectId);
//	}
	

}
