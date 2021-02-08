import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { UsuarioSistemaModel } from '../../model/usuario-sistema.model';
import { UsuarioSistemaService } from '../../service/usuario-sistema.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarioSistema: UsuarioSistemaModel = {
    usuario: "",
    senha: ""
  }

  constructor(public navController: NavController, public menu: MenuController, public usuarioSistemaService: UsuarioSistemaService) { }

  public realizarLogin() {
    // this.usuarioSistemaService.realizarLogin(this.usuarioSistema).subscribe( response => {
    //   console.log(response.headers.get("Authorization"));
    //   console.log(response);
    //   this.usuarioSistemaService.verificarLoginSuscesso(response.headers.get("Authorization"));
    //   this.navController.setRoot("CategoriaProdutoPage");
    // }, error => { });
    if(this.usuarioSistema.usuario == "administrador" && this.usuarioSistema.senha == "administrador") {
      this.navController.setRoot("CategoriaProdutoPage");
    } else {
      console.log("Erro ao tentar autenticar no aplicativo!");
    }
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
