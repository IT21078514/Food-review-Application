package com.example.usermanagementservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	public UserRepository userRepository;

	public List<User> getAllUsers(){
		List<User> users = new ArrayList<>();
		userRepository.findAll().forEach(users::add);
		return users;
	}

	public User addUser(User user) {
		return userRepository.save(user);
		
	}

	public User updateUser(Long id, User user) {
		return userRepository.save(user);
		
	}

	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
	
	public User getUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public User getUserByEmail(String email) {
	    return userRepository.findByEmail(email);
	}
}
