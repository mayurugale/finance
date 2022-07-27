import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/modules/material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FinanceTableComponent } from './finance-table/finance-table.component';
import { DialogComponent } from './dialog/dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { FinanceaddComponent } from './financeadd/financeadd.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FinanceTableComponent,
    DialogComponent,
    FinanceaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot()
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
