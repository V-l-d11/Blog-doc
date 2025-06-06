import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-ui-h1',
  templateUrl: './ui-h1.component.html',
  styleUrl: './ui-h1.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class UiH1Component {
  public text = input<string>();
  public customClass = input<string>();
}
