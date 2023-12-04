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
    phoneNumber: [null, Validators.required],
    // address2: null,
    // city: [null, Validators.required],
    // state: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
    // shipping: ['free', Validators.required]
  });

 
  onSubmit(): void {
    if (this.addressForm.valid) { 
      console.log('Form Submitted!');
      alert('Form Submitted!');
      //console.log(this.addressForm.value);
    }
  }
}
