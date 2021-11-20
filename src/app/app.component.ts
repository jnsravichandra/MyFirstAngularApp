import { AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title: String = 'Minimis';
  routeApp: string = 'home';

  constructor (
    private router: Router,
    private elementRef: ElementRef
  ) {}

  routerApp(routeApp: string) {
    this.routeApp = routeApp; 
  }

  clearRouterApp(): void {
    this.routeApp = '';
  }

  ngOnInit(): void {
    const currentURL = window.location.href;
    if(currentURL.includes("angular-tour-of-heros")) {
      this.routerApp("angular-tour-of-heros");
    }
  }

}
