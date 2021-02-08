import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsuarioSistemaModel } from "../model/usuario-sistema.model";
import { LocalstorageUsuarioModel } from "../model/localstorage-usuario.model";
import { LocalstorageUsuarioService } from "./localstorage-usuario.service";

const API_CONFIGURATION = {
    URL_API: "http://localhost:9090",
    URL_USUARIO_SISTEMA: "usuario-sistema"
}

@Injectable()
export class UsuarioSistemaService {

    constructor( private httpClient: HttpClient, public localstorageUsuarioService: LocalstorageUsuarioService) { }

    realizarLogin(usuarioSistemaModel: UsuarioSistemaModel ) {
        return this.httpClient.post(`${API_CONFIGURATION.URL_API}/${API_CONFIGURATION.URL_USUARIO_SISTEMA}`, usuarioSistemaModel, { observe: "response", responseType: "text" });
    }

    verificarLoginSuscesso(authorizationValue: string) {
        let tokenSelecionado = authorizationValue.substring(7);
        let localstorageUsuario: LocalstorageUsuarioModel = {
            token: tokenSelecionado
        };
        this.localstorageUsuarioService.cadastrarLocastorageUsuario(localstorageUsuario);
    }

    sairAplicacao() {
        this.localstorageUsuarioService.removerLocastorageUsuario(null);
    }

}