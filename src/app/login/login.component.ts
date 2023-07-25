import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { navigate } from '../app.component';
import { LocalService } from '../local.service';
import { UserDAL } from '../DAL/UserDAL';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  @ViewChild('message') message!: ElementRef<HTMLInputElement>;
  constructor(private router: Router, public af: AngularFireAuth,private localStore: LocalService){
    if(this.localStore.getData('user'))
      navigate(this.router,"");
  }
 
  async login(mail: string, pass: string) {   
    try {
      await this.af.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      await this.af.signInWithEmailAndPassword(mail, pass);
      this.af.authState.subscribe(async user => {
        const u: any = await UserDAL.prototype.getUserById(user?.uid);  
        this.localStore.saveData('user',JSON.stringify(u));
        const uid : string= user?.uid as string;
        this.localStore.saveData('uid',uid);
        if(u.admin){
          this.router.navigate(["admin"]);
        }else{
          this.router.navigate([""]);
        }
      });
    } catch(e) {
      this.message.nativeElement.textContent = "Email ou mot de passe incorrect.";
    }
  }
}
