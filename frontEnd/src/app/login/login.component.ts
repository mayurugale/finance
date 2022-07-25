import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup

  constructor(public fb:FormBuilder, public common:CommonService,public route:Router,private toastr: ToastrService) {
    
    this.login = this.fb.group({


      email: ['', Validators.required],
      password: ['', Validators.required]


    })
   }
   Login(){
    let data = this.login.value
    this.common.logd(data).subscribe((result: any) => {

      console.log(result)
     // alert(result.massage)
      if(result.status){

        this.toastr.success(result.massage);
        this.route.navigate(['finance_table'])


      }else{
        this.toastr.error(result.massage);
      }

      
         //this.dataSource = new MatTableDataSource(result);
       })

   }
   

  ngOnInit(): void {
  }

}


