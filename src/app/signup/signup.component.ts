import { Component, ElementRef, NgModule, ViewChild, inject } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserDAL } from '../DAL/UserDAL';
import { navigate } from '../app.component';
import { LocalService } from '../local.service';
import { User } from '../models/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
  
})
export class SignupComponent {
  @ViewChild('mail') email!: ElementRef<HTMLInputElement>;
  @ViewChild('pass') password!: ElementRef<HTMLInputElement>;
  @ViewChild('confPass') confirmP!: ElementRef<HTMLInputElement>;
  @ViewChild('firstname') firstname!: ElementRef<HTMLInputElement>;
  @ViewChild('lastname') lastname!: ElementRef<HTMLInputElement>;
  @ViewChild('message') message!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private af: AngularFireAuth, private localStore: LocalService){
    if(this.localStore.getData('user'))
      navigate(this.router,"");
  }
  async handleRegister(e: any, email:string, password:string,confirmP:string, firstname:string,lastname:string){
    e.preventDefault();
    if (!this.validateEmail(email) || !this.validatePassword(password,confirmP) || !this.namesController(firstname, lastname))
      return;
    try{
      let user : User = {
        "prenom": firstname, 
        "nom":lastname, 
        "email":email, 
        "niveauActuel":1,
        "niveaux":["","","","","","","","","",""], 
        "niveauxReussis":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
        "essais":[3,3,3,3,3,3,3,3,3,3], 
        "admin" :false
    }
      const userCredential = await this.af.createUserWithEmailAndPassword(email, password);
      UserDAL.prototype.addUser(userCredential.user?.uid,user);
      navigate(this.router,"/login");
    } catch(e) {
      this.message.nativeElement.textContent="Cette adresse mail est déjà utilisée."
    }
    
  }
  validateEmail(email: string){
    const mess = this.message.nativeElement;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      mess.textContent="";
      return true;
    } else {
      mess.textContent="L'adresse e-mail est invalide.";
      return false;
    }
  }
  validatePassword(password :string, confirmP:string){
    const mess = this.message.nativeElement;
    
    if (password.length < 6) {
      mess.textContent="Le mot de passe doit avoir au moins 6 caractères.";
      return false;
    } 
    
    if (!(password===confirmP)){
      mess.textContent="Les mots de passe doivent être les mêmes.";
      return false;
    }
    mess.textContent="";
    return true;
  }

  namesController(firstname: string, lastname:string){
    const mess = this.message.nativeElement;
    if(firstname.length==0 ||lastname.length==0){
      mess.textContent="Tous les champs doivent être remplis."
      return false;
    }
    mess.textContent="";
    return true;
  }

  navigate(url:string){
    navigate(this.router,url);
  }
}
