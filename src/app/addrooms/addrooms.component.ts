import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddnewroomComponent } from '../addnewroom/addnewroom.component';
import { UserService } from '../shared/user.service';
import { RoomInfo } from './room.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-addrooms',
  templateUrl: './addrooms.component.html',
  styleUrls: ['./addrooms.component.css']
})
export class AddroomsComponent implements OnInit {
  displayedColumns: string[] = [ 'position','image','location', 'contact', 'price','description','action-delete','action-edit'];
  dataSource:any;
  static myapp;
  rooms:RoomInfo[]
  constructor(private matdialog:MatDialog,private service:UserService,private sanitizer:DomSanitizer) {
    AddroomsComponent.myapp=this;
   }
  
  ngOnInit() {
    // console.log(this.service.getRoomInfo())
   this.getlist()
  }

  getlist()
  {
    this.service.getRoomInfo().subscribe(
      (res:any)=>{
        this.rooms=res;
        this.dataSource=new MatTableDataSource(this.rooms)
        console.log(res)
      }
    )
  }

  addRoom()
  { 
     const newroom=new RoomInfo('','',0,'','');
    this.service.setIdandRoom(newroom,0)
     this.matdialog.open(AddnewroomComponent)
  }

  onDelete(id:number)
  {
     this.service.onDeleteRoom(id);
     this.getlist()
  }

   onEdit(room:RoomInfo,id:number)
   {
       this.service.setIdandRoom(room,id)
       this.matdialog.open(AddnewroomComponent)
   }
}
