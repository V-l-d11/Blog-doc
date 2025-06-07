import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-h1',
  templateUrl: './ui-h1.component.html',
  styleUrl: './ui-h1.component.scss',
  standalone: false,
})
export class UiH1Component {
  @Input() text!: string;
  @Input() customClass = '';
}
