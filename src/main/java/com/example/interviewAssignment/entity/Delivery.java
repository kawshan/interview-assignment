package com.example.interviewAssignment.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity //to indicate this is a entity class
@Table(name = "delivery")  //to map table name and our class name
@Data   //remain are lombok annotations
@AllArgsConstructor
@NoArgsConstructor
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "state")
    private String state;

    @Column(name = "city")
    private String city;

    @Column(name = "suburb")
    private String suburb;

    @Column(name = "suburbstate")
    private String suburbstate;

    @Column(name = "postalcodetype")
    private String postalcodetype;

    @Column(name = "postalcode")
    private String postalcode;

    @Column(name = "ordervaluethreshold")
    private BigDecimal ordervaluethreshold;

    @Column(name = "costbelowthreshold")
    private BigDecimal costbelowthreshold;

    @Column(name = "fixedcost")
    private BigDecimal fixedcost;

    @Column(name = "pickupordervalue")
    private BigDecimal pickupordervalue;

    @Column(name = "pickupbelow")
    private BigDecimal pickupbelow;

    @Column(name = "pickupcostabove")
    private BigDecimal pickupcostabove;



}
