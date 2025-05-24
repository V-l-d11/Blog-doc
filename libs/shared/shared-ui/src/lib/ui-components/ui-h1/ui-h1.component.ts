import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-ui-h1',
  templateUrl: './ui-h1.component.html',
  styleUrl: './ui-h1.component.scss',
})
export class UiH1Component {
  public text = input<string>();
}
