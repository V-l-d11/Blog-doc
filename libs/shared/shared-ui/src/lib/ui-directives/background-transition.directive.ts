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
    const offset = window.innerHeight * 0.1455;
    const entered =
      scrollY > this.sectionTop - offset &&
      scrollY < this.sectionTop + this.sectionHeight;
    if (entered) {
      this.renderer.removeClass(document.body, 'dark-background');
      this.bgState.setDarkMode(false);
    } else {
      this.renderer.addClass(document.body, 'dark-background');
      this.bgState.setDarkMode(true);
    }
  }
}
