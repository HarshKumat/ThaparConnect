package com.example.thaparconnect.core.repositories;

import com.example.thaparconnect.core.entities.Favourites;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavouritesRepository extends JpaRepository<Favourites, Integer> {
}
