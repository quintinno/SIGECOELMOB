import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).catch( (error, caught) => {
            let erroRetorno = {
                mesagemErroOriginal: error.error,
                mesagemErroTraduzida: "Ocorreu um erro ao tentar realizar essa operação"
            }
            if(error != null) {
                erroRetorno.mesagemErroOriginal += error.message;
            } else {
                error += error.message;
            }
            console.log(erroRetorno);
            return Observable.throw(erroRetorno);
        }) as any;
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}