import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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

  ngOnInit() {
  
  }

}
