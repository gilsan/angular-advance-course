import { TestBed, inject } from '@angular/core/testing';

import { LessonsService } from './lessons.service';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonsService]
    });
  });

  it('should be created', inject([LessonsService], (service: LessonsService) => {
    expect(service).toBeTruthy();
  }));
});