import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { error } from 'console';
import { StudentFormat } from '../../shared/interface/StudentFormat';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private studentService: StudentService) { }
  
  private fb = inject(FormBuilder);
  addressForm= this.fb.group({
    id:null|number,
    name: [null, Validators.required],
    email: [null, Validators.required],
    phoneNumber: [null, Validators.required]
  });

  onSubmit(): void {
    if (this.addressForm.valid) { +
      console.log('Form Submitted!');
    }
  }

  addUser():void {
    this.studentService.addStudent(this.addressForm.value).subscribe(
      (data)=>{
        console.log(data);
      }, (error => { 
        console.log(error)})
    );
   }  
}
