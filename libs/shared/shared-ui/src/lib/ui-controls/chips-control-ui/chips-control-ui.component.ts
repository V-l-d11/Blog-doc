import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-chips-control-ui',
  standalone: false,
  templateUrl: './chips-control-ui.component.html',
  styleUrl: './chips-control-ui.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsControlUiComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsControlUiComponent {
  items: string[] = [];
  @Input() placholder = 'Type ...';
  @Input() removable = true;

  private cd = inject(ChangeDetectorRef);
  @ViewChild('inputFiled') inputFiled: any;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-empty-function
  onChnage: Function = () => {};
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-empty-function
  onTouched: Function = () => {};

  onChipBarClick() {
    this.inputFiled.nativeElement.focus();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.triggerChange();
  }

  removeAll() {
    this.items = [];
    this.triggerChange();
  }

  onKeyDown(event: any, value: string) {
    switch (event.keyCode) {
      case 13:
      case 188: {
        if (value && value.trim() !== '') {
          if (!this.items.includes(value)) {
            this.items = [...this.items, value];
            this.triggerChange();
          }
          this.inputFiled.nativeElement.value = '';
          event.preventDefault();
        }
        break;
      }
      case 8: {
        if (!value && this.items.length > 0) {
          this.items.pop();
          this.items = [...this.items];
          this.triggerChange();
        }
        break;
      }
    }
  }

  writeValue(value: any): void {
    this.items = value;
    this.cd.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  registerOnCnhage(fn: Function): void {
    this.onChnage = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  triggerChange(): void {
    this.onChnage(this.items);
  }
}
