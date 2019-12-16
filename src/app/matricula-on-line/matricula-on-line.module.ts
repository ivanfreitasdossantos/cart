import { NgModule } from '@angular/core';
import { Solicitacao } from './solicitacao/solicitacao.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@NgModule({
    declarations:[Solicitacao],
    imports: [CommonModule, FormsModule],
    exports:[Solicitacao]
})
export class MatriculaOnLineModule{

}