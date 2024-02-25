import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hunting} from "../models/hunting.model";

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  constructor(private http:HttpClient) { }

  public getAllHuntings(page: number = 1, size: number = 10): Observable<Array<Hunting>> {
    return this.http.get<Array<Hunting>>(`http://localhost:8080/api/v1/huntings?page=${page}&size=${size}`)
  }
  public getHuntingById(id: any):Observable<Hunting> {
      return this.http.get<Hunting>(`http://localhost:8080/api/v1/huntings/${id}`)
  }
  public deleteHuntingById(id: any):Observable<any> {
      return this.http.delete(`http://localhost:8080/api/v1/huntings/${id}`)
  }
  public addHunting(hunting: Hunting):Observable<Hunting> {
    return this.http.post<Hunting>(`http://localhost:8080/api/v1/huntings/create`, hunting)
  }
}
