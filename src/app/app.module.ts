import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Solicitacao } from './matricula-on-line/solicitacao/solicitacao.component';
import { MatriculaOnLineModule } from './matricula-on-line/matricula-on-line.module';
import { Servicos } from './servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    Servicos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatriculaOnLineModule,
    RouterModule.forRoot([
      { path: '', component: Servicos },
      { path: 'matricula-on-line', component: Solicitacao }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
