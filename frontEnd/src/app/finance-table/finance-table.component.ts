import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../common/common.service';



@Component({
  selector: 'app-finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.css']
})
export class FinanceTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'client_name', 'mobile_no', 'mail_address','address','area','attend','action'];
  dataSource!: MatTableDataSource<any>;
  action:any

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;
  @ViewChild(MatSort)
   sort!: MatSort;

  constructor(public common:CommonService) { 
  this.common.userdata().subscribe((users:any)=>{
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(users)
  })
  }
  ngOnInit(): void {
  }

  ondelete(id:number){
if(confirm('Are your sure to delete')){


this.common.deldata(id).subscribe((res:any)=>{
  console.log(res)



  
})
}

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

 


