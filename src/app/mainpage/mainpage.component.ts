import { Component, OnInit } from '@angular/core';
import { WalletUser, WalletTransactions, MyserviceService, WalletAccount } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  walletAccount: WalletAccount;
  walletTransactions: WalletTransactions[];
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
    this.walletAccount=this.myservice.accountMethod();
  }

  details()
  {
    this.myservice.transactionDetails(this.walletAccount.accountId).subscribe(response => 
      this.hello(response));
  }
  hello(response)
  {
    this.walletTransactions=response;
    this.myservice.transactions(this.walletTransactions);
    this.router.navigate(['/wallettransactions']);
    
  }
}
