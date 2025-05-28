import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-icon',
  standalone: false,
  templateUrl: './ui-icon.component.html',
  styleUrl: './ui-icon.component.scss',
})
export class UiIconComponent {
  @Input() public tooltip = '';

  @Input() public icon = '';

  @Input() public color:
    | ''
    | 'primary'
    | 'accent'
    | 'warning'
    | 'white'
    | 'dark'
    | 'inherit' = 'primary';

  @Input() public size: 'default' | 'big' | 'small' = 'default';

  @Input() public position: 'left' | 'right' = 'left';

  get iconClasses(): string[] {
    const classes = [this.icon];

    if (this.color) {
      classes.push(`icon-color-${this.color}`);
    }

    if (this.size && this.size !== 'default') {
      classes.push(`icon-size-${this.size}`);
    }

    if (this.position) {
      classes.push(`icon-${this.position}`);
    }

    return classes;
  }
}
