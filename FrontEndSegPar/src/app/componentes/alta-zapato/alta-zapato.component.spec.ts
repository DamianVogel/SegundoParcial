import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaZapatoComponent } from './alta-zapato.component';

describe('AltaZapatoComponent', () => {
  let component: AltaZapatoComponent;
  let fixture: ComponentFixture<AltaZapatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaZapatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaZapatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
