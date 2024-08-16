package com.example.interviewAssignment.controller;

import com.example.interviewAssignment.dao.DeliveryDao;
import com.example.interviewAssignment.entity.Delivery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping(value = "/delivery")    //we request this url in this format localhost:8080/delivery //this is a class level mapping
public class DeliveryController {

    @Autowired  //dependency injection
    private DeliveryDao deliveryDao;


    //when we request get in browser with flowing url pattern  localhost:8080/delivery/findall it will execute this following method
    @GetMapping(value = "/findall",produces = "application/json")
    public List<Delivery> getAllDeliveries(){
        return deliveryDao.findAll();
    }


    @GetMapping
    public ModelAndView DeliveryUI(){
        ModelAndView deliveryView = new ModelAndView();
        deliveryView.setViewName("delivery.html");
        return deliveryView;
    }

    @GetMapping(value = "/search")
    public ModelAndView searchUI(){
        ModelAndView searchView = new ModelAndView();
        searchView.setViewName("search.html");
        return searchView;
    }


    @PostMapping     //we can pass empty request type if we want but method signature and request type need to be uniq
    public String saveDelivery(@RequestBody  Delivery delivery){
        try {
            deliveryDao.save(delivery);
            return "ok";
        }catch (Exception e){
            return "error occurred \n"+e.getMessage();
        }
    }


    @GetMapping(value = "/postalcode/{postal}")
    public List<Delivery> getAllByPostalCode(@PathVariable("postal")String postal){
       return deliveryDao.getAllByPostalcode(postal);
    }




}
