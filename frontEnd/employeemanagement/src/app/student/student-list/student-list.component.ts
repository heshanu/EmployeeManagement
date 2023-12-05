import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../shared/interface/student';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { json } from 'stream/consumers';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  constructor(private http: HttpClient,private route: ActivatedRoute, private studentService: StudentService) { }
  
  ngOnInit(): void {
    this.getStudents();
  }
  
  studentList: Student[] = [];
  
  getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: any) => {
        console.log(response);
        this.studentList = response;
        console.log(this.studentList);
        
      }
    );

  }

  deleteStudent(id:number): void { 
    this.studentService.deleteStudent(id).subscribe(
      (response: any) => {
        
        this.studentList= this.studentList.filter(item => item.id !== id);
        this.getStudents();
      }
    );
  }
 
}
