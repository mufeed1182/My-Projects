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

import com.ust.ecom.entity.Product;
import com.ust.ecom.entity.User;
import com.ust.ecom.service.ProductService;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService ps;
	
	@PostMapping
	public Product createProduct(@RequestBody Product product) {
		System.out.println(product);
		return ps.create(product);
	}
	
	@GetMapping
	public List<Product> retriveAllProducts() {
		return ps.read();
	}
	
	@GetMapping("/{id}")
	public Product FindByProductId(@PathVariable("id") Long id) {
		return ps.readById(id);
	}
	
	@PutMapping("/{id}")
	public Product updateProduct(@PathVariable("id") Long id,@RequestBody Product product) {
		return ps.update(product);
	}
	
	@DeleteMapping("/{id}")
	public Product deleteProduct(@PathVariable("id") Long id) {
		return ps.delete(id);
	}
	
	@PostMapping("/user")
	public List<Product> findProductByUser(@RequestBody User user)
	{
		return ps.findProductByUser(user);
	}
}
