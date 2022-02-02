import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css'],
})
export class ButtonDisComponent {
  @Input() contador: number = 0;
  @Output()
  onAdd: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  disminuirContador() {
    if (this.contador > 0) {
      this.contador--;
      this.onAdd.emit(this.contador);

    }
  }
}
