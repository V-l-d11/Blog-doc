import { Component, Input } from '@angular/core';
import { UiChipStyle } from '../../ui-models/component-vm/ui-chip-vm';

@Component({
  selector: 'lib-ui-chip',
  standalone: false,
  templateUrl: './ui-chip.component.html',
  styleUrl: './ui-chip.component.css',
})
export class UiChipComponent {
  @Input() public text = '';
  @Input() public style: UiChipStyle = 'accent';
  @Input() public styleParagraf: 'light' | 'dark' = 'dark';
  @Input() public sizeParagraf: 'large' | 'medium' | 'small' = 'medium';

  public getStyleClass = (): string => {
    return this.style;
  };
}
