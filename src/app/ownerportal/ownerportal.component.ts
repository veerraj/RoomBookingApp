import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HashLocationStrategy } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-ownerportal',
  templateUrl: './ownerportal.component.html',
  styleUrls: ['./ownerportal.component.css']
})
export class OwnerportalComponent implements OnInit {
name:string;
email:string;
  constructor(private authservice:UserService,private router:Router) { }
  ngOnInit() {
    var token=localStorage.getItem("token")
    var decoded = jwt_decode(token);
    console.log(decoded)
    this.name=decoded.name;
    this.email=decoded.email;

  }
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  onLogout()
  { 
        localStorage.clear();
        HeaderComponent.headerapp.ngOnInit()
        this.router.navigate(['home'])
        
        AppComponent.myapp.ngOnInit()
      //  this.authservice.onLogout();
      
        
  }
  
  // sidenavEvents(str) {
  //   console.log(str);
  // }
}


