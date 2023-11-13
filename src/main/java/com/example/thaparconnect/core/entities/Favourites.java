package com.example.thaparconnect.core.entities;

import com.example.thaparconnect.core.enums.ItemStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "user_favourites")
public class Favourites {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int customerId;
    private int itemId;
}
