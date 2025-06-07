import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoBlogSectionComponent } from '../promo-blog-section/promo-blog-section.component';

@Component({
  selector: 'lib-main-blog-feature',
  standalone: true,
  imports: [CommonModule, PromoBlogSectionComponent],
  templateUrl: './main-blog-feature.component.html',
  styleUrl: './main-blog-feature.component.scss',
})
export class MainBlogFeatureComponent {}
