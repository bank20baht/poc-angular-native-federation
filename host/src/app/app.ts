// host/src/app/app.ts

import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

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

    const Card = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.json',
      remoteName: 'remote',
      exposedModule: './CardComponent',
    });

    const cardComponentRef = this.container.createComponent(Card.CardComponent);

    cardComponentRef.setInput('title', 'Text from Host (Native Federation)');
    cardComponentRef.setInput(
      'content',
      'Angular 20 Microfrontend Native Federation 🚀'
    );
  }
}
