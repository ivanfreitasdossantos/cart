import { Component, OnInit } from '@angular/core';
import {  Router,  ParamMap, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router, 
    private pedidoService : PedidoMatriculaService
  ) { }

  passo1: boolean = true;
  passo2: boolean = false;

  model: any = {};
    
  ngOnInit() {
  
  }

  adicionarEndereco() {
      
      this.pedidoService.addSolicitante(this.model);
      this.router.navigate(['/form-matricula', { }])
      console.log("chegou");
 
  } 



}
