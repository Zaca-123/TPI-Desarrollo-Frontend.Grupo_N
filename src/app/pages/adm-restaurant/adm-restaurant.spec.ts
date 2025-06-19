import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRestaurant } from './adm-restaurant';

describe('AdmRestaurant', () => {
  let component: AdmRestaurant;
  let fixture: ComponentFixture<AdmRestaurant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmRestaurant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmRestaurant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
