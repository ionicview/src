/**
 * Created by wanggang on 2017/4/24.
 */
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  name: string;
  userId: string;

  constructor(name: string, userId: string) {
    this.name = name;
    this.userId = userId;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  public login(credentials) {
    console.log(credentials.userId);
    console.log(credentials.password);
    if (credentials.userId === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "wg" && credentials.userId === "wg");
        this.currentUser = new User('wg', 'wg');
        console.log(this.currentUser );
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.userId === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
