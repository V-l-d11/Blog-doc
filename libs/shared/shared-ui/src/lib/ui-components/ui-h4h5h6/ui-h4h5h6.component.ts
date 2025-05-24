import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-ui-h4h5h6',
  templateUrl: './ui-h4h5h6.component.html',
  styleUrl: './ui-h4h5h6.component.scss',
})
export class UiH4h5h6Component {
  public text = input<string>();
}
