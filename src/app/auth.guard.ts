import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StockageeService } from './services/StockageService';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
     constructor( private routeur:Router,private serv:StockageeService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let test=this.serv.islogged()
    console.log("le ddddddddddddddddddddddddddddddddddd")
    console.log(test)
    if(test){
      return true
    }
      return this.routeur.navigate(['premiere']);
  }
}
