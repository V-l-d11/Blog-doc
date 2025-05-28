import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-header-control-ui',
  templateUrl: './header-control-ui.component.html',
  styleUrl: './header-control-ui.component.scss',
  standalone: false,
})
export class HeaderControlUiComponent {
  @Input()
  public className: 'primary' | 'secondary' = 'primary';
}
