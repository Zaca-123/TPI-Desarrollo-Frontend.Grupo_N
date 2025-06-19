import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMenu } from './adm-menu';

describe('AdmMenu', () => {
  let component: AdmMenu;
  let fixture: ComponentFixture<AdmMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
