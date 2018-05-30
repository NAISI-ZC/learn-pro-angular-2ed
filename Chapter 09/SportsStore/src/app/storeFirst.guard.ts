import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StoreFirstGuard implements CanActivate {
    private firstNavigation = true;

    constructor(private router: Router) {
    }

    canActivate(router: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (router.component !== StoreComponent) {
                this.router.navigateByUrl('/');
                return false;
            }
        }
        return true;
    }
}
