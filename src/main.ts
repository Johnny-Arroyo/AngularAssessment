import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // ✅ Import global app configuration

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));


