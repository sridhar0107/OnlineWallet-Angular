import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AccountbalanceComponent } from './accountbalance/accountbalance.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { TransfermoneyComponent } from './transfermoney/transfermoney.component';
import { WallettransactionsComponent } from './wallettransactions/wallettransactions.component';
import { MyserviceService } from './myservice.service';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: "register",component: RegisterComponent },
  {path: "mainpage",component: MainpageComponent,canActivate:[MyserviceService] },
  {path: "createaccount",component: CreateaccountComponent },
  {path: "accountbalance",component: AccountbalanceComponent,canActivate:[MyserviceService] },
  {path: "addmoney",component: AddmoneyComponent,canActivate:[MyserviceService] },
  {path: "transfermoney",component: TransfermoneyComponent,canActivate:[MyserviceService] },
  {path: "wallettransactions",component: WallettransactionsComponent,canActivate:[MyserviceService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
