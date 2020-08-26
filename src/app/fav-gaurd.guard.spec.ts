import { TestBed, async, inject } from '@angular/core/testing';

import { FavGaurdGuard } from './fav-gaurd.guard';

describe('FavGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavGaurdGuard]
    });
  });

  it('should ...', inject([FavGaurdGuard], (guard: FavGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
