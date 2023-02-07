import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StorageService } from 'src/app/Services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private storage: StorageService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const user = this.storage.getUser();
    if (user && (user.roles.includes('USER') || user.roles.includes('Agent'))) {
      return true;
    } else {
      this.route.navigate(['/']);
      setInterval(() => {
        location.reload();
      }, 1000);
      return false;
    }
  }
}
