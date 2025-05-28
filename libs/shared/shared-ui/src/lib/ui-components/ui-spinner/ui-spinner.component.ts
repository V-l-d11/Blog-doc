import { Component, Input } from '@angular/core';
import {
  UiSpinnerSize,
  UiSpinnerStyle,
} from '../../ui-models/component-vm/ui-spinner-vm';

@Component({
  selector: 'lib-ui-spinner',
  standalone: false,
  templateUrl: './ui-spinner.component.html',
  styleUrl: './ui-spinner.component.scss',
})
export class UiSpinnerComponent {
  @Input() public text!: string;
  @Input() public size: UiSpinnerSize = 'LARGE';
  @Input() public customClassList?: string[];
  @Input() public style: UiSpinnerStyle = 'BORDER';
  @Input() public customStyles = {};

  get customClassesFn(): string[] {
    return this.customClassList ? this.customClassList : [];
  }

  get customStylesFn() {
    return this.customStyles;
  }

  get sizeSpinner(): UiSpinnerSize {
    return this.size;
  }
}
