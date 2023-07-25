import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocalService } from '../local.service';
import { User } from '../models/user';
import { Level } from '../models/level';

@Component({
  selector: 'app-qcmlevel',
  templateUrl: './qcmlevel.component.html',
  styleUrls: ['./qcmlevel.component.css']
})
export class QcmlevelComponent {
  @ViewChild('donnee', { static: false }) donnee!: ElementRef;
  user!: User;
  lvl!: Level;
  constructor(private ls: LocalService){
    const usObject : string = this.ls.getData('user') as string;
    const levObject : string = this.ls.getData('level') as string;
    this.lvl= JSON.parse(levObject);
    this.user = JSON.parse(usObject);
  }

  ngAfterViewInit(){
    this.donnee.nativeElement.innerHTML = this.lvl.donnee[0].replaceAll('\\n','<br>');
  }
  async send(){
    
  }
}
