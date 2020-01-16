import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';
import { PedidoMatriculaService } from '../pedido-matricula.service';


@Component({
  selector: 'solicitacao-matricula',
  templateUrl: 'solicitacao.component.html',
  styleUrls: ['solicitacao.component.css']
})
export class Solicitacao implements OnInit{

  title = 'cartorio-facil-app';
  estados = ['SP', 'DF', 'MG'];
  pedido: any = []; 
  imovel: any = [];


  constructor(
    private route: ActivatedRoute, private pedidoService : PedidoMatriculaService, private router: Router 
  ) { }

  passo1: boolean = true;
  passo2: boolean = false;

  model: any = {};
    
  ngOnInit() {
  
  }



  adicionarEndereco() {
      
      this.passo1 = false;
      this.passo2 = true;
      this.pedidoService.addSolicitante(this.model);
      
      this.router.navigate(['/form-matricula', { }]);
  } 

}
