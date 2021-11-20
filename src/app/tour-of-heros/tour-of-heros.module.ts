import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { AngularTourOfHerosComponent } from '../angular-tour-of-heros/angular-tour-of-heros.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HerosComponent } from '../heros/heros.component';
import { MessagesComponent } from '../messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../shared/in-memory-data.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

const componentList = [
  AngularTourOfHerosComponent,
  HerosComponent,
  HeroDetailComponent,
  MessagesComponent,
  DashboardComponent,
  HeroSearchComponent
];

@NgModule({
  declarations: [
    componentList
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [
    componentList
  ]
})
export class TourOfHerosModule { }
