import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttonadd',
  templateUrl: './buttonadd.component.html',
  styleUrls: ['./buttonadd.component.css'],
})
export class ButtonaddComponent {
  @Input() contador: number = 0;
  @Output()
  onAdd: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  aumentarContador() {
    if (this.contador >= 0) {
      this.contador++;
      this.onAdd.emit(this.contador);
    }
  }
}
