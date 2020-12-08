import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {BuyAccComponent} from '../components/buy-acc/buy-acc.component';

@Injectable({
  providedIn: 'root'
})

export class DeactivateGuard implements CanDeactivate<BuyAccComponent> {
  canDeactivate(
    component: BuyAccComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('There are unsaved information. Continue?');
  }

}
