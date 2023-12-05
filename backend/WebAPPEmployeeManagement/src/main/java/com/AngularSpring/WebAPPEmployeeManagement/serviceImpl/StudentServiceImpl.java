package com.AngularSpring.WebAPPEmployeeManagement.serviceImpl;

import com.AngularSpring.WebAPPEmployeeManagement.model.Student;
import com.AngularSpring.WebAPPEmployeeManagement.repository.StudentRepo;
import com.AngularSpring.WebAPPEmployeeManagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

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
    @Override public ResponseEntity<String> addNewStudent(Map<String, String> requestMap){
        try{
            if(validateProductMap(requestMap,false)){
                Student st=getProductFromMap(requestMap,false);
                if(!Objects.isNull(st)){
                    studentRepo.save(getProductFromMap(requestMap,false));
                    return new ResponseEntity<>("Product Added Successfully", HttpStatus.OK);
                }else{
                    return new ResponseEntity<>("unable to add fetch", HttpStatus.BAD_REQUEST);
                }

            }
            else return new ResponseEntity<>("unable to add", HttpStatus.BAD_REQUEST);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<String> updateStudent(Map<String, String> requestMap) {
        int studentId=Integer.parseInt(requestMap.get("id"));
        Student st=studentRepo.findById(studentId).orElse(null);
        if(st!=null){
            st.setName(requestMap.get("name"));
            st.setEmail(requestMap.get("email"));
            st.setPhoneNumber(requestMap.get("phoneNumber"));
        }
        this.studentRepo.save(st);
        return new ResponseEntity<>("Student Updated Successfully", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteStudent(Integer Id) {
        try{
            Optional<Student> optional=studentRepo.findById(Id);
            if(!optional.isEmpty()){
                studentRepo.deleteById(Id);
                return new ResponseEntity<>("Student Deleted Successfully", HttpStatus.OK);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Student getStudentById(Integer id) {
        try{
            Optional<Student> optional=studentRepo.findById(id);
            if(!optional.isEmpty()){
                return optional.get();
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new Student();
    }

    private boolean validateProductMap(Map<String, String> requestMap, boolean isValid) {
        if(requestMap.containsKey("name")){
            if (requestMap.containsKey("id") && requestMap.containsKey("name") &&requestMap.containsKey("email")&& requestMap.containsKey("phoneNumber") &&isValid){
                return true;
            }else if(!isValid) return true;
        }
        return false;
    }

    private Student getProductFromMap(Map<String, String> requestMap, boolean isValid) {
        Student student=new Student();
        if(isValid){
            student.setId(Integer.parseInt(requestMap.get("id")));
        }
        student.setName(requestMap.get("name"));
        student.setEmail (requestMap.get("email"));
        student.setPhoneNumber(requestMap.get("phoneNumber"));
        return student;
    }

}
