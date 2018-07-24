import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserContact } from '../share/usercontact.model';
import { UsercontactService } from '../share/usercontact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usercontact',
  templateUrl: './add-usercontact.component.html',
  styleUrls: ['./add-usercontact.component.css']
})

export class AddUsercontactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UsercontactService) { }
  addForm: FormGroup;
  @Output()
  createUsercontact = new EventEmitter<UserContact>();

  // usercontacts: UserContact[]; // Array<string>

  /* addUserContact(usercontact: UserContact) {
    this.usercontacts = [...this.usercontacts, usercontact];
  } */


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.addForm.value);
    this.createUsercontact.emit({
      ...this.addForm.value,
      id: 4
    });
    // this.addForm.reset();

    this.router.navigate(['']);
    // this.userService.addUserContact(this.addForm.value);
    /*  .subscribe(data => {
        this.router.navigate(['list-user']);
      }); */
  }
}
