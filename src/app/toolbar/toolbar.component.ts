import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserDAL } from '../DAL/UserDAL';
import { LocalService } from '../local.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @ViewChild('name', { static: false }) nameLabel!: ElementRef;
  constructor(private router: Router, private af: AngularFireAuth,private localStore: LocalService) {
    
  }

  disconnection(){
    this.localStore.removeData('user');
    this.navigate("login");
  }

  ngAfterViewInit(){
    const u :string = this.localStore.getData('user') as string;
    const user = JSON.parse(u);
    this.nameLabel.nativeElement.textContent = user.nom + " " + user.prenom ;
  }
  navigate(url: string){
    this.router.navigate([url]);
  }
}
