import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UIButtonVM } from '../../ui-models/ui-button-vm';

@Component({
  selector: 'lib-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss',
  standalone: false,
})
export class UiButtonComponent {
  @Input() public buttonConfig!: UIButtonVM;

  @Output() clicked = new EventEmitter<MouseEvent>();

  generateButtonClasses(): string[] {
    const config = this.buttonConfig;

    console.log(config, 'Config');
    return [
      'ui-button',
      `size-${config.sizeStyle}`,
      `style-${config.colorStyle}`,
      config.inline ? 'inline' : '',
      config.isOutlined ? 'outlined' : '',
      config.hasBorder ? 'has-border' : '',
      config.isSelected ? 'selected' : '',
      ...(config.customClasses || []),
    ].filter(Boolean);
  }

  onClick(event: MouseEvent) {
    console.log(event, 'Event');
    if (!this.buttonConfig.disabled) {
      this.clicked.emit(event);
    }
  }
}
