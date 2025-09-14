import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fallsback } from './fallsback';

describe('Fallsback', () => {
  let component: Fallsback;
  let fixture: ComponentFixture<Fallsback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fallsback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fallsback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
