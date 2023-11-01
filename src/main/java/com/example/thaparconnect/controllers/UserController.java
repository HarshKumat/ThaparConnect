package com.example.thaparconnect.controllers;

import com.example.thaparconnect.Service.UserService;
import com.example.thaparconnect.core.entities.Items;
import com.example.thaparconnect.core.entities.User;
import com.example.thaparconnect.core.enums.HostelType;
import com.example.thaparconnect.core.repositories.UserRepository;
import com.example.thaparconnect.core.repositories.ItemsRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping
@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    ItemsRepository ItemsRepository;

    @Autowired
    UserService userService;

    @GetMapping("/condition")
    public List<User> findUsers(String firstName, String lastName){
        return userRepository.findByFirstNameLikeOrLastNameStartsWith("%e%", "z");
    }

    @GetMapping("/users")
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }


    @GetMapping("/isOvercrowded/{hostel}")
    public Boolean isHostelOverCrowded(@PathVariable("hostel") HostelType hostel){
        return userService.isHotelOverCrowded(hostel);
    }

    @GetMapping("/items")
    public List<Items> findAllItems() {
        return ItemsRepository.findAll();
    }

}
