package com.example.thaparconnect.core.repositories;

import com.example.thaparconnect.core.entities.Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface ItemsRepository extends JpaRepository<Items, Integer> {
    List<Items> findAllByName(String name);
    Items save(Items item);
    void deleteByCustomerId(int customerId);

//    Items findByUserEmail(String email);

    @Query(value = "select * from user_items where id in (select item_id from user_favourites where customer_id = (SELECT id FROM PERSON where email= ?1))", nativeQuery = true)
    List<Items> findAllFavouriteItemsForUserWithEmail(String email);

    List<Items> findAllByCustomerId(int customerId);
}

