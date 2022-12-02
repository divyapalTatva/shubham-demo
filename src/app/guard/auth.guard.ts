import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate,CanLoad {
url:any
  constructor(private ar:Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('user') != (null)){
      this.url=window.location.href.split('4200/')
      // console.warn(window.location.href)
      console.warn(this.url[1])
      return true;
    }
    else {
      this.ar.navigate(['']);
      console.warn()
      return false;
    }
  }

  canLoad(route: Route,x:UrlSegment[]): boolean {
    debugger
    this.url=window.location.href.split('4200/')
    if(this.url[1]==='add'||this.url[1]==='list'){
      console.warn(route.path);
      return true;
    }
    else {
      
      return false;
    }
  }
}