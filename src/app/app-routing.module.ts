import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OwnerportalComponent } from './ownerportal/ownerportal.component';
import { UserportalComponent } from './userportal/userportal.component';
import { AuthGuard } from './shared/auth.guard';
import { AddroomsComponent } from './addrooms/addrooms.component';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'ownerportal',component:OwnerportalComponent,canActivate:[AuthGuard],children:[
     {path:'addrooms',component:AddroomsComponent}
  ]},
  {path:'userportal',component:UserportalComponent,canActivate:[AuthGuard],children:[
   {path:'roomdetails/:id',component:RoomdetailsComponent}
  ]}
  // {path:'register',component:RegisterComponent},
  // {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
