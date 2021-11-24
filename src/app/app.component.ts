import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'Minimis';
  routeApp: string = 'home';
  screenSize: string ='';

  constructor (
    private router: Router,
    private elementRef: ElementRef,
    public breakpointObserver: BreakpointObserver
  ) {}

  routerApp(routeApp: string) {
    this.routeApp = routeApp; 
  }

  clearRouterApp(): void {
    this.routeApp = '';
  }

  breakpointObserverMethod(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.screenSize = 'x-small';
        //console.log( 'Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
        //console.log( 'Matches Small viewport');
        this.screenSize = 'small';
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        //console.log( 'Matches Medium  viewport');
        this.screenSize = 'medium';
      }
      if (state.breakpoints[Breakpoints.Large]) {
        this.screenSize = 'large';
        //console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.screenSize = 'x-large';
        //console.log( 'Matches XLarge viewport');   
      }
    });
  }

  ngOnInit(): void {
    const currentURL = window.location.href;
    if(currentURL.includes("angular-tour-of-heros")) {
      this.routerApp("angular-tour-of-heros");
    }
    this.breakpointObserverMethod();
  }

}
