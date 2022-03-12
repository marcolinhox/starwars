import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from '../classes/planet';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.css']
})
export class PlanetsTableComponent implements OnInit {

   planets: Planet[] = [];

  constructor(private planetService: PlanetsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.planetService.getAllPlanets().subscribe(data => this.planets = data.results)
  }

  detail(item: Planet){
    this.router.navigate(['planets', item.url])
  }
}
