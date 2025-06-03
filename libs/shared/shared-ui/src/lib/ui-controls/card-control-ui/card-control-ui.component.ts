import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card-control-ui',
  standalone: false,
  templateUrl: './card-control-ui.component.html',
  styleUrl: './card-control-ui.component.scss',
})
export class CardControlUiComponent {
  @Input() public shemeType: 'primary' | 'dark' | 'light' | 'secondary' =
    'primary';
}
