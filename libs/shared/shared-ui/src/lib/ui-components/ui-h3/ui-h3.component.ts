import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-ui-h3',
  templateUrl: './ui-h3.component.html',
  styleUrl: './ui-h3.component.scss',
  standalone: false,
})
export class UiH3Component {
  public text = input<string>();
  public color = input<'primary' | 'secondary' | 'custom'>();
}
