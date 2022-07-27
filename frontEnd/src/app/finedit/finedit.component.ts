import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-finedit',
  templateUrl: './finedit.component.html',
  styleUrls: ['./finedit.component.css']
})
export class FineditComponent implements OnInit {
  finupdate:FormGroup

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private fb:FormBuilder,public common:CommonService,public router:Router,public tost:ToastrService,@Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(this.data);


    this.finupdate=this.fb.group({


    
      follow_up_date: ['', Validators.required],
      description: ['', Validators.required],

    })
    if(this.data.Action == "edit"){

     
      this.finupdate.controls['follow_up_date'].setValue(this.data.follow_up_date);
      this.finupdate.controls['description'].setValue(this.data.description);

    }
  }

  onUpdate(){

    this.common.putprod(this.finupdate.value,this.data.id).subscribe((result:any)=>{

      // alert("data updated")

      this.tost.success('Data updated succssfully');

      this.router.navigate(['/finance_table'])

      // this.btnclk=false;
       this.ngOnInit();

       
     })
  }
   

  ngOnInit(): void {
  }

}
