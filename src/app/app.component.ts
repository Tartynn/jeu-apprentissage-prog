import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './local.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JeuProg';
  
}
export function navigate(router: Router,url:string){
  router.navigate([url]);
}
export function navigateWithId(router: Router,url:string,id:number){
  router.navigate([url,id]);
}


