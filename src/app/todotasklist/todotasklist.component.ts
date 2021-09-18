import { Component, OnInit } from '@angular/core';
import { ToDoTask } from '../share/ToDoTask.model';
import { UsercontactService } from '../share/usercontact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todotasklist',
  templateUrl: './todotasklist.component.html',
  styleUrls: ['./todotasklist.component.css'],
})

export class UsercontactComponent implements OnInit {

  usercontacts: ToDoTask[]; // Array<string>
  usercont: ToDoTask;

  constructor(private ucs: UsercontactService, private router: Router) {
  }

  editUserContact(usercontact: ToDoTask) {
    console.log(usercontact);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', usercontact.id.toString());
    this.router.navigate(['edit']);
    // this.ucs.update(usercontact);
  }

  deleteUserContact(usercontact: ToDoTask) {
    console.log(usercontact);
    alert("Are You sure want to delete?"); {

      this.ucs.delete(usercontact);
    }
  }

  ngOnInit() {
    console.log('usercontact:init');
    this.usercontacts = this.ucs.getall();
    console.log(this.usercontacts);
  }
}
