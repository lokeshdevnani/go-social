import { AuthService } from './auth.service';
import { AuthHttp } from 'angular2-jwt';
import { Config } from './shared/config';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Item } from './item';
import { User } from './user';
import { MOVIES } from './mock-items';

import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private URL = Config.apiURL;

  constructor(
    private http: Http,
    private auth: AuthService,
    private authHttp: AuthHttp
  ) { }

  login(user: User): Observable<User> {
    let url = `${Config.url}/login`;
    let data = JSON.stringify({ email: user.email, password: user.password});
    return this.http
        .post( url, data, {headers: this.jsonHeaders() })
        .map(response => response.json())
        .map( res => {
          return res;
        })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  signup(user: User): Observable<User> {
    let url = `${Config.url}/user`;
    return this.http
        .post( url, JSON.stringify(user), {headers: this.jsonHeaders()})
        .map(response => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  jsonHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return headers;
  }

}
