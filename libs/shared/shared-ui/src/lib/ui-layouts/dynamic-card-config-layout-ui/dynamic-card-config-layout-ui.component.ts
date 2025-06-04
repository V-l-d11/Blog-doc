import { Component, Input } from '@angular/core';
import {
  BlockElement,
  CardSchema,
} from '../../ui-models/layout-wm/config-dynamic-card-layout-ui';

@Component({
  selector: 'lib-dynamic-card-config-layout-ui',
  standalone: false,
  templateUrl: './dynamic-card-config-layout-ui.component.html',
  styleUrl: './dynamic-card-config-layout-ui.component.scss',
})
export class DynamicCardConfigLayoutUiComponent {
  @Input() configDynamicCard!: CardSchema;

  protected readonly trackByFn = (i: number, el: BlockElement) =>
    'name' in el && el.name ? el.name : i;
}
