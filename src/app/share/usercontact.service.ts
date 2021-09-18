import { Injectable } from '@angular/core';
import { ToDoTask } from './ToDoTask.model';


@Injectable({
  providedIn: 'root'
})
export class UsercontactService {

  usercontacts: ToDoTask[] = [{
    id: 0,
    taskName: 'Alex',
    status: 'Active',
    date: ""
  },
  {
    id: 1,
    taskName: 'Otto',
    status: 'InActive',
    date: 'otto.blubb@dsl.de'
  },
  {
    id: 2,
    taskName: 'Peter',
    status: 'Active',
    date: 'peter.pan@neverland.com'
  }];

  create(usercontact: ToDoTask) {
    const itemIndex = this.usercontacts.length;
    usercontact.id = this.getnextId();
    console.log(usercontact);
    this.usercontacts[itemIndex] = usercontact;
  }

  delete(usercontact: ToDoTask) {
    this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
  }

  update(usercontact: ToDoTask) {
    const itemIndex = this.usercontacts.findIndex(item => item.id === usercontact.id);
    console.log(itemIndex);
    this.usercontacts[itemIndex] = usercontact;
  }

  getall(): ToDoTask[] {
    console.log('usercontactservice:getall');
    console.log(this.usercontacts);
    return this.usercontacts;
  }

  reorderUserContacts(usercontact: ToDoTask) {
    console.log('Zur Info:', usercontact);
    this.usercontacts = this.usercontacts
      .map(uc => uc.id === usercontact.id ? usercontact : uc)
      .sort((a, uc) => uc.id - uc.id);
  }

  getUserById(id: number) {
    console.log(id);
    const itemIndex = this.usercontacts.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.usercontacts[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.usercontacts.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
