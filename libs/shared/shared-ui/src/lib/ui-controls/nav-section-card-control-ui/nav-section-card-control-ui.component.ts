import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-nav-section-card-control-ui',
  standalone: false,
  templateUrl: './nav-section-card-control-ui.component.html',
  styleUrl: './nav-section-card-control-ui.component.scss',
})
export class NavSectionCardControlUiComponent {
  @Input() items: { label: string }[] = [];
  @Input() activeIndex = 0;

  @Output() selected = new EventEmitter<number>();

  onSelected(index: number): void {
    this.selected.emit(index);
  }
}
