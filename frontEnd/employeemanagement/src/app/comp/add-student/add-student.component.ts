import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


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

  onSubmit(): void {
    if (this.addressForm.valid) { 
      console.log('Form Submitted!');
    }
  }
}
