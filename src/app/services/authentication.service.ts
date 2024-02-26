import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppUser} from "../models/appUser.model";
import {jwtDecode} from "jwt-decode";
import {Member} from "../models/member.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthentificated!: boolean;
  roles: any;
  email: any;
  accessToken: any;

  constructor(private http:HttpClient,
              private router:Router,
              ) {
  }

  public login(email:string, password:string):Observable<AppUser> {

    return this.http.post<AppUser>(`http://localhost:8080/login`, {
      email: email,
      password: password
    })
  }

  loadProfile(data: any) {
    this.isAuthentificated = true;
    localStorage.setItem('isAuthentificated', JSON.stringify(this.isAuthentificated));
    this.accessToken = data.token;
    localStorage.setItem('token', this.accessToken);
    let decodedToken: any = jwtDecode(this.accessToken);
    this.email = decodedToken.sub;
    this.roles = decodedToken.role;
    localStorage.setItem('roles', JSON.stringify([this.roles]));


    if (this.roles === "MANAGER") {
      this.router.navigateByUrl('/manager');
      console.log("MANAGER");
    }if (this.roles === "MEMBER") {
      console.log("not Activated");
      if (decodedToken.isActivated) {
        this.router.navigateByUrl('/competitions');
        console.log("Member Activated");
      }
      else {
        console.log("Member not Activated");
      }
    }if (this.roles === "JURY") {
      this.router.navigateByUrl('/competitions');
      console.log("JURY");
    }
  }

  registerMember(member: Member) {
    return this.http.post<Member>(`http://localhost:8080/register/member`, member);
  }

  logout() {
    this.isAuthentificated = false;
    this.accessToken = null;
    this.email = null;
    this.roles = null;
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('isAuthentificated');
    this.router.navigateByUrl('/login');
  }
}
