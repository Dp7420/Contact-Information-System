import { HttpInterceptor } from "@angular/common/http";
import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class Jwtinterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem('token');
        if(localStorage.getItem('token')){
          token = token.replace(/^"|"$/g,'');
        }     
    
        if (token) {
          const cloned = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
          });
    
          return next.handle(cloned);
        } else {
          return next.handle(req);
        }
      }
}
