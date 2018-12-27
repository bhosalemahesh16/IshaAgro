import { TestBed } from '@angular/core/testing';

import { AddstateService } from './addstate.service';

describe('AddstateService', () => {
  beforeEach(() =>{ TestBed.configureTestingModule({
    providers:[AddstateService]
  });
});

  it('should be created', () => {
    const service: AddstateService = TestBed.get(AddstateService);
    expect(service).toBeTruthy();
  });
});



