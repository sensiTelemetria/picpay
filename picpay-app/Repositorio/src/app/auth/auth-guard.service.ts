import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthServiceService} from './auth-service.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private auth: AuthServiceService) {}
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return  this.auth.isAuthenticated();
  }
}
