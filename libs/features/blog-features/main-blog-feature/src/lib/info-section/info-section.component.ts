import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSchema, SharedUiModule } from '@blog-monorepo/shared-ui';

@Component({
  selector: 'lib-info-section',
  imports: [CommonModule, SharedUiModule],
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.scss',
})
export class InfoSectionComponent {
  exampleCardSchema: CardSchema = {
    shemeType: 'dark',
    cardClasses: ['rounded-lg', 'p-6', 'border', 'border-teal-800'],
    header: [
      {
        type: 'text',
        value: 'LOCAL FIRST AI',
        wrapperClass:
          'text-sm text-teal-400 font-bold mb-2 uppercase tracking-wide',
      },
      {
        type: 'text',
        value: 'Power & Performance',
        wrapperClass: 'text-3xl font-bold text-white mb-1',
      },
      {
        type: 'text',
        value: 'AI That Puts Your Device First.',
        wrapperClass: 'text-md text-gray-400 mb-4',
      },
    ],
    headerStyle: { display: 'block' },
    body: [
      {
        type: 'text',
        value: '📶 Offline Writes',
        wrapperClass: 'text-white font-semibold flex items-center gap-2 mt-3',
      },
      {
        type: 'text',
        value:
          'Automatic sync and programmable conflict resolution keeps your app data fresh.',
        wrapperClass: 'text-sm  d-flex text-gray-400 mb-2',
      },
      {
        type: 'text',
        value: '📄 SQLite Is Just a File',
        wrapperClass: 'text-white font-semibold flex items-center gap-2 mt-3',
      },
      {
        type: 'text',
        value:
          'Leverage local LLMs, complete with data store, RAG, and vector search with SQLite.',
        wrapperClass: 'text-sm text-gray-400 mb-2',
      },
      {
        type: 'text',
        value: '🔒 Private by Design',
        wrapperClass: 'text-white font-semibold flex items-center gap-2 mt-3',
      },
      {
        type: 'text',
        value:
          'Encrypted at rest. Maintain user data privacy with on-device processing and networking.',
        wrapperClass: 'text-sm text-gray-400',
      },
    ],
    bodyStyle: { diplay: 'block' },
  };
}
