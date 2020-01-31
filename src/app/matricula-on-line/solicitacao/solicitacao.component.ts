import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';
import { PedidoMatriculaService } from '../pedido-matricula.service';
import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'solicitacao-matricula',
  templateUrl: 'solicitacao.component.html',
  styleUrls: ['solicitacao.component.css']
})
export class Solicitacao implements OnInit{

  title = 'cartorio-facil-app';
  estados = ['SP', 'DF', 'MG'];

  nome = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  celular = new FormControl('', [Validators.required]);


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
