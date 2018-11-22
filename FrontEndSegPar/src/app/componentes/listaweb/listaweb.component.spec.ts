import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListawebComponent } from './listaweb.component';

describe('ListawebComponent', () => {
  let component: ListawebComponent;
  let fixture: ComponentFixture<ListawebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListawebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListawebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
