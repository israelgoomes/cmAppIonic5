import { TestBed } from '@angular/core/testing';

import { MachineTextService } from './machine-text.service';

describe('MachineTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MachineTextService = TestBed.get(MachineTextService);
    expect(service).toBeTruthy();
  });
});
