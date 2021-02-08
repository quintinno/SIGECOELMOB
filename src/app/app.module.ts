import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaProdutoService } from '../service/categoriaproduto.service';
import { ErrorInterceptorProvider } from '../interceptor/error.interceptor';
import { UsuarioSistemaService } from '../service/usuario-sistema.service';
import { LocalstorageUsuarioService } from '../service/localstorage-usuario.service';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaProdutoService,
    ErrorInterceptorProvider,
    UsuarioSistemaService,
    LocalstorageUsuarioService
  ]
})
export class AppModule {}
