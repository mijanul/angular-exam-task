import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  alertType!: string;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeAlert() {
    this.close.emit();
  }
}
