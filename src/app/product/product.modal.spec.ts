import { TestBed } from '@angular/core/testing';

import { ProductModal } from './product.modal';

describe('ProductModal', () => {
  let service: ProductModal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductModal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
