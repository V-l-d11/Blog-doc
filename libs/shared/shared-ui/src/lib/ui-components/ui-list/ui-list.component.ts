import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiListItem, UiListVM } from '../../ui-models/component-vm/ui-list-vm';

@Component({
  selector: 'lib-ui-list',
  standalone: false,
  template: `
    <ul [ngClass]="listItemsVM.listClass" [ngStyle]="listItemsVM.listStyle">
      <li
        *ngFor="let item of listItemsVM.items"
        [ngClass]="item.class"
        (click)="itemCliked(item)"
      >
        <i *ngIf="item.icon" [ngClass]="item.icon"></i>
        {{ item.label }}
      </li>
    </ul>
  `,
  styleUrl: './ui-list.component.scss',
})
export class UiListComponent {
  @Input() listItemsVM!: UiListVM;

  @Output() itemClicked = new EventEmitter<UiListItem>();

  itemCliked(item: UiListItem) {
    this.itemClicked.emit(item);
  }
}
