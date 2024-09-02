package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.service.addressService;

@RestController
public class AddressController {
	
	@Autowired
	addressService addSrv;
	
	@RequestMapping("/Addresses")
	public List<Address> getAddress(){
		return addSrv.getAddress();
	}

    @PostMapping("Address")
    public Address createAddress(@RequestBody Address payload){
    	return addSrv.createAddress(payload);
    }
}
