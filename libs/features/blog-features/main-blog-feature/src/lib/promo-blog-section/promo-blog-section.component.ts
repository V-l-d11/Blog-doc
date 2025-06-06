import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@blog-monorepo/shared-ui';

@Component({
  selector: 'lib-promo-blog-section',
  standalone: true,
  imports: [CommonModule, SharedUiModule],
  templateUrl: './promo-blog-section.component.html',
  styleUrl: './promo-blog-section.component.scss',
})
export class PromoBlogSectionComponent {}
