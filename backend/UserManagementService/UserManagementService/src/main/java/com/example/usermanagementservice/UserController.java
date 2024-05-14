package com.example.usermanagementservice;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping("/users")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/users/{id}")
	public User getUserById(@PathVariable Long id){
		return userService.getUserById(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/users")
	public User addUser(@RequestBody User user)
	{
		return userService.addUser(user);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/users/{id}")
	public User updateUser(@PathVariable Long id, @RequestBody User user)
	{
		User existingUser = userService.getUserById(id);
		if(existingUser == null) {
			System.out.println("No User");;
		}
		existingUser.setUsername(user.getUsername());
		existingUser.setEmail(user.getEmail());
		existingUser.setPassword(user.getPassword());
		existingUser.setStatus(user.getStatus());
		return userService.updateUser(id, existingUser);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value="/users/{id}")
	public void deleteUser(@PathVariable Long id)
	{
		userService.deleteUser(id);
	}
	
	/*@RequestMapping(method = RequestMethod.POST, value="/login")
    public String login(@RequestBody Login loginRequest) {
	    String email = loginRequest.getEmail();
	    String password = loginRequest.getPassword();

	    if (!isValidCredentials(email, password)) {
	      return ("Invalid login credentials");
	    }

	    String token = generateToken(email);
	    return token;
	}*/
	
	@RequestMapping(method = RequestMethod.POST, value="/login")
	public User login(@RequestBody Login loginRequest) {
	    String email = loginRequest.getEmail();
	    String password = loginRequest.getPassword();
	    
	    User logged = isValidCredentials(email, password);

	    if (logged == null) {
	      return logged;
	    }

	    //String token = generateToken(email);
	    return logged;
	}
	
	private User isValidCredentials(String email, String password) {
	    // Check if the email and password are valid
	    User validateUser=userService.getUserByEmail(email);
	    if (validateUser == null) {
	      return null;
	    }
	    boolean correct = password.equals(validateUser.getPassword());
	    if (correct) {
	    	return validateUser;
	    }else {
	    	return null;
	    }
	}
	
	
	/*private boolean isValidCredentials(String email, String password) {
	    // Check if the email and password are valid
	    User validateUser=userService.getUserByEmail(email);
	    if (validateUser == null) {
	      return false;
	    }
	    return password.equals(validateUser.getPassword());
	}*/
	
	/*private String generateToken(String email) {
		    // Generate a JWT token with the user's email as the subject
		    Date now = new Date();
		    Date expirationDate = new Date(now.getTime() + 600000);
		    String jwtSecret = "\r\n"
		    		+ "eyJhbGciOiJIUzUxMiJ98eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MzQzODA4MiwiaWF0IjoxNjgzNDM4MDgyfQ82XPhH1t278SS8qX85Vk1qSGSZKgZ75v8EDCT8lu75sBQZMRWz8akm95YLjHQ3n9H9Op0hVhWH5mgYlQMAf4r0w";
		    return Jwts.builder()
		        .setSubject(email)
		        .setIssuedAt(now)
		        .setExpiration(expirationDate)
		        .signWith(SignatureAlgorithm.HS512, jwtSecret)
		        .compact();
	}*/

}
