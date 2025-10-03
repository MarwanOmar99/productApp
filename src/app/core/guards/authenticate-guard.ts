import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Global } from '../../services/global';

export const authenticateGuard: CanActivateFn = (route, state) => {
  const isLogin = inject(Global);
  return isLogin.isLogIn;
};
