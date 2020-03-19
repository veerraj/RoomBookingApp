import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomInfo } from '../addrooms/room.model'
import { UserService } from 'src/app/shared/user.service';
import { AddroomsComponent } from '../addrooms/addrooms.component';

@Component({
  selector: 'app-addnewroom',
  templateUrl: './addnewroom.component.html',
  styleUrls: ['./addnewroom.component.css']
})
export class AddnewroomComponent implements OnInit {

  constructor(private matdialog:MatDialog,private service:UserService) { }
  myform:FormGroup;
  base64textString;
  room;
  location:string;
  contact:string;
  price:number;
  description:string;
  editMode=false;
  id:number;
  //image:string;
  ngOnInit() {
     
      // console.log(this.service.getId())
     // console.log(this.service.getRoom())
      this.room=this.service.getRoom();
      console.log(this.room)

         this.myform=new FormGroup({
             'location':new FormControl(null,Validators.required),
             'contact':new FormControl(null,Validators.required),
             'price':new FormControl(null,Validators.required),
             'description':new FormControl(null,Validators.required),
             'image':new FormControl(null,Validators.required)
         })
        
         if(this.room.location!='')
         {
              this.editMode=true;
              this.location=this.room.location;
              this.contact=this.room.contact;
              this.price=this.room.price;
              this.description=this.room.description;
              this.id=this.room.Id;
         }
         
  }

  onCancel()
  {
    console.log("hii")
    this.editMode=false;
    this.location='';
    this.contact='';
    this.price=0;
    this.description='';
    this.matdialog.closeAll()
  }

  changeEvent(event:any)
  {
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt)
   {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
   }

  onAdd()
  {
    if(!this.editMode)
    {
        const newRoom=new RoomInfo(
            this.myform.value.location,
            this.myform.value.contact,
            this.myform.value.price,
            this.myform.value.description,
            this.base64textString
        )
        this.service.onRoomAdd(newRoom);
        AddroomsComponent.myapp.ngOnInit();
        this.matdialog.closeAll()
    }
    else
    {
      const updatedRoom=new RoomInfo(
        this.myform.value.location,
        this.myform.value.contact,
        this.myform.value.price,
        this.myform.value.description,
        this.base64textString
      )
        this.service.onEditRoom(updatedRoom,this.id)
        AddroomsComponent.myapp.ngOnInit();
        this.matdialog.closeAll()
        this.editMode=false;
    
    }
  }

}
