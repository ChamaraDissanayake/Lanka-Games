import { TestBed } from '@angular/core/testing';

import { LankaGamesService } from './lanka-games.service';

describe('LankaGamesService', () => {
  let service: LankaGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LankaGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
