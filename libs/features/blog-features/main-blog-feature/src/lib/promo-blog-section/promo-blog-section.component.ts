import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@blog-monorepo/shared-ui';
import {
  UIButtonVM,
  UiButtonStyle,
  UiButtonSizes,
} from '@blog-monorepo/shared-ui';

@Component({
  selector: 'lib-promo-blog-section',
  standalone: true,
  imports: [CommonModule, SharedUiModule],
  templateUrl: './promo-blog-section.component.html',
  styleUrl: './promo-blog-section.component.scss',
})
export class PromoBlogSectionComponent {
  svgLogo = '/assets/shared/svg/logo.svg';

  buttonConfig = this.createButtonConfig(
    'Become a writer',
    ['animate-rise', 'delay-1'],
    {
      colorStyle: UiButtonStyle.Custom,
    }
  );
  buttonConfig1 = this.createButtonConfig(
    'Start studying',
    ['animate-rise', 'delay-2'],
    {
      colorStyle: UiButtonStyle.CustomDark,
    }
  );

  private createButtonConfig(
    text: string,
    customClasses: string[],
    overrides: Partial<UIButtonVM> = {}
  ): UIButtonVM {
    return {
      text,
      disabled: false,
      submitType: 'button',
      inline: true,
      isOutlined: true,
      hasBorder: true,
      isSelected: false,
      sizeStyle: UiButtonSizes.Secondary,
      customClasses,
      colorStyle: UiButtonStyle.Custom,
      ...overrides,
    };
  }
}
