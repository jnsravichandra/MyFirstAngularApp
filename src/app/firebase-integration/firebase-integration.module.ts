import { NgModule } from '@angular/core';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

const firebaseIntegration = [
  // Angular Firebase configuration
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAnalytics(() => getAnalytics()),
  provideAuth(() => getAuth()),
  provideDatabase(() => getDatabase()),
  provideFirestore(() => getFirestore()),
  provideFunctions(() => getFunctions()),
  provideMessaging(() => getMessaging()),
  providePerformance(() => getPerformance()),
  provideRemoteConfig(() => getRemoteConfig()),
  provideStorage(() => getStorage())
];

@NgModule({
  
  imports: [firebaseIntegration],
  exports: [firebaseIntegration]
})
export class FirebaseIntegrationModule { }
