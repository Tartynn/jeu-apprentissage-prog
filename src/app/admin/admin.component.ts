import { Component } from '@angular/core';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
import { navigate } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router ,private localStore: LocalService){
    const u :string = this.localStore.getData('user') as string;
    const user = JSON.parse(u);
    if(!user.admin){
      navigate(router, "");
    }
  }
}
