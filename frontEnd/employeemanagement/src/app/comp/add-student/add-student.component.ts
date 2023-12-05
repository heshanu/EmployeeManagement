import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../shared/interface/student';
import { error } from 'node:console';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    id: null,
    name: [null, Validators.required],
    email: [null, Validators.required],
    phoneNumber: [null, Validators.required]
  });

  constructor(private studentService:StudentService,private route:ActivatedRoute) { }

  onSubmit(): void {
    if (this.addressForm.valid) { 
      console.log('Form Submitted!');
      this.addUser();
    }
  }

  addUser(): void {
    this.studentService.addStudent(this.addressForm.value)
      .subscribe((student:Student|any) => {
        console.log("Student Added", student);
      }, error => { 
        console.log(error);
      });
  }
}
