// host/src/app/app.ts

import {
  Component,
  EventEmitter,
  signal,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { FallbackComponent } from './components/fallback/fallback.component';
import { RemoteCardWrapperComponent } from './mfe-adapters';

export type ICardComponent = {
  title: string;
  content: string;
  cardOutput: EventEmitter<string>;
};

@Component({
  selector: 'host-root',
  imports: [RouterOutlet, RemoteCardWrapperComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('host');

  cardTitle = 'Text from Host (Native Federation)';
  cardContent = 'Angular 20 Microfrontend Native Federation 🚀';

  handleClickCardButton(event: string) {
    alert(`Message from Remote: ${event}`);
  }
}
