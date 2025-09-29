import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { FallbackComponent } from '../../components/fallback/fallback.component';
export type ICardComponent = {
  title: string;
  content: string;
  cardOutput: EventEmitter<string>;
};

@Component({
  selector: 'host-remote-card-wrapper',
  imports: [],
  templateUrl: './remote-card-wrapper.component.html',
  styleUrl: './remote-card-wrapper.component.css',
})
export class RemoteCardWrapperComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Output() cardOutput = new EventEmitter<string>();

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  async ngAfterViewInit() {
    this.container.clear();

    try {
      const Card = await loadRemoteModule({
        remoteName: 'remote',
        exposedModule: './CardComponent',
      });

      const cardComponentRef = this.container.createComponent<ICardComponent>(
        Card.CardComponent
      );

      cardComponentRef.instance.title = this.title;
      cardComponentRef.instance.content = this.content;

      cardComponentRef.instance.cardOutput.subscribe((message: string) => {
        this.cardOutput.emit(message);
      });
    } catch (err) {
      console.error('❌ Remote component load failed:', err);
      this.container.createComponent(FallbackComponent);
    }
  }
}
