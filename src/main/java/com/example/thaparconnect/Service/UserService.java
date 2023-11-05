package com.example.thaparconnect.Service;

import com.example.thaparconnect.core.entities.User;
import com.example.thaparconnect.core.enums.HostelType;
import com.example.thaparconnect.core.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public Boolean isHotelOverCrowded(HostelType hostel){
        Integer studentsInHostel = userRepository.countByHostelIn(Collections.singletonList(hostel));
        return studentsInHostel > 1;
    }

    public ResponseEntity<Map<String, String>> login(@RequestBody User loginRequest) {
        Map<String, String> response = new HashMap<>();
        // Retrieve the username and password from the request
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Query the database to find a user with the given username
        List<User> users = userRepository.findByEmail(username);

        if (users.isEmpty()) {
            response.put("error", "Invalid username");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        User user = users.get(0);

        if (!user.getPassword().equals(password)) {
            response.put("error", "Incorrect password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        response.put("message", "Login successful");
        return ResponseEntity.ok(response);
    }

}
