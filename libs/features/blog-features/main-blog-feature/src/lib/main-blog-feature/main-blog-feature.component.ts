import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoBlogSectionComponent } from '../promo-blog-section/promo-blog-section.component';
import { SharedUiModule } from '@blog-monorepo/shared-ui';

@Component({
  selector: 'lib-main-blog-feature',
  standalone: true,
  imports: [CommonModule, PromoBlogSectionComponent, SharedUiModule],
  templateUrl: './main-blog-feature.component.html',
  styleUrl: './main-blog-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainBlogFeatureComponent {}
