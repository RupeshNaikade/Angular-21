import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient,withInterceptors } from '@angular/common/http';
import { interceptorServiceInterceptor } from './service/interceptor.service-interceptor';
import { Subject } from 'rxjs';

export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([interceptorServiceInterceptor])
    ),
  ]
};
