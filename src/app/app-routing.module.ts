import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './tour-of-heros/dashboard/dashboard.component';
import { HeroDetailComponent } from './tour-of-heros/hero-detail/hero-detail.component';
import { HerosComponent } from './tour-of-heros/heros/heros.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'angular-tour-of-heros/heros', component: HerosComponent},
  {path: 'angular-tour-of-heros/dashboard', component: DashboardComponent},
  {path: 'angular-tour-of-heros/detail/:id',component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
