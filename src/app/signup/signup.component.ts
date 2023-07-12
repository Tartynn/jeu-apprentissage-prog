import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignupComponent {
  constructor(private router: Router){}
  navigate(url: string){
    this.router.navigate([url]);
  }
}
