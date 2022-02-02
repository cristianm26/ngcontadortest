import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { ButtonaddComponent } from '../buttonadd/buttonadd.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear el texto counter: 0 ', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toEqual('Contador: 0');
  });

  it('valor del contador es 0', () => {
    const counter = new CounterComponent();
    expect(counter.contador).toBe(0);
  });
});

describe('Integration Testing', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonaddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('evento click', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const counterValue = compiled.querySelector('h1')!;
    const btnAdd: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#add');
    btnAdd.click();
    fixture.detectChanges();
    expect(counterValue.textContent).toEqual('Contador: 1');
  });
});
