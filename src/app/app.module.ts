import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormBuilder} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { AccountbalanceComponent } from './accountbalance/accountbalance.component';
import { TransfermoneyComponent } from './transfermoney/transfermoney.component';
import { WallettransactionsComponent } from './wallettransactions/wallettransactions.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    CreateaccountComponent,
    AddmoneyComponent,
    AccountbalanceComponent,
    TransfermoneyComponent,
    WallettransactionsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
