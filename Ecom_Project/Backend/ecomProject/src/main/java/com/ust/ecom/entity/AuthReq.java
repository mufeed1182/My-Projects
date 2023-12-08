package com.ust.ecom.entity;

public class AuthReq {
	private Long id;
	private String password;
	public AuthReq() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AuthReq(Long id, String password) {
		super();
		this.id = id;
		this.password = password;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "AuthReq [id=" + id + ", password=" + password + "]";
	}
	
	

}
