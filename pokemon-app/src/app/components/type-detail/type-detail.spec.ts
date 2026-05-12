import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDetail } from './type-detail';

describe('TypeDetail', () => {
  let component: TypeDetail;
  let fixture: ComponentFixture<TypeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
