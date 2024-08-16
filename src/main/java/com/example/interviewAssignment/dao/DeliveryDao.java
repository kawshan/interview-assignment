package com.example.interviewAssignment.dao;

import com.example.interviewAssignment.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DeliveryDao extends JpaRepository<Delivery,Integer> {



    @Query(value = "select d from Delivery d where d.postalcode=?1")
    public List<Delivery> getAllByPostalcode(String postal);


}
