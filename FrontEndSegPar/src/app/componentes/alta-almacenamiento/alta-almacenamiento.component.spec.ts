import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAlmacenamientoComponent } from './alta-almacenamiento.component';

describe('AltaAlmacenamientoComponent', () => {
  let component: AltaAlmacenamientoComponent;
  let fixture: ComponentFixture<AltaAlmacenamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaAlmacenamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAlmacenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
