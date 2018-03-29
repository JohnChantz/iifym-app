import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from "../../models/user";

@Injectable()
export class UserDataProvider {

  private user = {} as User;

  constructor(public http: HttpClient) {
    console.log('Hello UserDataProvider Provider');
  }

  getUsername() {
    return this.user.username;
  }
}
