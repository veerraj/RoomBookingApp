import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() condition=new EventEmitter();
  cond=false;
  static headerapp;
  
  constructor(private matdialog:MatDialog,private router:Router,private service:UserService) { 
   HeaderComponent.headerapp=this;
  }

  ngOnInit() {
        this.cond=false;
        var token=localStorage.getItem("token")
        if(token)
        {
          console.log("hi i am in")
           this.cond=true;
        }
       
  }
  check()
  {
     this.matdialog.open(RegisterComponent)
  }
  check1()
  {
     this.matdialog.open(LoginComponent)
  }
  logout()
  {
    localStorage.clear();
    this.cond=false;
    this.router.navigate(['home'])
     AppComponent.myapp.ngOnInit()
  }
}

              