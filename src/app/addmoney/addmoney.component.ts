import { Component, OnInit } from '@angular/core';
import { WalletAccount, MyserviceService, WalletUser } from '../myservice.service';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent implements OnInit {
 user: WalletUser;
  output: any;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.user=this.myservice.userMethod();
  }
  onSubmit(walletAccount:WalletAccount):any{
    console.log();
    this.myservice.addMoney(walletAccount,this.user.userId).subscribe( data => 
    this.check(data),error => this.check(null));
    
  }
  check(hello):any{
    if(hello==null){
      window.alert("Invalid Account Id");
    }
else{
window.alert(hello);
  }
} 
}