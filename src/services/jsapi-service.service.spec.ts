import { TestBed } from '@angular/core/testing';

import { JsapiServiceService } from './jsapi-service.service';

describe('JsapiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsapiServiceService = TestBed.get(JsapiServiceService);
    expect(service).toBeTruthy();
  });
});
