package com.AngularSpring.WebAPPEmployeeManagement.controller;

import com.AngularSpring.WebAPPEmployeeManagement.model.Student;
import com.AngularSpring.WebAPPEmployeeManagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.AngularSpring.WebAPPEmployeeManagement.utils.constant.StudentConstant;
@RestController
@CrossOrigin(origins = StudentConstant.CROSS_ORIGIN)
@RequestMapping("/api/v1/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAllStudents() {
        try{
            List<Student> students = studentService.getAllStudents();
            if(students.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(students, HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/addStudent")
    ResponseEntity<String> addNewProduct(@RequestBody Map<String, String> requestMap){
        try{
            return studentService.addNewStudent(requestMap);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong",HttpStatus.BAD_REQUEST);
    }
}