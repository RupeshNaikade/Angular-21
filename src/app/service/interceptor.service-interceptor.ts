import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const interceptorServiceInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('Intercepted request:', req);
  
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer your-token-here')
  });

  
  return next(modifiedReq).pipe(
    tap(event => {
      console.log('Intercepted response:', event);
    }),
    catchError(error => {
      console.error('Error in interceptor:', error);
      return throwError(() => error);
    })
  );
};
