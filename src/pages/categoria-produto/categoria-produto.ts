import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaProdutoModel } from '../../model/categoriaproduto.model';
import { CategoriaProdutoService } from '../../service/categoriaproduto.service';

@IonicPage()
@Component({
  selector: 'page-categoria-produto',
  templateUrl: 'categoria-produto.html',
})
export class CategoriaProdutoPage {

  public categoriaProdutoList: CategoriaProdutoModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriaProdutoService: CategoriaProdutoService) { }

  ionViewDidLoad() {
    this.categoriaProdutoService.recuperarCategoriaProduto().subscribe( response => {
      this.categoriaProdutoList = response;
    }, error => { });
  }

}
