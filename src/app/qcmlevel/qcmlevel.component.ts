import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { LocalService } from '../local.service';
import { User } from '../models/user';
import { Level } from '../models/level';
import { CodeSent } from '../models/codeSent';
import { CodeSentDAL } from '../DAL/CodeSentDAL';

@Component({
  selector: 'app-qcmlevel',
  templateUrl: './qcmlevel.component.html',
  styleUrls: ['./qcmlevel.component.css']
})
export class QcmlevelComponent {
  @ViewChild('donnee', { static: false }) donnee!: ElementRef;
  user!: User;
  lvl!: Level;
  uid!: string;
  elements : string[] = [" "," "," "," "];
  response: string;
  constructor(private ls: LocalService){
    const usObject : string = this.ls.getData('user') as string;
    const levObject : string = this.ls.getData('level') as string;
    this.lvl= JSON.parse(levObject);
    this.user = JSON.parse(usObject);
    this.elements = this.lvl.codeDepart[0].split('//');
    this.response = this.elements[0];
    this.uid = this.ls.getData('uid') as string;
  }

  ngAfterViewInit(){
    this.donnee.nativeElement.innerHTML = this.lvl.donnee[0].replaceAll('\\n','<br>');
  }
  
  async send(){
    let codeSent: CodeSent = {
      accepte: false,
      enAttente: true,
      etudiant: this.user.nom +" "+ this.user.prenom,
      niveauID: this.lvl.niveauID,
      part: 1,
      reponse: this.response,
      type: "qcm",
      uid: this.uid,
      date: new Date()
    };
    CodeSentDAL.prototype.sendCode(codeSent);
  }
}
