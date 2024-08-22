import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: 'AIzaSyC_X1PHZl3rJFHf_BPuW4QwUokduslP2zQ',
  authDomain: 'simple-crm-bf359.firebaseapp.com',
  projectId: 'simple-crm-bf359',
  storageBucket: 'simple-crm-bf359.appspot.com',
  messagingSenderId: '672550714310',
  appId: '1:672550714310:web:d344f45f79f6f8717d90c7',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
