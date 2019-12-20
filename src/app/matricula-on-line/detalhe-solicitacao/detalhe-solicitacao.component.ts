import { Component, OnInit } from '@angular/core';
import { PedidoMatriculaService } from '../pedido-matricula.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhe-solicitacao',
  templateUrl: './detalhe-solicitacao.component.html',
  styleUrls: ['./detalhe-solicitacao.component.css']
})
export class DetalheSolicitacaoComponent implements OnInit {

  solicitacao;
  faEedit = faEdit;

  constructor(private pedidoService : PedidoMatriculaService) { 

    this.solicitacao = pedidoService.getSolicitacao();
    console.log(this.solicitacao);
  }

  ngOnInit() {
  }

}
