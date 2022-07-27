import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http:HttpClient) { 

  }

  getdata(){

    return this.http.get("http://localhost:3000/users");
  }

  logd(data:any){

    return this.http.post('http://localhost:3000/login',data)
  }
  userdata(){

    return this.http.get('http://localhost:3000/list/users')
  }
  deldata(id:number){

    return this.http.delete('http://localhost:3000/list/del/'+id)
  }

  finadds(data:any){
    return this.http.post('http://localhost:3000/list/inx',data)
  }
  putprod(data:any, id:number){

    return this.http.put<any>('http://localhost:3000/list/update/'+id,data)
  }
}


