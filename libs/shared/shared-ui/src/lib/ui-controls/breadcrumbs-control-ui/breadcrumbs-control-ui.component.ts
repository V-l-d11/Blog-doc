import { Component, Input } from '@angular/core';
import { UiBreadcrumbVM } from '../../ui-models/contoll-model/breadcrumb-vm';

@Component({
  selector: 'lib-breadcrumbs-control-ui',
  standalone: false,
  templateUrl: './breadcrumbs-control-ui.component.html',
  styleUrl: './breadcrumbs-control-ui.component.scss',
})
export class BreadcrumbsControlUiComponent {
  @Input() public breadcrumbList: UiBreadcrumbVM[] = [];
}
