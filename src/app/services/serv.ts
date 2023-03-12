import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class CorsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const corsReq = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', '*'),
    });
    return next.handle(corsReq);
  }
}
