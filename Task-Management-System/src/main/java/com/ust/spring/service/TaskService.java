package com.ust.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.spring.entity.Project;
import com.ust.spring.entity.Task;
import com.ust.spring.exception.ProjectNotFoundException;
import com.ust.spring.repository.ProjectRepository;
import com.ust.spring.repository.TaskRepository;

@Service
public class TaskService {
	@Autowired
	private TaskRepository tr;
	@Autowired
	private ProjectRepository pr;

	public Task create(Task task) {
		return tr.save(task);
	}
	public List<Task> read() {
		return tr.findAll();
	}
	public Task read(Long id) {
		Optional<Task> temp = tr.findById(id);
		Task task=null;
		if(temp.isPresent())
		{
			task=temp.get();
		}
		return task;
	}
	public Task update(Task task) {
		Task temp = read(task.getId());
		if(temp!=null)
		{
			temp=task;
			tr.save(temp);
		}
		return temp;
	}
	public Task delete(Long id) {
		Task temp = read(id);
		if(temp!=null)
		{
			tr.delete(temp);
		}
		return temp;
	}
	
	public Task addTaskToProject(Long id, Task task) {
	    Optional<Project> temp = pr.findById(id);
	    Project project = null;
	    
	    if (temp.isPresent()) {
	        project = temp.get();
	        task.setProject(project);
	        task.setAssignedUser(null);
	        return tr.save(task);
	    } else {
	        throw new ProjectNotFoundException("Project not found with ID: " + id);
	    }
	}
	
	public List<Task> getTasksByProjectId(Long projectId) {
        // Use your TaskRepository to find tasks by project ID
        return tr.findByProjectId(projectId);
    }

}
