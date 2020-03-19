import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'roomBookingSystem';
  cond=false;
  static myapp;
  //con=false;
  constructor() {
     AppComponent.myapp=this;
  }
  ngOnInit()
  {
    this.cond=false;
    console.log("hii")
    var token=localStorage.getItem("token");
    var decoded = jwt_decode(token);
   // console.log()
    if(decoded.role=="owner")
    {
      this.cond=true;
    }
    
  }
  // static chechCondition()
  // {
  //   AppComponent.cond=true;
  // }
  // returnvalue()
  // {
  //    return AppComponent.cond
  // }
}


