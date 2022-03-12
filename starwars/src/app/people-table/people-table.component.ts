import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../class/people';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {

  people : People[] = [];

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.peopleService.getAllPeople().subscribe(data => this.people = data.results);
  }

  detail(item: People): void {
  this.router.navigate(['people', item.url])
  }

}
