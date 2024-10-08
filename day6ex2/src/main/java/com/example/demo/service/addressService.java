package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.entities.Address;

@Component
public class addressService {

	@Autowired
	IAddressPersistence addressDB;
	
	public List<Address> getAddress(){
		return addressDB.findAll();
	}
	
	public Address createAddress(Address payload) {
		return addressDB.save(payload);
	}
}
