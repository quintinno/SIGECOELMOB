import { Injectable } from "@angular/core";
import { LOCALSTORAGE } from "../configuration/localstorage.condifuration";
import { LocalstorageUsuarioModel } from "../model/localstorage-usuario.model";

@Injectable()
export class LocalstorageUsuarioService {

    constructor() { }

    cadastrarLocastorageUsuario(localstorageUsuario: LocalstorageUsuarioModel) {
        let localstorage = localStorage.getItem(LOCALSTORAGE.localstorageUsuario);
        if(localstorage == null) {
            return null;
        } else {
            return JSON.parse(localstorage);
        }
    }

    recuperarLocastorageUsuario(localstorageUsuario: LocalstorageUsuarioModel) {
        if(localstorageUsuario == null) {
            localStorage.removeItem(LOCALSTORAGE.localstorageUsuario);
        } else {
            localStorage.setItem(LOCALSTORAGE.localstorageUsuario, JSON.stringify(localstorageUsuario));
        }
    }

    removerLocastorageUsuario(localstorageUsuario: LocalstorageUsuarioModel) {
        if(localstorageUsuario == null) {
            localStorage.removeItem(LOCALSTORAGE.localstorageUsuario);
        }
    }

}