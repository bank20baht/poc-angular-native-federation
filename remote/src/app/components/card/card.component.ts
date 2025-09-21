// remote/src/app/components/card/card.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'remote-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
