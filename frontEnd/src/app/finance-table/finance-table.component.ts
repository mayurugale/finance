import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common/common.service';
import { DialogComponent } from '../dialog/dialog.component';
import { FinanceaddComponent } from '../financeadd/financeadd.component';
import { FineditComponent } from '../finedit/finedit.component';
import * as XLSX from 'xlsx';




@Component({
  selector: 'app-finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.css']
})
export class FinanceTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'client_name', 'mobile_no', 'mail_address', 'address', 'area', 'attend', 'action'];
  dataSource!: MatTableDataSource<any>;
  action: any
  willDownload = false;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public common: CommonService, public dailog: MatDialog, public route: Router, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.common.userdata().subscribe((users: any) => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  pageredirect() {
    // this.route.navigate(['/financeadd'])
    const dialogRef = this.dailog.open(FinanceaddComponent, {
      width: '40%',
      height: 'auto',
      data: { Action: "add" }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
  onedit(row: any) {
    const dialogRef = this.dailog.open(FinanceaddComponent, {
      width: '40%',
      height: 'auto',
      data: { Action: "edit", ...row }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
  fedit(row: any) {

    const dialogRef = this.dailog.open(FineditComponent, {
      width: '40%',
      height: 'auto',
      data: { Action: "edit", ...row }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });


  }

  ondelete(id: number) {

    const dialogRef = this.dailog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.common.deldata(id).subscribe((res: any) => {
          console.log(res)
          this.ngOnInit();
        })
      }
      else {
        this.ngOnInit()
      }
    });





  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onFileSelected(ev: any) {
    console.log(ev['target']['files']);
    let workBook: any = null;
    let jsonData: any = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial: any, name: any) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      // const dataString = JSON.stringify(jsonData);
      // console.log(dataString);
      this.uploadData(jsonData)
    }
    reader.readAsBinaryString(file);
  }

  uploadData(data: any) {
    console.log(data.Sheet1);
    if (data.Sheet1) {
      this.common.bulkUpload(data.Sheet1).subscribe((data: any) => {

      })
    }

  }

}




