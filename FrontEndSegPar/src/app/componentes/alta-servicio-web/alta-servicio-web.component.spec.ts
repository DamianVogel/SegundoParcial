import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaServicioWebComponent } from './alta-servicio-web.component';

describe('AltaServicioWebComponent', () => {
  let component: AltaServicioWebComponent;
  let fixture: ComponentFixture<AltaServicioWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaServicioWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaServicioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
