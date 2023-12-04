import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
//import { CreateStudentComponent } from './student/create-student/create-student.component';
import { NotFoundComponent } from './comp/not-found/not-found.component';
import { AddStudentComponent } from './comp/add-student/add-student.component';

const routes: Routes = [
  {path:"students",component:StudentListComponent},
  { path: "addStudent", component: AddStudentComponent },
  { path: "", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
