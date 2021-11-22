import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-tour-of-heros',
  templateUrl: './angular-tour-of-heros.component.html',
  styleUrls: ['./angular-tour-of-heros.component.css']
})
export class AngularTourOfHerosComponent implements OnInit {

  title: String = 'Tour of Heros';

  constructor() { }

  ngOnInit(): void {
  }

}
