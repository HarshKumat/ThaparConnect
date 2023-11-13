package com.example.thaparconnect.core.entities;

import com.example.thaparconnect.core.enums.ItemCategory;
import com.example.thaparconnect.core.enums.ItemStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "user_items")
public class Items {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String imageUrl;
    private Long price;
    private int customerId;
    @Enumerated(EnumType.STRING)
    private ItemCategory itemCategory;
    @Enumerated(EnumType.STRING)
    private ItemStatus status;
}
