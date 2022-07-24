import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup

  constructor(public fb:FormBuilder, public common:CommonService,public route:Router) {
    
    this.login = this.fb.group({


      email: ['', Validators.required],
      password: ['', Validators.required]


    })
   }
   Login(){
    let data = this.login.value
    this.common.logd(data).subscribe((result: any) => {

      console.log(result)
      alert(result.massage)
      if(result.status){

      }else{
        // alert('login faild')
      }

      
         //this.dataSource = new MatTableDataSource(result);
       })

   }
   

  ngOnInit(): void {
  }

}


