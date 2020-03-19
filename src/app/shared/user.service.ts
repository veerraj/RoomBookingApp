import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';


import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { RoomInfo } from '../addrooms/room.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ///static token;
  static user:RoomInfo;
  static id:number;
  readonly baseUrl="/";
  constructor(private http:HttpClient,private router:Router) { }

  onRegister(user:User)
  {
    // console.log()
    this.http.post(this.baseUrl+'register',user,{responseType:'json'}).subscribe(
      (res)=>{
        console.log("registerd "+res)
      }
    )
  }
  onLogin(email:string,password:string)
  {
     return this.http.post(this.baseUrl+'login',{email,password},{responseType:'json'})
  }
  isAuthenticated()
  {
     var token=localStorage.getItem("token")
     return token!=null;
  }
  onLogout()
  {
   
   
    this.router.navigate(['home'])
  
    AppComponent.myapp.ngOnInit()
   }

   onRoomAdd(newroom:RoomInfo)
   {
       console.log(newroom);
       this.http.post(this.baseUrl+'rooms',newroom,{responseType:'json'}).subscribe(
         (res)=>{
           console.log(res)
         }
       )
   }

   getRoomInfo()
   {
      return this.http.get(this.baseUrl+'rooms')
   }
  
   onDeleteRoom(id:number)
   {
      this.http.delete(this.baseUrl+`rooms/${id}`,{responseType: 'text'}).subscribe(
        (res)=>{
          console.log(res)
        }
      )
   }

   setIdandRoom(user:RoomInfo,id:number)
   { 
       UserService.user=user;
       UserService.id=id;
   }

   getId()
   {
     return UserService.id;
   }
   getRoom()
   {
     return UserService.user;
   }
   onEditRoom(room:RoomInfo,id:number)
   {
     console.log(id)
    this.http.put(this.baseUrl+`rooms/${id}`,room,{responseType: 'text'}).subscribe(
      (res)=>{
        console.log(res)
      }
    )
   }
  // setToken()
  // {
  //    var token=localStorage.getItem("token")
  //    UserService.token=token
  // }
}
