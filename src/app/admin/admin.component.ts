import { Component, inject } from '@angular/core';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
import { navigate } from '../app.component';
import { Level } from '../models/level';
import { CodeSentDAL } from '../DAL/CodeSentDAL';
import { Firestore } from '@angular/fire/firestore';
import { CodeSent } from '../models/codeSent';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  firestore: Firestore = inject(Firestore);
  level!: CodeSent[];
  codesSent: any;
  constructor(private router: Router ,private localStore: LocalService){
    const u :string = this.localStore.getData('user') as string;
    const user = JSON.parse(u);
    if(!user.admin){
      navigate(router, "");
    }
    this.level = new Array;
    this.codesSent = CodeSentDAL.prototype.getAllPendingCode();
  }

  async ngAfterViewInit(){
    this.codesSent = await this.codesSent;
    this.codesSent.forEach((element: CodeSent | null) => {
      if(element !== null){
        this.level.push(element);
        console.log(element);
      }
    });
    console.log(this.level[0].etudiant);
    
  }
}
