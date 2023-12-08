package com.ust.spring.controller;

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

import com.ust.spring.entity.Project;
import com.ust.spring.service.ProjectService;

@RestController
@RequestMapping("/project")
@CrossOrigin("*")
public class ProjectController {
	@Autowired
	private ProjectService ps;
	
	@PostMapping
	public Project create(@RequestBody Project project) {
		return ps.create(project);
	}
	
	@GetMapping
	public List<Project> retrieveAllProjects() {
		return ps.read();
	}
	@GetMapping("/{id}")
	public Project create(@PathVariable("id") Long id) {
		return ps.read(id);
	}
	
	@PutMapping("/{id}")
	public Project update(@PathVariable("id") Long id,@RequestBody Project project) {
		return ps.update(project);
	}
	
	@DeleteMapping("/{id}")
	public Project delete(@PathVariable("id") Long id) {
		return ps.delete(id);
	}

}
