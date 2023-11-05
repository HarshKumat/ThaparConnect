package com.example.thaparconnect.core.repositories;

import com.example.thaparconnect.core.entities.User;
import com.example.thaparconnect.core.enums.HostelType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    List<User> findByFirstNameLikeOrLastNameStartsWith(String firstName, String lastName);

    List<User> findByEmail(String email);

    Integer countByHostelIn(List<HostelType> hostels);

}
