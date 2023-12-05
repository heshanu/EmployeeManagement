package com.AngularSpring.WebAPPEmployeeManagement.serviceImpl;

import com.AngularSpring.WebAPPEmployeeManagement.model.Student;
import com.AngularSpring.WebAPPEmployeeManagement.repository.StudentRepo;
import com.AngularSpring.WebAPPEmployeeManagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import com.AngularSpring.WebAPPEmployeeManagement.utils.constant.StudentConstant;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepo studentRepo;


    @Override
    public List<Student> getAllStudents() {
        try{
            List<Student> students = studentRepo.findAll();
            if(students.isEmpty()){
                return new ArrayList<>();
            }
            return students;
        }
        catch (Exception e){
           e.printStackTrace();
        }

        return new ArrayList<>();
    }
}
