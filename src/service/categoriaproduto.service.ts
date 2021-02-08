import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { CategoriaProdutoModel } from "../model/categoriaproduto.model";

const API_CONFIGURATION = {
    URL_API: "http://localhost:9090",
    URL_CATEGORIA_PRODUTO: "categoria-produto"
}

@Injectable()
export class CategoriaProdutoService {

    constructor( private httpClient: HttpClient ) { }

    recuperarCategoriaProduto() : Observable<CategoriaProdutoModel[]> {
        return this.httpClient.get<CategoriaProdutoModel[]>(`${API_CONFIGURATION.URL_API}/${API_CONFIGURATION.URL_CATEGORIA_PRODUTO}`);
    }

}