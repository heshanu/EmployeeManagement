import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { Student } from '../../shared/interface/student';
import { log } from 'console';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {
  constructor(private studentService: StudentService) { }

  ngOnInit(): void { }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    id: null,
    name: [null, Validators.required],
    email: [null, Validators.required],
    phoneNumber: [null, Validators.required],
  });

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
      console.log("updated");
      
      this.studentService.updateStudent(this.addressForm.value).subscribe(
      (response: any) => {
        console.log(response);
        alert('Student updated successfully');
      }
    );
    this.addressForm.reset();
    }
    else {
      alert('Please fill all the details');
    }
  }

  
}
