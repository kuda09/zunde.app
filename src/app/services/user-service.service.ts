import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth-service.service";
import {User} from "../models/user";



@Injectable()
export class UserServiceService {
  private token: string;

  constructor(private http: Http, private authService: AuthService) { }

  getUsers(): Observable<User[]> {

    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    let options = new RequestOptions({ headers: headers });


    return this.http.get('/api/users', options)
        .map((response: Response) => response.json());
  }



}
