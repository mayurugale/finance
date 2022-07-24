import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FinanceTableComponent } from './finance-table/finance-table.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'finance_table',component: FinanceTableComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
