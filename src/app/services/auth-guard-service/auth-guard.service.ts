import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { configHelper } from '../../configHelper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{


  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);

    // let authInfo = {
    //   authenticated: false
    // };

    if (!localStorage.getItem(configHelper.storageKeys.user)) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
