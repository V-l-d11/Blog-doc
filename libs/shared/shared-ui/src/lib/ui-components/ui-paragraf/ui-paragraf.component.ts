import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-paragraf',
  templateUrl: './ui-paragraf.component.html',
  styleUrl: './ui-paragraf.component.scss',
  standalone: false,
})
export class UiParagrafComponent {
  @Input() public style: 'light' | 'dark' = 'dark';
  @Input() public size: 'large' | 'medium' | 'small' = 'medium';
  @Input() textParts: { text: string; url?: string }[] = [];

  fontSizeMap: Record<'large' | 'medium' | 'small', string> = {
    large: '24px',
    medium: '16px',
    small: '12px',
  };
}
