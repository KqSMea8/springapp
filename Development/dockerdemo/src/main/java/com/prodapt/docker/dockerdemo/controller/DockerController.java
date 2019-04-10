package com.prodapt.docker.dockerdemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DockerController {
	
	@GetMapping("/printname")
	public String getMyName() {
		return "hello bnamee";
		
	}

}
