import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { StoreModule } from '@ngrx/store'

import { NgxStripeModule } from 'ngx-stripe'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { NgbCarouselModule,NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwnerportalComponent } from './ownerportal/ownerportal.component';
import { UserportalComponent } from './userportal/userportal.component';
import { AddroomsComponent } from './addrooms/addrooms.component';
import { AddnewroomComponent } from './addnewroom/addnewroom.component'
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';
import { FilterComponent } from './filter/filter.component';
import { reducer } from './store/room.reducer';
import { PaysuccessComponent } from './roomdetails/paysuccess/paysuccess.component';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 600
		},
		vertical: {
			position: 'top',
			distance: 200,
			gap: 10
		}
  },
}
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    OwnerportalComponent,
    UserportalComponent,
    AddroomsComponent,
    AddnewroomComponent,
    RoomdetailsComponent,
    FilterComponent,
    PaysuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbCarouselModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialFileInputModule,
    NotifierModule.withConfig(
      customNotifierOptions
    ),
    StoreModule.forRoot({
         rooms:reducer
    }),
    NgxStripeModule.forRoot('pk_test_PgdqnLqr0caeeS5Ze2wmkIDN00GTldYQ7a')

  ],
  providers: [],
  entryComponents:[RegisterComponent,LoginComponent,AddnewroomComponent,FilterComponent,PaysuccessComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
