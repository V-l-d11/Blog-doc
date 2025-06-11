import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSchema, SharedUiModule } from '@blog-monorepo/shared-ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-searching-section',
  imports: [CommonModule, SharedUiModule, FormsModule],
  templateUrl: './searching-section.component.html',
  styleUrl: './searching-section.component.scss',
})
export class SearchingSectionComponent {
  items = ['agular', 'react'];

  public cardSheme: CardSchema = {
    shemeType: 'primary',
    cardClasses: ['card-light'],
    header: [
      {
        type: 'text',
        value: '/angular',
        wrapperClass: 'card-badge orange-badge',
      },
    ],
    headerStyle: {
      class: '',
    },
    body: [
      {
        type: 'text',
        value: 'How to create a new structured',
        wrapperClass: 'card-content',
        elementClass: 'card-title',
      },
    ],
    bodyStyle: {
      class: 'card-wrapper card-primary',
    },
    footer: [
      {
        type: 'text',
        value: '',
        wrapperClass: 'card-dot',
      },
    ],
    footerStyle: {
      class: '',
    },
  };
}
