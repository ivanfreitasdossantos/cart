import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoMatriculaService {

  solicitante;
  listaImoveis: Array<any> = [];

  constructor() { }

  addSolicitante( solicitante: any ){
    this.solicitante = solicitante;
    console.log('solicitante add');
  }

  addList(imovel:any){

   this.listaImoveis.push(imovel);
   this.solicitante.listaImoveis = this.listaImoveis; 
   console.log(this.solicitante);

  }

  getSolicitacao(){
    return this.solicitante;
  }

}
