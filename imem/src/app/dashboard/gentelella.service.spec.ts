/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GentelellaService } from './gentelella.service';

describe('GentelellaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GentelellaService]
    });
  });

  it('should ...', inject([GentelellaService], (service: GentelellaService) => {
    expect(service).toBeTruthy();
  }));
});
