import { NgModule } from '@angular/core';
import { Solicitacao } from './solicitacao/solicitacao.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DetalheSolicitacaoComponent } from './detalhe-solicitacao/detalhe-solicitacao.component';

@NgModule({
    declarations:[Solicitacao, DetalheSolicitacaoComponent],
    imports: [CommonModule, FormsModule],
    exports:[Solicitacao]
})
export class MatriculaOnLineModule{

}