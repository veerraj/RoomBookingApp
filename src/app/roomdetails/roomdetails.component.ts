import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {
  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
     
    this.route.params.subscribe(
      (params:Params)=>{
          this.id=params['id'];
      }
    )
       
  }

}
