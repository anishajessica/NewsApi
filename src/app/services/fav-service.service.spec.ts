import { TestBed } from '@angular/core/testing';

import { FavServiceService } from './fav-service.service';

describe('FavServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavServiceService = TestBed.get(FavServiceService);
    expect(service).toBeTruthy();
  });
});
