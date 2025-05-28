import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-footer-control-ui',
  templateUrl: './footer-control-ui.component.html',
  styleUrl: './footer-control-ui.component.scss',
  standalone: false,
})
export class FooterControlUiComponent {
  @Input() public color: 'primary' | 'secondary' = 'primary';
}
