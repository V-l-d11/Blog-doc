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
  private infoSectionTop = 0;

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

      const infoSection = document.querySelector(
        'lib-info-section'
      ) as HTMLElement;
      if (infoSection) {
        const infoRect = infoSection.getBoundingClientRect();
        this.infoSectionTop = infoRect.top + scrollTop;
      }

      this.onWindowScroll(); // начальная проверка
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const buffer = 250;

    const passedStart = scrollY >= this.sectionTop + buffer;
    const passedEnd = scrollY >= this.infoSectionTop;

    if (passedStart && !passedEnd) {
      // в пределах секции — включаем тёмную тему
      this.renderer.addClass(document.body, 'dark-background');
      this.bgState.setDarkMode(true);
    } else {
      // до начала или после info-section — возвращаем светлый фон
      this.renderer.removeClass(document.body, 'dark-background');
      this.bgState.setDarkMode(false);
    }
  }
}
