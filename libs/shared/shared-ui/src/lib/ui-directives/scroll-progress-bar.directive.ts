import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[libScrollProgress]',
  standalone: false,
})
export class ScrollProgressDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el, 'element');
  }

  ngOnInit(): void {
    this.setStyle();
    this.updateProgress();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateProgress();
  }

  private setStyle() {
    const bar = this.el.nativeElement;
    this.renderer.setStyle(bar, 'height', '5px');
    this.renderer.setStyle(bar, 'width', '55px');
    this.renderer.setStyle(bar, 'background-color', '#000');
    this.renderer.setStyle(bar, 'position', 'fixed');
    this.renderer.setStyle(bar, 'top', '0');
    this.renderer.setStyle(bar, 'left', '50%');
    this.renderer.setStyle(bar, 'transform', 'translateX(-50%)');
    this.renderer.setStyle(bar, 'z-index', '9999');
  }

  private updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    const widthPercent = progress * 100;
    const totalWidth = Math.max(widthPercent * 2, 1);
    const newWidth = `${totalWidth}vw`;

    this.renderer.setStyle(this.el.nativeElement, 'width', newWidth);
  }
}
