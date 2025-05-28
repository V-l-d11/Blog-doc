import { Component, Input } from '@angular/core';
import {
  UiLabelColorScheme,
  UiLabelStyle,
} from '../../ui-models/component-vm/ui-label-vm';

@Component({
  selector: 'lib-ui-label',
  templateUrl: './ui-label.component.html',
  styleUrl: './ui-label.component.scss',
  standalone: false,
})
export class UiLabelComponent {
  @Input() public forName!: string;
  @Input() colorTheme: UiLabelColorScheme = UiLabelColorScheme.PRIMARY;
  @Input() style?: UiLabelStyle = UiLabelStyle.BLOCK;
  @Input() customClassList: string[] = [];
  @Input() customStyle = {};

  protected readonly UiLabelColorSheme = UiLabelColorScheme;
  protected readonly UiLabelStyle = UiLabelStyle;

  customClassListFn(): string[] {
    return this.customClassList;
  }

  customStylessFn() {
    return this.customStyle;
  }

  colorShemeFn(): UiLabelColorScheme {
    return this.colorTheme;
  }
}
