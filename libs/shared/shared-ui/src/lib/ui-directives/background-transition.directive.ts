import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import { BackgroundStateService } from '../ui-core/ui-services/background-state-service';

@Directive({
  selector: '[libBackgroundTransition]',
  standalone: false,
})
export class BackgroundTransitionDirective implements AfterViewInit {
  private sectionTop = 0;
  private sectionHeight = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private bgState: BackgroundStateService
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      this.sectionTop = rect.top + scrollTop;
      this.sectionHeight = this.el.nativeElement.offsetHeight;
      this.onWindowScroll();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const buffer = 250;
    const sectionReached = scrollY >= this.sectionTop + buffer;
    if (sectionReached) {
      this.renderer.addClass(document.body, 'dark-background');
      this.bgState.setDarkMode(true);
    } else {
      this.renderer.removeClass(document.body, 'dark-background');
      this.bgState.setDarkMode(false);
    }
  }
}
