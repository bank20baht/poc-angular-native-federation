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

export type ICardComponent = {
  title: string;
  content: string;
  cardOutput: EventEmitter<string>;
};

@Component({
  selector: 'host-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('host');

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  async ngAfterViewInit() {
    this.container.clear();

    try {
      const Card = await loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.json',
        remoteName: 'remote',
        exposedModule: './CardComponent',
      });

      const cardComponentRef = this.container.createComponent<ICardComponent>(
        Card.CardComponent
      );

      cardComponentRef.instance.title = 'Text from Host (Native Federation)';
      cardComponentRef.instance.content =
        'Angular 20 Microfrontend Native Federation 🚀';

      cardComponentRef.instance.cardOutput.subscribe((message: string) => {
        alert(`Message from Remote: ${message}`);
      });
    } catch (err) {
      console.error('❌ Remote component load failed:', err);
      this.container.createComponent(FallbackComponent);
    }
  }
}
