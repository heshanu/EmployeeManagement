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

  //baseUrl = "http://localhost:8080/api/v1/students";
  baseUrl = "";
  studentFormat!: Student;
  getStudents(): Observable<Student[]>{
    fetch("http://localhost:8080/api/v1/students").then(
      (data)=>{
        console.log(data);
      }
    );
    return this.http.get<Student[]>(this.baseUrl);
  }
  
  addStudent(student:Student |any){
    return this.http.post(this.baseUrl,student);
  }
  
}

