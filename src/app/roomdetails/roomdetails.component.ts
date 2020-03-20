import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/room.state';
import { StripeService, ElementsOptions, Elements, Element as StripeElement } from 'ngx-stripe';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { MatDialog } from '@angular/material';
import { UserService } from '../shared/user.service';
import { RoomBooking } from './roombook.model';


@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoomdetailsComponent implements OnInit {
  stripeTest: FormGroup;
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };
  elements: Elements;
  card: StripeElement;

  id: number;
  rooms;
  description: string;
  amount:number;
  // months:number;
  // guests:number;
  myform:FormGroup;
  date:Date;
  constructor(private route: ActivatedRoute, private store: Store<Appstate>, 
              private stripeService: StripeService,private http:HttpClient,private dialog:MatDialog
              ,private amazonservice:UserService) { }

  ngOnInit() {

    this.myform=new FormGroup({
         'name':new FormControl(null),
         'phoneno':new FormControl(null),
         'email':new FormControl(null),
         'address':new FormControl(null),
         'idproof':new FormControl(null),
         'idno':new FormControl(null),
    })
    this.stripeTest = new FormGroup({
      'name': new FormControl(null),
      'amount':new FormControl({ value: this.amount, disabled: true })
    });
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];


      }
    )
    this.store.select('rooms').subscribe(
      (res: any) => {
        this.rooms = res[0]
        console.log(this.rooms)
        for (let room of this.rooms) {
          if (room.Id == this.id) {
            this.description = room.description;
            this.amount=room.price;
          }
        }
      }
    )

  }


  ngAfterViewInit() {
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {

                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  buy() {
    const name = this.stripeTest.get('name').value;
    const amount = this.stripeTest.get('amount').value;

    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
         // let noAuthHeader = { headers: new HttpHeaders( 'Access-Control-Allow-Origin: *' ) }
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log(result.token);

          this.http.post(`/payme`,{
            token:result.token.id,
            amount:(amount*100),
            name:this.myform.value.name
          }).subscribe(
            (resp)=>{
              this.dialog.open(PaysuccessComponent)
              console.log("The response server is ",resp);
              console.log("Payment Done")
              this.amazonservice.text = "Payment Done";
              this.stripeTest.reset()
              this.card.clear();

            },
            (err)=>{
               this.dialog.open(PaysuccessComponent)
               this.amazonservice.text="Payment Failed ! Try Again"
            }
          )
        } else if (result.error) {
          // Error creating the token
           this.dialog.open(PaysuccessComponent)
          console.log(result.error.message);
          this.amazonservice.text="Payment Failed ! Try Again"
        }
      });
  }

  onBooking()
  {
    // console.log(this.myform.value,this.date)
    const newroom =new RoomBooking(
      this.myform.value.name,
      this.myform.value.email,
      this.myform.value.phoneno,
      this.myform.value.address,
      this.stripeTest.get('amount').value,
      this.date,
      this.myform.value.idproof,
      this.myform.value.idno
    )
    // console.log(newroom)
    this.amazonservice.onRoomBooking(newroom)
  }

}
