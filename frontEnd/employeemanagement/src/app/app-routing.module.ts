import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';

const routes: Routes = [
  {path:"students",component:StudentListComponent},
  { path: "addStudent", component: CreateStudentComponent },
  { path: "", redirectTo: "students", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
