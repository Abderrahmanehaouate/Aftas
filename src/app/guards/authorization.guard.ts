import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

export const authorizationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authenticationService = inject(AuthenticationService);
  let profile = JSON.parse(localStorage.getItem('roles')!);
  console.log(profile);
  if (profile.includes('MANAGER')){
    console.log('MANAGER here');
    return true;
  } else {
    router.navigateByUrl('/not-authorized');
    return false;
  }
};
