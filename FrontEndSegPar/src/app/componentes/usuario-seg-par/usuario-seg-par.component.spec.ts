import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSegParComponent } from './usuario-seg-par.component';

describe('UsuarioSegParComponent', () => {
  let component: UsuarioSegParComponent;
  let fixture: ComponentFixture<UsuarioSegParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioSegParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioSegParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
