import { Component, OnInit } from '@angular/core';
import {  Router,  ParamMap, ActivatedRoute } from '@angular/router';
import { PedidoMatriculaService } from '../pedido-matricula.service';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-matricula',
  templateUrl: './form-matricula.component.html',
  styleUrls: ['./form-matricula.component.css']
})
export class FormMatriculaComponent implements OnInit {


  cidade = new FormControl('',[Validators.required]); 
  endereco = new FormControl('',[Validators.required]);
  estado = new FormControl('',[Validators.required]);
  cartorioRegistro = new FormControl('',[Validators.required]);
  numeroMatricula = new FormControl('',[Validators.required]);

  estados = ['SP', 'DF', 'MG'];
  imovel: any = {estado:""};

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
