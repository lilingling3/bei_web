import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('user')) {return true; } else { return false;}

}

// canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     // return this.canActivate();
//   }

}
