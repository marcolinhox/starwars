import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../class/people';
import { Planet } from '../classes/planet';
import { PeopleService } from '../services/people.service';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {

  planet: Planet = new Planet();
  residents: People[] = [];

  constructor(private route: ActivatedRoute,
    private planetsService: PlanetsService,
    private peopleService: PeopleService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.planetsService.getPlanetbyUrl(params['url']).subscribe(planet => {
        this.planet = planet;
        planet.residents.forEach(urlResident => {
        this.peopleService.getPeople(urlResident).subscribe(people =>{
          this.residents.push(people);
        })
        })
      });
    });
  }

}
