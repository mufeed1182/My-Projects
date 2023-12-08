package com.ust.spring.exception;

public class ProjectNotFoundException extends RuntimeException{
	
	public ProjectNotFoundException(String msg)
	{
		super(msg);
	}
}
