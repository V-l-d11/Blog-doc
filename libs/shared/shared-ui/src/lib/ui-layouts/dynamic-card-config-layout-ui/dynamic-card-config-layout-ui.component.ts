import { Component, Input } from '@angular/core';
import {
  BlockElement,
  CardSchema,
} from '../../ui-models/layout-wm/config-dynamic-card-layout-ui';
import { UiSelectItem } from '../../ui-models/contoll-model/select-vm';

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

  onSelectChange(
    selected: UiSelectItem[],
    item: BlockElement,
    section: 'header' | 'body' | 'footer'
  ) {
    console.log('SELECT changed from section:', section);

    console.log('Selected:', selected);
  }

  onButtonClick(
    event: MouseEvent,
    item: BlockElement,
    section: 'header' | 'body' | 'footer'
  ) {
    console.log('BUTTON clicked from section:', section);

    console.log('Event:', event);
  }

  onCheckboxChange(
    checked: boolean,
    item: BlockElement,
    section: 'header' | 'body' | 'footer'
  ) {
    console.log(`CHECKBOX in section "${section}" changed`);

    console.log('Checked:', checked);
  }
}
