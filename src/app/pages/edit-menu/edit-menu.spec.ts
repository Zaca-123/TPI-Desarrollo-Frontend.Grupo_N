import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenu } from './edit-menu';

describe('EditMenu', () => {
  let component: EditMenu;
  let fixture: ComponentFixture<EditMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
