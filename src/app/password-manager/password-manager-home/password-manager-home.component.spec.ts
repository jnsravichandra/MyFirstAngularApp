import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordManagerHomeComponent } from './password-manager-home.component';

describe('PasswordManagerHomeComponent', () => {
  let component: PasswordManagerHomeComponent;
  let fixture: ComponentFixture<PasswordManagerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordManagerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordManagerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
