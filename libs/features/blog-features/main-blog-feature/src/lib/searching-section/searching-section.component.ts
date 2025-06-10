import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@blog-monorepo/shared-ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-searching-section',
  imports: [CommonModule, SharedUiModule, FormsModule],
  templateUrl: './searching-section.component.html',
  styleUrl: './searching-section.component.scss',
})
export class SearchingSectionComponent {
  items = ['agular', 'react'];
}
