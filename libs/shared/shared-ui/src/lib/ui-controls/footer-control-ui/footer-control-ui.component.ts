import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-footer-control-ui',
  templateUrl: './footer-control-ui.component.html',
  styleUrl: './footer-control-ui.component.scss',
})
export class FooterControlUiComponent {
  @Input() public color: 'primary' | 'secondary' = 'primary';
}
