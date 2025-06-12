import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSchema, SharedUiModule } from '@blog-monorepo/shared-ui';
import { FormsModule } from '@angular/forms';
import { generateCardList } from '@blog-monorepo/shared-ui';
@Component({
  selector: 'lib-searching-section',
  imports: [CommonModule, SharedUiModule, FormsModule],
  templateUrl: './searching-section.component.html',
  styleUrl: './searching-section.component.scss',
})
export class SearchingSectionComponent {
  items = ['agular', 'react'];
  public cardShemes: CardSchema[] = [];

  constructor() {
    this.cardShemes = generateCardList([
      {
        colorClass: 'bg-orange',
        title: '/ngRx',
        content: 'How to create a new structured',
      },
      {
        colorClass: 'bg-blue',
        title: '/Angular',
        content: 'Build dynamic apps',
      },
      {
        colorClass: 'bg-green',
        title: '/RxJS',
        content: 'Reactive programming made easy',
      },
      {
        colorClass: 'bg-purple',
        title: '/NgRx',
        content: 'State management like a pro',
      },
    ]);
  }
}
