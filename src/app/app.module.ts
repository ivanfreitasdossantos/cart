import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Solicitacao } from './matricula-on-line/solicitacao/solicitacao.component';
import { MatriculaOnLineModule } from './matricula-on-line/matricula-on-line.module';
import { Servicos } from './servicos/servicos.component';
import { CommonModule } from '@angular/common'; 
import { DetalheSolicitacaoComponent } from './matricula-on-line/detalhe-solicitacao/detalhe-solicitacao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormMatriculaComponent } from './matricula-on-line/form-matricula/form-matricula.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Servicos
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    MatriculaOnLineModule,
    RouterModule.forRoot([
      { path: '', component: Servicos },
      { path: 'matricula-on-line', component: Solicitacao },
      { path: 'form-matricula', component:  FormMatriculaComponent},
      { path: 'detalhe-solicitacao', component: DetalheSolicitacaoComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
