package com.example.thaparconnect.controllers;

import com.example.thaparconnect.Service.UserService;
import com.example.thaparconnect.core.entities.Chat;
import com.example.thaparconnect.core.entities.Items;
import com.example.thaparconnect.core.entities.User;
import com.example.thaparconnect.core.enums.HostelType;
import com.example.thaparconnect.core.repositories.ChatRepository;
import com.example.thaparconnect.core.repositories.UserRepository;
import com.example.thaparconnect.core.repositories.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping
@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    ItemsRepository itemsRepository;

    @Autowired
    ChatRepository chatRepository;

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
        return itemsRepository.findAll();
    }
    @GetMapping("/dets/{name}")
    public Items findByName(@PathVariable("name") String name) { return  itemsRepository.findByName(name);}

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User loginRequest){
        return userService.login(loginRequest);
    }
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody User registrationRequest){
        return userService.registerUser(registrationRequest);
    }
    @PostMapping("/posts")
    public ResponseEntity<Map<String, String>> register(@RequestBody Items postRequest){
        return userService.postItem(postRequest);
    }

    @GetMapping("/user/{email}")
    public List<User> findByEmail(@PathVariable("email") String email) { return userRepository.findByEmail(email);}

    @GetMapping("/user/{email}/favourites")
    public List<Items> getFavourites(@PathVariable("email") String email){
        return itemsRepository.findAllFavouriteItemsForUserWithEmail(email);
    }

    @GetMapping("/user/{email}/items")
    public List<Items> getListedItems(@PathVariable("email") String email){
        int customerId = userRepository.findAllByEmail(email).getId();
        return itemsRepository.findAllByCustomerId(customerId);
    }

    @PostMapping("/savemsg")
    public ResponseEntity<String> sendMessage(@RequestBody Map<String, String> messageData){
        String message = messageData.get("message");
        String userIdStr = messageData.get("userId");
        String itemIdStr = messageData.get("itemId");
        int userId = Integer.parseInt(userIdStr);
        int itemId = Integer.parseInt(itemIdStr);

        Chat chatMessage = new Chat();
        chatMessage.setMessage(message);
        chatMessage.setCustomerId(userId);
        chatMessage.setItemId(itemId);

        chatRepository.save(chatMessage);
        return ResponseEntity.ok().body("Message sent successfully");
    }

    @GetMapping("/history")
    public ResponseEntity<List<Chat>> getHistory(@RequestParam("userId") int userId, @RequestParam("itemId") int itemId){
        List<Chat> chatHis = chatRepository.findHistory(userId, itemId);
        return ResponseEntity.ok().body(chatHis);
    }
}
