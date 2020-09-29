import { Component, OnInit } from '@angular/core';
import { WalletTransactions, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-wallettransactions',
  templateUrl: './wallettransactions.component.html',
  styleUrls: ['./wallettransactions.component.css']
})
export class WallettransactionsComponent implements OnInit {

  walletTransactions: WalletTransactions[];
  constructor(private myservice: MyserviceService) { 
    this.walletTransactions=myservice.transactionsMethod();
  }

  ngOnInit(): void {
  }

}
