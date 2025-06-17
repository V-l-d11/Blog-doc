import { Component, Input } from '@angular/core';
import { UiScrollMapVM } from '../../ui-models/layout-wm/config-scroll-mapp-layout-ui';

@Component({
  selector: 'lib-scrollspy-layout-ui',
  standalone: false,
  templateUrl: './scrollspy-layout-ui.component.html',
  styleUrl: './scrollspy-layout-ui.component.scss',
})
export class ScrollspyLayoutUiComponent {
  @Input({ required: true }) steps: UiScrollMapVM[] = [];
}
