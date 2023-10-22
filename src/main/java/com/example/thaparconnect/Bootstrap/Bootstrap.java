package com.example.thaparconnect.Bootstrap;

import com.example.thaparconnect.core.entities.User;
import com.example.thaparconnect.core.enums.HostelType;
import com.example.thaparconnect.core.enums.UserType;
import com.example.thaparconnect.core.repositories.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
@AllArgsConstructor
public class Bootstrap implements CommandLineRunner {

    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        User user1 = User.builder()
                .email("piggy.power@gmail.com")
                .firstName("piggy")
                .lastName("power")
                .hostel(HostelType.A)
                .type(UserType.USER)
                .build();
        User user2 = User.builder()
                .email("red.ranger@gmail.com")
                .firstName("red")
                .lastName("ranger")
                .hostel(HostelType.B)
                .type(UserType.USER)
                .build();
        User user3 = User.builder()
                .email("pink.ranger@gmail.com")
                .firstName("pink")
                .lastName("ranger")
                .hostel(HostelType.C)
                .type(UserType.USER)
                .build();
        User user4 = User.builder()
                .email("green.ranger@gmail.com")
                .firstName("green")
                .lastName("ranger")
                .hostel(HostelType.A)
                .type(UserType.USER)
                .build();
        userRepository.saveAll(List.of(user1,user2,user3,user4));
    }
}
