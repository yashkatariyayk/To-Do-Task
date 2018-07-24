import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserContact } from '../share/usercontact.model';
import { UsercontactService } from '../share/usercontact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-usercontact',
  templateUrl: './edit-usercontact.component.html',
  styleUrls: ['./edit-usercontact.component.css']
})
export class EditUsercontactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UsercontactService) { }
  addForm: FormGroup;
  usercontact: UserContact;

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    const data = this.userService.getUserById(+userId);
    this.addForm.setValue(data);
  }

  onSubmit() {
    this.userService.update(this.addForm.value);
    this.router.navigate(['']);
  }
}
