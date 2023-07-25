import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { User } from '../models/user';
import { navigate, navigateWithId } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  user : User;
  constructor(private router: Router, private localStore: LocalService){
    const u :string = this.localStore.getData('user') as string;
    this.user = JSON.parse(u);
    if(this.user.admin){
      this.navigate('admin');
    }
    
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
