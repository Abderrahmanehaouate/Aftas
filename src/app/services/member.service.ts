import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../models/member.model";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http:HttpClient) { }
  public getAllMembers(page: number, size: number) {
    return this.http.get(`http://localhost:8080/api/v1/members?page=${page}&size=${size}`, {observe: 'response'})
  }
  public countMembers() {
    return this.http.get<number>(`http://localhost:8080/api/v1/members/all`)
  }
  public getMemberById(id: any):Observable<Member> {
      return this.http.get<Member>(`http://localhost:8080/api/v1/members/${id}`)
  }
  public deleteMemberById(id: any):Observable<any> {
      return this.http.delete(`http://localhost:8080/api/v1/members/${id}`)
  }
  public addMember(member: Member):Observable<Member> {
    return this.http.post<Member>(`http://localhost:8080/api/v1/members/create`, member)
  }
}
