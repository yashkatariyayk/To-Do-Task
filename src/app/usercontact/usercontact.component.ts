import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { UserContact } from '../share/usercontact.model';
import { UsercontactService } from '../share/usercontact.service';

@Component({
  selector: 'app-usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsercontactComponent implements OnInit {

  usercontacts: UserContact[]; // Array<string>
  usercont: UserContact;

  // fixes cross side error from chrome
  /* @Input() usercon: UserContact = {} as UserContact; */
  @Output() rate = new EventEmitter<UserContact>(true);


  constructor(private ucs: UsercontactService) {
  }

  editUserContact(usercontact: UserContact) {
    console.log(usercontact);
    const itemIndex = this.usercontacts.findIndex(item => item.id === usercontact.id);
    console.log(itemIndex);
    this.usercontacts[itemIndex] = usercontact;
  }

  reorderUserContacts(usercontact: UserContact) {
    console.log('Zur Info:', usercontact);
    this.usercontacts = this.usercontacts
      .map(uc => uc.id === usercontact.id ? usercontact : uc)
      .sort((a, uc) => uc.id - uc.id);
  }


  deleteUserContact(usercontact: UserContact) {
    console.log(usercontact);
    this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
  }

  ngOnInit() {
    this.usercontacts = [{
      id: 1,
      firstname: 'Alex',
      lastname: 'BlaBla',
      email: 'alex.blabla@aol.at'
    },
    {
      id: 2,
      firstname: 'Otto',
      lastname: 'Blubb',
      email: 'otto.blubb@telekom.de'
    },
    {
      id: 3,
      firstname: 'Peter',
      lastname: 'Pan',
      email: 'peter.pan@neverland.com'
    }];
  }
}
