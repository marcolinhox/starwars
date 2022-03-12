import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';

import { PlanetsTableComponent } from './planets-table/planets-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';

import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { FooterComponent } from './footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetsTableComponent,
    PlanetsDetailComponent,
   
    PeopleDetailComponent,
        PeopleTableComponent,
        FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
