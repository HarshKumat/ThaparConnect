package com.example.thaparconnect.core.entities;

import com.example.thaparconnect.core.enums.ItemCategory;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

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
    private UUID customerId;
    @Enumerated(EnumType.STRING)
    private ItemCategory itemCategory;
}
