package com.example.thaparconnect.Service;

import com.example.thaparconnect.core.enums.HostelType;
import com.example.thaparconnect.core.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public Boolean isHotelOverCrowded(HostelType hostel){
        Integer studentsInHostel = userRepository.countByHostelIn(Collections.singletonList(hostel));
        return studentsInHostel > 1;
    }
}
