package com.ust.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.spring.entity.Project;
import com.ust.spring.exception.ProjectNotFoundException;
import com.ust.spring.repository.ProjectRepository;

@Service
public class ProjectService {
	@Autowired
	private ProjectRepository pr;
	
	public Project create(Project project) {
		return pr.save(project);
	}
	public List<Project> read() {
		return pr.findAll();
	}
	public Project read(Long id) {
		Optional<Project> temp = pr.findById(id);
		Project project=null;
		if(temp.isPresent())
		{
			project=temp.get();
		}
		return project;
	}
	
	public Project update(Project project) {
		Project temp = read(project.getId());
		if(temp!=null)
		{
			temp=project;
			pr.save(temp);
		}
		return temp;
	}
	public Project delete(Long id) {
		Project temp = read(id);
		if(temp!=null)
		{
			pr.delete(temp);
		}
		return temp;
	}
	
	public Project findProjectById(Long id) {
        Optional<Project> project = pr.findById(id);
        if (project.isPresent()) {
            return project.get();
        } else {
            // Handle the case where the project is not found, e.g., throw an exception or return null
            throw new ProjectNotFoundException("Project not found with ID: " + id);
        }
    }
	

}
