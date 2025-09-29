import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteCardWrapperComponent } from './remote-card-wrapper.component';

describe('RemoteCardWrapperComponent', () => {
  let component: RemoteCardWrapperComponent;
  let fixture: ComponentFixture<RemoteCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteCardWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
