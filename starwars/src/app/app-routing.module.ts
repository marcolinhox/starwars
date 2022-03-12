import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { PlanetsTableComponent } from './planets-table/planets-table.component';

const routes: Routes = [
  { path: 'planets', component: PlanetsTableComponent},
  { path: 'people', component: PeopleTableComponent},
  { path: 'planets/:url', component: PlanetsDetailComponent},
  { path: 'people/:url', component: PeopleDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
