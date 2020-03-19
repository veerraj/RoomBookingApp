import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { MatDialog } from '@angular/material';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform:FormGroup;
  constructor(private userservice:UserService,private matdialog:MatDialog,private router:Router
             ,private notifierService:NotifierService) { }

  ngOnInit() {

    this.myform=new FormGroup({
      'email': new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required)
    })
  }
  
  onLogin()
  {
    this.userservice.onLogin(this.myform.value.email,this.myform.value.password).subscribe(
      (res:any)=>{
        console.log(res)
        try{
          if(res.token)
          {
              console.log("hii login")
              localStorage.setItem("token",res.token);
              var decoded = jwt_decode(res.token);
              AppComponent.myapp.ngOnInit()
              HeaderComponent.headerapp.ngOnInit()
              console.log(decoded.role)
              if(decoded.role=="owner")
              {
                 this.router.navigate(['ownerportal'])
              }
              else{  
                 this.router.navigate(['userportal'])
              }
              this.matdialog.closeAll()
            }
            else{
              console.log("hi")
              alert("email or password invalid")
              this.notifierService.notify("success", "email or passwords are wrong try again!"); 
            }
          }
         
         catch(err)
         {
        
         }
      },
      (err)=>{
        console.log(err)
      }
    )
  
    // console.log(this.myform.value)
    this.myform.reset()
  }

}
