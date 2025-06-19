import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProduct } from './adm-product';

describe('AdmProduct', () => {
  let component: AdmProduct;
  let fixture: ComponentFixture<AdmProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
