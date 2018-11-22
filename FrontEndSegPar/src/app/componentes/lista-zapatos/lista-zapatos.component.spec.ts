import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZapatosComponent } from './lista-zapatos.component';

describe('ListaZapatosComponent', () => {
  let component: ListaZapatosComponent;
  let fixture: ComponentFixture<ListaZapatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaZapatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZapatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
