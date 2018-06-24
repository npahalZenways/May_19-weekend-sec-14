import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { MyService } from "./services/my-first-service";

@Injectable()
export class AuthGuard implements CanActivate{
    // constructor(private serv: MyService){}
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        return true;
    }
}