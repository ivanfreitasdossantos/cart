import { Component, OnInit } from '@angular/core';
import { PedidoMatriculaService } from '../pedido-matricula.service';
import { RouterModule, ActivatedRoute ,Routes, Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhe-solicitacao',
  templateUrl: './detalhe-solicitacao.component.html',
  styleUrls: ['./detalhe-solicitacao.component.css']
})
export class DetalheSolicitacaoComponent implements OnInit {

  solicitacao;
  faEedit = faEdit;

  constructor(private pedidoService : PedidoMatriculaService, private router: Router, private route: ActivatedRoute ) { 

    this.solicitacao = pedidoService.getSolicitacao();
    console.log(this.solicitacao);
  }

  ngOnInit() {
  }

}
