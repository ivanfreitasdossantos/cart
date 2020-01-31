import { NgModule } from '@angular/core';
import { Solicitacao } from './solicitacao/solicitacao.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DetalheSolicitacaoComponent } from './detalhe-solicitacao/detalhe-solicitacao.component';
import { MzCardModule } from 'ngx-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormMatriculaComponent } from './form-matricula/form-matricula.component';
import { RouterModule } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations:[
        Solicitacao, 
        DetalheSolicitacaoComponent, 
        FormMatriculaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule, 
        FormsModule,
        MzCardModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MatInputModule,
        MatSelectModule
    ],
    exports:[
        Solicitacao, 
        DetalheSolicitacaoComponent, 
        FormMatriculaComponent]
})
export class MatriculaOnLineModule{

}