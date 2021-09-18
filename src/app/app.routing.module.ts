import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodotaskComponent } from './add-todotask/add-todotask.component';
import { EditTodotaskComponent } from './edit-todotask/edit-todotask.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'edit', component: EditTodotaskComponent },
  { path: 'add', component: AddTodotaskComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
