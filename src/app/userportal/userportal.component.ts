import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { RoomInfo } from '../addrooms/room.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-userportal',
  templateUrl: './userportal.component.html',
  styleUrls: ['./userportal.component.css']
})
export class UserportalComponent implements OnInit {
rooms:RoomInfo[];
  constructor(private usersevice:UserService,private sanitizer:DomSanitizer,private router:Router
              ,private routes:ActivatedRoute,private matdialog:MatDialog) { }

  ngOnInit() {
    this.usersevice.getRoomInfo().subscribe(
      (res:any)=>{
        // this.rooms=res;
        // this.dataSource=new MatTableDataSource(this.rooms)
        console.log(res)
        this.rooms=res;
      }
    )
  }
  navigate(index:number)
  {
   this.router.navigate([`roomdetails/${index}`],{relativeTo:this.routes})
  }
  onFilter()
  {
     this.matdialog.open(FilterComponent)
  }
}
