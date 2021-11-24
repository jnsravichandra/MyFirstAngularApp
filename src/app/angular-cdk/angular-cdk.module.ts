import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';


const AngularCDKComponents = [
  LayoutModule
];

@NgModule({
  imports: [AngularCDKComponents],
  exports: [AngularCDKComponents]
})
export class AngularCdkModule { }
