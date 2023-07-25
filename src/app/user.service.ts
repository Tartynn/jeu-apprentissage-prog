import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: any | null = null;

  constructor() { }

  setUser(user: any): void {
    this._user = user;
  }

  getUser(): any | null {
    return this._user;
  }
}
