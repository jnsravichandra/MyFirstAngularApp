import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { PasswordManagerHomeComponent } from './password-manager-home/password-manager-home.component';

const componentList = [
  PasswordManagerHomeComponent
];

@NgModule({
  declarations: [componentList],
  imports: [
    CommonModule,
    MaterialAngularModule
  ],
  exports: [componentList]
})
export class PasswordManagerModule { }
