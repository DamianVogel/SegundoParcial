import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaBaseComponent } from './alta-base.component';

describe('AltaBaseComponent', () => {
  let component: AltaBaseComponent;
  let fixture: ComponentFixture<AltaBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
