import { Directive } from '@angular/core';

@Directive({
  selector: '[libUIBlurOnEnter]',
  host: {
    '(keydown.enter)': 'onEnter($event)',
  },
})
export class UiBlurOnEnterDirective {
  onEnter(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    target.blur();
  }
}
