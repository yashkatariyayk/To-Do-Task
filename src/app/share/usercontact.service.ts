import { Injectable } from '@angular/core';
import { UserContact } from './usercontact.model';

@Injectable({
  providedIn: 'root'
})
export class UsercontactService {

  /* addUserContact(usercontact: UserContact): UserContact {
    return {
      .../UserContact;
      // ...usercontact = [...this.usercontacts, this.addForm.value];
      // ...usercontact,
      // rating: Math.max(book.rating - 1, this.minRating)
      // rating: book.rating > this.minRating ? book.rating -1 : book.rating
    };
  } */

  constructor() { }
}
