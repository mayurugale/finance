import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { 
    
  }

 
  ngOnInit(): void {
  }

  delete(){
    
    this.dialogRef.close(true)
  }
  close(){

    this.dialogRef.close(false)
  }
  
}
