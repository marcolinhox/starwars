import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../class/people';
import { Planet } from '../classes/planet';
import { PeopleService } from '../services/people.service';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  people: People = new People();
  planet: Planet = new Planet();

  constructor(private route: ActivatedRoute,
    private peopleService: PeopleService,
    private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.peopleService.getPeople(params['url']).subscribe(people =>{
         this.people = people
        this.planetsService.getPlanetbyUrl(people.homeworld).subscribe
        (planet => this.planet = planet)
    });
  });
}
}
