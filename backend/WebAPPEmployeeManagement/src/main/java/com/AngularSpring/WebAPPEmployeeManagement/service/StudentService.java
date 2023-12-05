package com.AngularSpring.WebAPPEmployeeManagement.service;

import com.AngularSpring.WebAPPEmployeeManagement.model.Student;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface StudentService {

    List<Student> getAllStudents();

    ResponseEntity<String> addNewStudent(Map<String, String> requestMap);
}
