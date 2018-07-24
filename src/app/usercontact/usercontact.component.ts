import { Component, OnInit } from '@angular/core';
import { UserContact } from '../share/usercontact.model';
import { UsercontactService } from '../share/usercontact.service';

@Component({
  selector: 'app-usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css'],
})

export class UsercontactComponent implements OnInit {

  usercontacts: UserContact[]; // Array<string>
  usercont: UserContact;

  constructor(private ucs: UsercontactService) {
  }

  editUserContact(usercontact: UserContact) {
    console.log(usercontact);
    this.ucs.update(usercontact);
  }

  deleteUserContact(usercontact: UserContact) {
    console.log(usercontact);
    this.ucs.delete(usercontact);
  }

  ngOnInit() {
    console.log('usercontact:init');
    this.usercontacts = this.ucs.getall();
    console.log(this.usercontacts);
  }
}
