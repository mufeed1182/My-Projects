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
import com.ust.spring.entity.Task;
import com.ust.spring.entity.User;
import com.ust.spring.service.ProjectService;
import com.ust.spring.service.TaskService;
import com.ust.spring.service.UserService;

@RestController
@RequestMapping("/task")
@CrossOrigin("*")
public class TaskController {
	@Autowired
	private TaskService ts;
	@Autowired
	private ProjectService ps;
	@Autowired
	private UserService us;
	
	@PostMapping
	public Task createTask(@PathVariable("id") Long id,@RequestBody Task task) {
		
		return ts.create(task);
	}
	@GetMapping
	public List<Task> retrieveAllTasks() {
		return ts.read();
	}
	@GetMapping("/{id}")
	public Task findByTaskId(@PathVariable("id") Long id) {
		return ts.read(id);
	}
	@PutMapping("/{id}")
	public Task updateTask(@PathVariable("id") Long id,@RequestBody Task task) {
		return ts.update(task);
	}
	@DeleteMapping("/{id}")
	public Task deleteTask(@PathVariable("id") Long id) {
		return ts.delete(id);
	}
	
	@PostMapping("/{id}")
	public Task addProjectToTask(@PathVariable("id") Long id,@RequestBody Task task)
	{
		return ts.addTaskToProject(id, task);
	}
	
	@PostMapping("/{id}/tasks")
	public Task createTaskForProject(@PathVariable("id") Long id, @RequestBody Task task) {
	    // Retrieve the project by ID (you can implement this method)
	    Project project = ps.findProjectById(id);
	  

	    // Set the project for the task
	    task.setProject(project);

	    if (task.getAssignedUser() != null) {
	        // A user is specified, set it to the task
//	    	User user=us.read(id);
	        return ts.create(task);
	    } else {
	        // No user is specified, set the assignedUser to null and create the task
	        task.setAssignedUser(null);
	        return ts.create(task);
	    }
	}

	@GetMapping("/{id}/tasks")
	public List<Task> getAllTasksForProject(@PathVariable("id") Long projectId) {
	    // Retrieve tasks for the project with the given ID (you can implement this method)
	    return ts.getTasksByProjectId(projectId);
	}

}
