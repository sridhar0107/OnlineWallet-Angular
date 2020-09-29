import { Component, OnInit } from '@angular/core';
import { MyserviceService, WalletAccount, WalletUser } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  user: WalletUser;
  userId: number;
  output: String;

  constructor(private myservice: MyserviceService,private router: Router) {
    this.user=this.myservice.userMethod();
   }
 message: string;
  ngOnInit(): void {
   
  }
  onSubmit(walletAccount:WalletAccount):any{
    walletAccount.accountBalance=0;
    this.userId=this.user.userId;
    console.log();
    this.myservice.createAccount(this.userId,walletAccount).subscribe(response => 
    this.check(response),error => this.check(null));
  }
  check(hello):any {
    if(hello==null)
  {
    window.alert("Invalid Account Id ");
  }
  else{
    window.alert("account created successfully");
  }
  }
  
  }

