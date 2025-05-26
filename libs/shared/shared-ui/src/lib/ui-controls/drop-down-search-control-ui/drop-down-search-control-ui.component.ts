import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-drop-down-search-control-ui',
  templateUrl: './drop-down-search-control-ui.component.html',
  styleUrl: './drop-down-search-control-ui.component.scss',
})
export class DropDownSearchControlUiComponent<T> {
  @Input() public options: T[] = [];
  @Input() public displayKey: keyof T | null = null;
  @Input() public useServerSearch = false;

  @Output() searchTermChange = new EventEmitter<string>();
  @Output() optionSelected = new EventEmitter<T>();
  @Output() loadMore = new EventEmitter<void>();

  toggleSection = false;
  searchTerm = '';
  selectedItem: T | null = null;

  public get filteredOptions(): T[] {
    if (this.useServerSearch || !this.displayKey) return this.options;
    return this.options.filter((opt) => {
      const value = opt[this.displayKey!]?.toString().toLowerCase();
      return value?.includes(this.searchTerm.toLowerCase());
    });
  }

  public toggleSectionHandler() {
    this.toggleSection = !this.toggleSection;
  }

  onInput(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    if (this.useServerSearch) this.searchTermChange.emit(this.searchTerm);
  }

  onSelect(item: T) {
    this.selectedItem = item;
    this.optionSelected.emit(item);
    this.toggleSection = false;
  }

  onScrollToEnd() {
    if (this.useServerSearch) {
      this.loadMore.emit();
    }
  }

  public dispalyValue(item: T): string {
    if (!this.displayKey) return item as unknown as string;
    return item[this.displayKey]?.toString() ?? ``;
  }
}
