package com.example.thaparconnect.core.repositories;

import com.example.thaparconnect.core.entities.Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface ItemsRepository extends JpaRepository<Items, UUID> {

    Items findByName(String name);
}

