import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'lib-ui-h2',
  templateUrl: './ui-h2.component.html',
  styleUrl: './ui-h2.component.scss',
  standalone: false,
})
export class UiH2Component {
  @Input() text!: string;
  @Input() public customClass!: string;
}
