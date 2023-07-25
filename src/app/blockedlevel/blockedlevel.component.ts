import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { UserDAL } from '../DAL/UserDAL';
import { Router } from '@angular/router';
import { navigateWithId } from '../app.component';
import { User } from '../models/user';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-blockedlevel',
  templateUrl: './blockedlevel.component.html',
})

export class BlockedlevelComponent {
  user! : User;
  constructor(private ls: LocalService ,private router: Router){
    const usObject : string = this.ls.getData('user') as string;
    this.user = JSON.parse(usObject);
  };
  navigate(url: string) {
    const id = this.user.niveauActuel;
    navigateWithId(this.router,url,id);
  }

}
