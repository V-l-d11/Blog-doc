import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UiSelectItem } from './../../ui-models/contoll-model/select-vm';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-select-control-ui',
  standalone: false,
  templateUrl: './select-control-ui.component.html',
  styleUrl: './select-control-ui.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlUiComponent),
      multi: true,
    },
  ],
})
export class SelectControlUiComponent implements ControlValueAccessor, OnInit {
  @Input() public items: UiSelectItem[] = [];
  @Output() selectionChange = new EventEmitter<UiSelectItem[]>();

  private elementRef = inject(ElementRef);
  isDropDownVisible = false;
  filteredItems: UiSelectItem[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: any) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropDownVisible = false;
    }
  }

  filterItem(event: Event) {
    const searchItem = (
      event.target as HTMLInputElement
    ).value.toLocaleLowerCase();
    this.filteredItems = this.items.filter((item) =>
      item.name.toLowerCase().includes(searchItem)
    );
  }

  toogleItem(item: UiSelectItem, event: MouseEvent) {
    event.stopPropagation();
    item.selected = !item.selected;
    this.selectionChange.emit(this.items.filter((i) => i.selected));
  }

  removeItem(item: UiSelectItem, event: MouseEvent) {
    event.stopPropagation();
    item.selected = false;
    this.selectionChange.emit(this.items.filter((i) => i.selected));
  }

  writeValue(value: any): void {
    if (Array.isArray(value)) {
      this.items.forEach((item) => {
        item.selected = value.includes(item);
      });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  showDropdown() {
    this.isDropDownVisible = true;
  }
}
