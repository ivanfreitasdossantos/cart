import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';


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
  listaImoveis: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  passo1: boolean = true;
  passo2: boolean = false;

  model: any = {};
    
  ngOnInit() {
  
  }

  adicionarEndereco() {
      
      this.passo1 = false;
      this.passo2 = true;
   
      console.log("chegou");
      console.log(this.model);
      console.log(this.passo2); 
  } 


  finalizar(){
    this.listaImoveis.push(this.imovel);
    this.model.listaPedidos = this.listaImoveis;
    console.log(this.model);
  }



}
