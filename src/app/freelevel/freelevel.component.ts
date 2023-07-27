import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { Level } from '../models/level';
import { LocalService } from '../local.service';
import { CodeSent } from '../models/codeSent';
import { CodeSentDAL } from '../DAL/CodeSentDAL';
import { LevelDAL } from '../DAL/LevelDAL';

@Component({
  selector: 'app-freelevel',
  templateUrl: './freelevel.component.html',
  styleUrls: ['./freelevel.component.css']
})
export class FreelevelComponent {
  @ViewChild('donnee', { static: false }) donnee!: ElementRef;
  @ViewChild('textArea', { static: false }) ta!: ElementRef;
  user!: User;
  lvl!: Level;
  uid!: string;
  response: string;
  constructor(private ls: LocalService){
    const usObject : string = this.ls.getData('user') as string;
    const levObject : string = this.ls.getData('level') as string;
    this.lvl= JSON.parse(levObject);
    this.user = JSON.parse(usObject);
    this.response = "";
    this.uid = this.ls.getData('uid') as string;
  }

  ngAfterViewInit(){
    this.donnee.nativeElement.innerHTML = this.lvl.donnee[0].replaceAll('\\n','<br>');
    this.ta.nativeElement.innerHTML = this.lvl.codeDepart[0].replaceAll('\\n','\n');
  }
  async send(textAreaValue: string){
    let codeSent: CodeSent = {
      accepte: false,
      enAttente: true,
      etudiant: this.user.nom +" "+ this.user.prenom,
      niveauID: this.lvl.niveauID,
      part: 1,
      reponse: textAreaValue,
      type: "free",
      uid: this.uid,
      date: new Date()
    };
    CodeSentDAL.prototype.sendCode(codeSent);
  }
}
