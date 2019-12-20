import { Component, OnInit } from '@angular/core';
import {  Router,  ParamMap, ActivatedRoute } from '@angular/router';
import { PedidoMatriculaService } from '../pedido-matricula.service';

@Component({
  selector: 'app-form-matricula',
  templateUrl: './form-matricula.component.html',
  styleUrls: ['./form-matricula.component.css']
})
export class FormMatriculaComponent implements OnInit {

  estados = ['SP', 'DF', 'MG'];
  imovel: any = [];

  constructor(
    private pedidoService: PedidoMatriculaService , 
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  
  finalizar(){
    this.pedidoService.addList(this.imovel);
    this.router.navigate(['/detalhe-solicitacao', { }])
  }

}
