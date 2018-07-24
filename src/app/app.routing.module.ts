import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsercontactComponent } from './add-usercontact/add-usercontact.component';
import { EditUsercontactComponent } from './edit-usercontact/edit-usercontact.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'edit', component: EditUsercontactComponent },
  { path: 'add', component: AddUsercontactComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
