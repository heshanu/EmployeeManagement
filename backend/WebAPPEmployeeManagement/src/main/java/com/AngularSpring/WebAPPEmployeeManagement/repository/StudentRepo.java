package com.AngularSpring.WebAPPEmployeeManagement.repository;

import com.AngularSpring.WebAPPEmployeeManagement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long>{
}
