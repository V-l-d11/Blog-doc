import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BackgroundStateService } from '../ui-core/ui-services/background-state-service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[libScrollProgress]',
  standalone: false,
})
export class ScrollProgressDirective implements OnInit, OnDestroy {
  private sub: Subscription | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private bgState: BackgroundStateService
  ) {}

  ngOnInit(): void {
    this.setStyle();
    this.updateProgress();
    this.sub = this.bgState.isDarkMode$.subscribe((isDark) => {
      const color = isDark ? '#DEDEDE' : '#000';
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateProgress();
  }

  private setStyle() {
    const bar = this.el.nativeElement;
    this.renderer.setStyle(bar, 'height', '5px');
    this.renderer.setStyle(bar, 'width', '55px');
    this.renderer.setStyle(bar, 'position', 'fixed');
    this.renderer.setStyle(bar, 'top', '0');
    this.renderer.setStyle(bar, 'left', '50%');
    this.renderer.setStyle(bar, 'transform', 'translateX(-50%)');
    this.renderer.setStyle(bar, 'z-index', '9999');
  }

  private updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const distance = scrollHeight - clientHeight;
    let progress = scrollTop / distance;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      progress = 1;
    }
    const width = `${Math.max(progress * 100, 1)}vw`;
    this.renderer.setStyle(this.el.nativeElement, 'width', width);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
