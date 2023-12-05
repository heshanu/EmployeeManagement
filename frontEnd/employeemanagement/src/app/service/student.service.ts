import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../shared/interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  baseUrl = "http://localhost:8080/api/v1/students";
  
  studentFormat!: Student;

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl+"/all");
  }
  
  addStudent(student: Student | any) {
    console.log("Student Service: ");
    return this.http.post(this.baseUrl+"/addStudent",student);
  }

  updateStudent(student: Student | any) {
    console.log("Student Service: ");
    return this.http.post(this.baseUrl+"/updateStudent",student);
  }
}

