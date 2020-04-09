import { TestBed } from '@angular/core/testing';

import { ProjetoService } from './projeto.service';

describe('ServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetoService = TestBed.get(ProjetoService);
    expect(service).toBeTruthy();
  });
});
