import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collection } from '@angular/fire/firestore';
import { LocalService } from '../local.service';
import { navigate } from '../app.component';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})


export class HomePageComponent {
  firestore: Firestore = inject(Firestore);
  user : User;
  constructor(public af: AngularFireAuth,private router: Router ,private ls: LocalService) {
    const u :string = this.ls.getData('user') as string;
    this.user = JSON.parse(u);
    if(!this.user)
      navigate(this.router,'login');
  } 

  navigate(url:string){
    const id : number = Number(url.charAt(url.length-1));
    if(id > this.user.niveauActuel){
      navigate(this.router,'blocked');
    }else{
      navigate(this.router,url);
    }
  }
}
