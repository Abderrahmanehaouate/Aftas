import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  let isAthenicated = localStorage.getItem('isAuthentificated');
  if (isAthenicated === 'true') {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
