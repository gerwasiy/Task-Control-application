import { TestBed } from '@angular/core/testing';

import { TaskCardService } from './task-card.service';

describe('TaskCardService', () => {
  let service: TaskCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
