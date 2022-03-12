import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Planet } from '../classes/planet';
import { PlanetsData } from '../interfaces/planets-data';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getAllPlanets(){
  return this.http.get<PlanetsData>(environment.planets);
  }

 // getPlanet(id : number){
   // return this.http.get<Planet>(environment.planets+id);
  //}//

  getPlanetbyUrl(url : string){
    return this.http.get<Planet>(url);
  }

}
