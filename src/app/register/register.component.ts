import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform:FormGroup
  constructor(private userservice:UserService,private matdialog:MatDialog) { }

  ngOnInit() {
    this.myform=new FormGroup({
      'name': new FormControl(null,Validators.required),
      'email': new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'role':new FormControl(null,Validators.required)
    })
  }

  onRegister()
  {
    // console.log(this.myform.value)
    this.userservice.onRegister(this.myform.value)
    this.matdialog.closeAll()
  }

}
