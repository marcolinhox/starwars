import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { People } from '../class/people';
import { PeopleData } from '../interfaces/people-data';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getAllPeople(){
    return this.http.get<PeopleData>(environment.people)
  }

  getPeople(urlApi: string){
   return this.http.get<People>(urlApi)
  }
}
