import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-financeadd',
  templateUrl: './financeadd.component.html',
  styleUrls: ['./financeadd.component.css']
})
export class FinanceaddComponent implements OnInit {

finadd:FormGroup
btnsave:string="save"

btnclk:boolean=false

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  updatedata:any


  constructor(public fb:FormBuilder,public common:CommonService,public router:Router,public tost:ToastrService,@Inject(MAT_DIALOG_DATA) public data: any) { 

    
    console.log(this.data);
    // let dataFlag = (Object.keys(this.data).length)?true:false
    // console.log(dataFlag);
   
    this.finadd = this.fb.group({


      client_name: ['', Validators.required],
      mobile_no: ['', Validators.required],
      mail_address: ['', Validators.required],
      address: ['', Validators.required],
      area: ['', Validators.required],
      attend: ['', Validators.required],
      follow_up_date: ['', Validators.required],
      description: ['', Validators.required],

    })

    if(this.data.Action == "edit"){
      this.btnsave="edit"

      this.finadd.controls['client_name'].setValue(this.data.client_name);
      this.finadd.controls['mobile_no'].setValue(this.data.mobile_no);
      this.finadd.controls['mail_address'].setValue(this.data.mail_address);
      this.finadd.controls['address'].setValue(this.data.address);
      this.finadd.controls['area'].setValue(this.data.area);
      this.finadd.controls['attend'].setValue(this.data.attend);
      this.finadd.controls['follow_up_date'].setValue(this.data.follow_up_date);
      this.finadd.controls['description'].setValue(this.data.description);

    }

  
  }
  onSubmit(){
    this.btnclk=true
    if(this.data.Action == "add"){

  
    this.common.finadds(this.finadd.value).subscribe((result:any) =>{

      if(result){

        this.tost.success('Data succssfully submitted');
        this.btnclk=false


        this.router.navigate(['/finance_table'])
      }

      console.log(result)
    })
  }else{
    
    this.common.putprod(this.finadd.value,this.data.id).subscribe((result:any)=>{

          alert("data updated")
          this.btnclk=false;
          this.finadd.reset();
          
        })
      
  }
  }

  ngOnInit(): void {
  }

}
