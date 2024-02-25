import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";
import {Ranking} from "../models/ranking.model";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private Http:HttpClient) { }

  // public getAllCompetitions(page: number = 1, size: number = 10): Observable<Array<Competition>> {
  //   return this.Http.get<Array<Competition>>(`http://localhost:8080/api/v1/competitions?page=${page}&size=${size}`)
  // }
  public getAllCompetitions(): Observable<Array<Competition>> {
    return this.Http.get<Array<Competition>>(`http://localhost:8080/api/v1/competitions`)
  }
  public getCompetitionById(id: any):Observable<Competition> {
      return this.Http.get<Competition>(`http://localhost:8080/api/v1/competitions/${id}`)
  }

  public deleteCompetitionById(id: any):Observable<any> {
      return this.Http.delete(`http://localhost:8080/api/v1/competitions/${id}`)
  }
  public addCompetition(competition: {
    date: string;
    numberOfParticipants: number;
    startTime: string;
    location: string;
    endTime: string;
    amount: number
  }):Observable<Competition> {
    return this.Http.post<Competition>(`http://localhost:8080/api/v1/competitions/create`, competition)
  }

    public registerMember(ranking: Ranking):Observable<any> {
        return this.Http.post(`http://localhost:8080/api/v1/rankings/create`, ranking)
    }



}
