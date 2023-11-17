package com.example.thaparconnect.core.repositories;

import com.example.thaparconnect.core.entities.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Chat,Integer> {

    @Query(value = "select * from chat where customer_Id = :userId or customer_Id = (select customer_Id from user_items where id = :itemId) and item_Id = :itemId order by created_At asc",nativeQuery = true)
    List<Chat> findHistory(@Param("userId") int userId, @Param("itemId") int itemId);
}
