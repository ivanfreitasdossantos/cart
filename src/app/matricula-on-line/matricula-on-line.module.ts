import { NgModule } from '@angular/core';
import { Solicitacao } from './solicitacao/solicitacao.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DetalheSolicitacaoComponent } from './detalhe-solicitacao/detalhe-solicitacao.component';
import { MzCardModule } from 'ngx-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormMatriculaComponent } from './form-matricula/form-matricula.component';

@NgModule({
    declarations:[Solicitacao, DetalheSolicitacaoComponent, FormMatriculaComponent],
    imports: [
        CommonModule, 
        FormsModule,
        MzCardModule,
        BrowserAnimationsModule,
        FontAwesomeModule
    ],
    exports:[Solicitacao]
})
export class MatriculaOnLineModule{

}