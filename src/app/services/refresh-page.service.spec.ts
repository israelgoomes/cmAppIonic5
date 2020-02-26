import { TestBed } from '@angular/core/testing';

import { RefreshPageService } from './refresh-page.service';

describe('RefreshPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefreshPageService = TestBed.get(RefreshPageService);
    expect(service).toBeTruthy();
  });
});
