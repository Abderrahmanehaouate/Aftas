import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppUser} from "../models/appUser.model";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthentificated: boolean = false;
  roles: any;
  email: any;
  accessToken: any;

  constructor(private http:HttpClient) {
  }

  public login(email:string, password:string):Observable<AppUser> {

    return this.http.post<AppUser>(`http://localhost:8080/login`, {
      email: email,
      password: password
    })
  }

  loadProfile(data: any) {
    this.isAuthentificated = true;
    this.accessToken = data.token;
    // save token in local storage
    localStorage.setItem('token', this.accessToken);
    // get token from local storage
    this.accessToken = localStorage.getItem('token');
    let decodedToken: any = jwtDecode(this.accessToken);
    console.log(decodedToken);
    console.log(decodedToken.sub);
    console.log(decodedToken.role);
    this.email = decodedToken.sub;
    this.roles = decodedToken.role;
  }
}
