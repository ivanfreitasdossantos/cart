import { TestBed } from '@angular/core/testing';

import { PedidoMatriculaService } from './pedido-matricula.service';

describe('PedidoMatriculaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedidoMatriculaService = TestBed.get(PedidoMatriculaService);
    expect(service).toBeTruthy();
  });
});
