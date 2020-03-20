import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-paysuccess',
  templateUrl: './paysuccess.component.html',
  styleUrls: ['./paysuccess.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PaysuccessComponent implements OnInit {
  text:string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.text=this.userService.text
  }

}
