import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  walletUser:WalletUser;
  walletAccount: WalletAccount;
  walletTransactions: WalletTransactions[];
  isLoggedIn: boolean=false;
  constructor(private httpService: HttpClient,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      alert('Please log in')
      this.router.navigate(['']);
      return false;
    }
  }
  public addUser(adduser: WalletUser) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7856/onlinewallet/createuser", adduser,  { headers, responseType: 'text'});
  }
  public userLogin(userId: number,password: String) {
    console.log("ins service login");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<WalletUser>("http://localhost:7856/onlinewallet/userlogin/"+userId+"/"+password);
  }
  public transactionDetails(accountId: number) {
    console.log("ins service transaction details");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<WalletTransactions[]>("http://localhost:7856/onlinewallet/transactiondetails/"+accountId);
  }
  public createAccount(userId: number,walletAccount: WalletAccount) {
    console.log("ins service addAccount");
    console.log(walletAccount);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7856/onlinewallet/createaccount/"+userId, walletAccount,  { headers, responseType: 'text'});
  }
  public addMoney(walletAccount: WalletAccount,userId: number) {
    console.log("ins service addMoney");
    console.log(walletAccount);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7856/onlinewallet/addmoney/"+userId,walletAccount,  { headers, responseType: 'text'});
  }
  public viewBalance(accountId: number,userId: number) {
    console.log("ins service view balance");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<number>("http://localhost:7856/onlinewallet/accountbalance/"+accountId+"/"+userId);
  }
  public transferAmount(userId: number,obj:any) {
    console.log("ins service view balance");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:7856/onlinewallet/transferfund/"+userId+"/"+obj.accountId+"/"+obj.receiveraccountId+"/"+obj.amount,{ headers, responseType: 'text'});
  }
  public user(user:WalletUser)
  {
    this.walletUser=user;
  }
  public userMethod()
  {
    return this.walletUser;
  }
  public account(walletAccount:WalletAccount)
  {
    this.walletAccount=walletAccount;
  }
  public accountMethod()
  {
    return this.walletAccount;
  }
  public transactions(walletTransactions: WalletTransactions[])
  {
    this.walletTransactions=walletTransactions;
  }
  public transactionsMethod()
  {
    return this.walletTransactions;
  }
}
export class WalletUser
{
  userId: number;
  userName: String;
  phoneNumber: String;
  password: String;
  loginName: String;
  walletAccount: WalletAccount;
}
export class WalletAccount
{
  accountId: number;
  accountBalance: number;
  walletTransactions: Set<WalletTransactions>;
  
}
export class WalletTransactions
{
  transactionId: number;
  discription: String;
  dateOfTransaction: Date;
  amount: number;
  accountBalance: number;
  walletAccount :WalletAccount;
}