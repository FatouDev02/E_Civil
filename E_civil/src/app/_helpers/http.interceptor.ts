import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {  switchMap } from 'rxjs/operators';

import { StorageService } from '../Services/storage.service';
import { AuthService } from '../Services/auth.service';
import { throwError } from 'rxjs';
import { EventData } from '../_shared/event.class';
import { EventBusService } from '../_shared/event-bus.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService) {}



 


  //interceptiond des requêtes ou des réponses avant qu'elles ne soient traitées par la intercept()méthode.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });
//gérer 401l'état de la réponse de l'intercepteur (sauf la réponse de la /signindemande).
    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('/ecivil/user/signin') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
//– si l'utilisateur est connecté, appelez la AuthService.refreshToken()méthode.

      if (this.storageService.isLoggedIn()) {
        return this.authService.refreshToken().pipe(
          switchMap(() => {
            this.isRefreshing = false;

            return next.handle(request);
          }),
          catchError((error) => {
            this.isRefreshing = false;
//l'API renvoie une réponse avec 403erreur (le jeton d'actualisation a expiré), émettre 'logout'un événement.
            if (error.status == '403') {
              this.eventBusService.emit(new EventData('logout', null));
            }

            return throwError(() => error);
          })
        );
      }
    }

    return next.handle(request);
  }
}









export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];