import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTourOfHerosComponent } from './angular-tour-of-heros.component';

describe('AngularTourOfHerosComponent', () => {
  let component: AngularTourOfHerosComponent;
  let fixture: ComponentFixture<AngularTourOfHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTourOfHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTourOfHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
