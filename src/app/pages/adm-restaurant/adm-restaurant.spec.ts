import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { AdmRestaurant } from './adm-restaurant';

describe('AdmRestaurant', () => {
  let component: AdmRestaurant;
  let fixture: ComponentFixture<AdmRestaurant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AdmRestaurant,
        HttpClientTestingModule,
        FormsModule
      ]
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
