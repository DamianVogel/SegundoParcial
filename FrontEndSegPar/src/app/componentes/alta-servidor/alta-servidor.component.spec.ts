import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaServidorComponent } from './alta-servidor.component';

describe('AltaServidorComponent', () => {
  let component: AltaServidorComponent;
  let fixture: ComponentFixture<AltaServidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaServidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
