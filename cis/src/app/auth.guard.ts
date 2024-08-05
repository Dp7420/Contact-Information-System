
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AdminsService } from "./Services/admins.service";
import { Injectable, inject } from "@angular/core";
import { UserDetailsService } from "./Services/user-details.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    adminService:AdminsService=inject(AdminsService);
    userService:UserDetailsService=inject(UserDetailsService);
    router:Router=inject(Router);

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean>
    {
        if(this.adminService.IsAuthentication()){
            return true;
        }else if( this.userService.IsAuthentication()){
            return true
        }else{
            this.router.navigate(['/admin']);
            return false;
        }
    }
}
