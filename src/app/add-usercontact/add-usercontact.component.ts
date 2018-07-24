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

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.create(this.addForm.value);

    this.router.navigate(['']);
  }
}
