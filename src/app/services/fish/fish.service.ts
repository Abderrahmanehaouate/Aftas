import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fish} from "../../models/fish.model";

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private http:HttpClient) {
  }

  public getAllFishes(): Observable<Array<Fish>> {
    return this.http.get<Array<Fish>>(`http://localhost:8080/api/v1/fishes`)
  }
  public getFishById(id: any):Observable<Fish> {
      return this.http.get<Fish>(`http://localhost:8080/api/v1/fishes/${id}`)
  }
  public deleteFishById(id: any):Observable<any> {
      return this.http.delete(`http://localhost:8080/api/v1/fishes/${id}`)
  }
  public addFish(fish: Fish):Observable<Fish> {
    return this.http.post<Fish>(`http://localhost:8080/api/v1/fishes/create`, fish)
  }
}
