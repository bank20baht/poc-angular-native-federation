// remote/src/app/components/card/card.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'remote-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';

  @Output() cardOutput = new EventEmitter<string>();

  onCardClick() {
    this.cardOutput.emit('Card clicked!');
  }
}
