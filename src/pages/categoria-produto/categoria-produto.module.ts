import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaProdutoPage } from './categoria-produto';

@NgModule({
  declarations: [
    CategoriaProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaProdutoPage),
  ],
})
export class CategoriaProdutoPageModule {}
