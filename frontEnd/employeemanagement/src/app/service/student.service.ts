import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentFormat } from '../shared/interface/StudentFormat';
import { Student } from '../shared/interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  //baseUrl = "http://localhost:8080/api/v1/students";
  baseUrl = "";
  studentFormat!: StudentFormat;
  getStudents(): Observable<StudentFormat[]>{
    fetch("http://localhost:8080/api/v1/students").then(
      (data)=>{
        console.log(data);
      }
    );
    return this.http.get<Student[]>(this.baseUrl);
  }
  
  addStudent(student:StudentFormat){
    return this.http.post(this.baseUrl,student);
  }   
}
