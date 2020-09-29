import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  output: String;
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
logout()
{
    
    this.myservice.isLoggedIn=false;
    this.router.navigate(['/']);
}

}
