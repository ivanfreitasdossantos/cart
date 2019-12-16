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
  constructor(
    private route: ActivatedRoute,
  ) { }

  passo1: boolean = true;
  passo2: boolean = false;

  nomeSolicitante: string = '';
  email: string = '';
  celular: number = 0;

  objCadastro: any = {};
    
  ngOnInit() {
  
  }

  adicionarEndereco() {
      
      this.passo1 = false;
      this.passo2 = true;
      this.objCadastro.nomeSolicitante = this.nomeSolicitante;
      this.objCadastro.email = this.email;
      this.objCadastro.celular =  this.celular;
      this.nomeSolicitante
      console.log("chegou");
      console.log(this.passo1);
      console.log(this.passo2); 
  } 



}
