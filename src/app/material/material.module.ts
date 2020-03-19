import { NgModule } from '@angular/core';



import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    MatDividerModule,
    MatStepperModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule
  
} from '@angular/material';
//import { ProductComponent } from '../product/product.component';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
      //  MaterialFileInputModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule,
        MatDividerModule,
        MatStepperModule,
        MatSelectModule,
        MatMenuModule,
        MatCheckboxModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
//MaterialFileInputModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule,
        MatDividerModule,
        MatStepperModule,
        MatSelectModule,
        MatMenuModule,
        MatCheckboxModule
    ]    
  })
  export class MaterialModule { }
 