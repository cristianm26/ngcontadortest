import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonaddComponent } from './buttonadd.component';

describe('ButtonaddComponent', () => {
  let component: ButtonaddComponent;
  let fixture: ComponentFixture<ButtonaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonaddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe emitir el valor de 1', () => {
    let nuevoContador = 0;
    component.onAdd.subscribe((contador) => {
      nuevoContador = contador;
    });
    component.aumentarContador();

    expect(nuevoContador).toBe(1);
  });
});
