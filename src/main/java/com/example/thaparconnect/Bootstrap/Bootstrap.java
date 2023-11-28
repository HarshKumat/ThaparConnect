package com.example.thaparconnect.Bootstrap;

import com.example.thaparconnect.core.entities.Chat;
import com.example.thaparconnect.core.entities.Favourites;
import com.example.thaparconnect.core.entities.Items;
import com.example.thaparconnect.core.entities.User;
import com.example.thaparconnect.core.enums.HostelType;
import com.example.thaparconnect.core.enums.ItemCategory;
import com.example.thaparconnect.core.enums.ItemStatus;
import com.example.thaparconnect.core.enums.UserType;
import com.example.thaparconnect.core.repositories.FavouritesRepository;
import com.example.thaparconnect.core.repositories.ItemsRepository;
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

    private final UserRepository userRepository;
    private final ItemsRepository ItemsRepository;

    private final FavouritesRepository favouritesRepository;

    @Override
    public void run(String... args) throws Exception {
        User user1 = User.builder()
                .email("abcd_23@thapar.edu")
                .password("abcd123$")
                .firstName("abcd")
                .lastName("23")
                .hostel(HostelType.A)
                .type(UserType.USER)
                .build();
        User user2 = User.builder()
                .email("asharma_24@thapar.edu")
                .password("asharma123$")
                .firstName("Aryan")
                .lastName("Sharma")
                .hostel(HostelType.B)
                .type(UserType.USER)
                .build();
        User user3 = User.builder()
                .email("mganguly_25@thapar.edu")
                .password("mganguly123$")
                .firstName("Mitali")
                .lastName("Ganguly")
                .hostel(HostelType.C)
                .type(UserType.USER)
                .build();
        User user4 = User.builder()
                .email("gkumar_24@thapar.rdu")
                .password("gkumar123$")
                .firstName("Girish")
                .lastName("Kumar")
                .hostel(HostelType.A)
                .type(UserType.USER)
                .build();
        userRepository.saveAll(List.of(user1,user2,user3,user4));

        Items item1 = Items.builder()
                .name("cooler")
                .description("Only a year old")
                .itemCategory(ItemCategory.electronics)
                .price(3500L)
                .customerId(user4.getId())
                .status(ItemStatus.LISTED)
                .build();
        Items item2 = Items.builder()
                .name("kettle")
                .description("Good for cooking maggi")
                .itemCategory(ItemCategory.electronics)
                .price(700L)
                .customerId(user4.getId())
                .status(ItemStatus.PROCESSING)
                .build();
        Items item3 = Items.builder()
                .name("extension")
                .description("6 sockets")
                .itemCategory(ItemCategory.electronics)
                .price(500L)
                .customerId(user2.getId())
                .status(ItemStatus.LISTED)
                .build();
        Items item4 = Items.builder()
                .name("Mechanical Lab Coat")
                .description("In good condition")
                .itemCategory(ItemCategory.clothing)
                .price(300L)
                .customerId(user2.getId())
                .status(ItemStatus.LISTED)
                .build();
        Items item5 = Items.builder()
                .name("cooler")
                .description("Blue color")
                .itemCategory(ItemCategory.electronics)
                .price(3400L)
                .customerId(user2.getId())
                .status(ItemStatus.LISTED)
                .build();
        ItemsRepository.saveAll(List.of(item1,item2,item3,item4,item5));

        Favourites favourite1 = Favourites.builder()
                .itemId(item1.getId())
                .customerId(user4.getId())
                .build();

        Favourites favourite2 = Favourites.builder()
                .itemId(item2.getId())
                .customerId(user4.getId())
                .build();

        Favourites favourite3 = Favourites.builder()
                .itemId(item1.getId())
                .customerId(user1.getId())
                .build();

        favouritesRepository.saveAll(List.of(favourite1,favourite2,favourite3));

    }
}
