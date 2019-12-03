




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'servicos',
  templateUrl: 'servicos.component.html',
  styleUrls: ['servicos.component.css']
})
export class Servicos implements OnInit {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
  }
}
