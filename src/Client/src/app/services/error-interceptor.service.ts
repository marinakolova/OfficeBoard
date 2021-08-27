import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private toastrService: ToastrService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        let message = "";

        if (err.status === 401) {
          //refresh token or navigate to login
          message = "Token has expired or you should be logged in";
        } else if (err.status === 404) {
          message = "404 Not Found";
          this.router.navigate(["/404"]);
        } else if (err.status === 400) {
          //some message
          message = "400 Bad Request";
        } else {
          //global message for error
          message = "Unexpected error";
        }

        this.toastrService.error(message);
        return throwError(err);
      }),
    );
  }

}
