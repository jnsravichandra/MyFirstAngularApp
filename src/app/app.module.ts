import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourOfHerosModule } from './tour-of-heros/tour-of-heros.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialAngularModule } from './material-angular/material-angular.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { PasswordManagerModule } from './password-manager/password-manager.module';
import { FirebaseIntegrationModule } from './firebase-integration/firebase-integration.module';
import { AngularCdkModule } from './angular-cdk/angular-cdk.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialAngularModule,
    AngularCdkModule,
    TourOfHerosModule,
    BrowserAnimationsModule,
    PasswordManagerModule,
    FirebaseIntegrationModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
