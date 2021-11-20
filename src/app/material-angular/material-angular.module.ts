import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  CommonModule
  //MatButtonModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialAngularModule { }