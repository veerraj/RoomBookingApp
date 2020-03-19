import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
  
  constructor(private matdialog:MatDialog) { }

  ngOnInit() {
  }
  cancel()
  {
     this.matdialog.closeAll()
  }
  apply()
  {

    this.matdialog.closeAll()
  }

}
