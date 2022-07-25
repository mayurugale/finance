import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FinanceTableComponent } from './finance-table/finance-table.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'finance_table',component: FinanceTableComponent},
  {path:'dialog',component: DialogComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
