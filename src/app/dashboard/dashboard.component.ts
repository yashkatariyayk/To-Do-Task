import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToDoTask } from '../share/ToDoTask.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
