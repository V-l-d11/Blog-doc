import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule, UiScrollMapVM } from '@blog-monorepo/shared-ui';

@Component({
  selector: 'lib-road-map-section',
  imports: [CommonModule, SharedUiModule],
  templateUrl: './road-map-section.component.html',
  styleUrl: './road-map-section.component.scss',
})
export class RoadMapSectionComponent {
  steps: UiScrollMapVM[] = [
    {
      title: 'Start Project',
      date: '2021-01-01',
      description: 'We started with an idea and a vision.',
      img: 'assets/start.png',
      position: 'left',
      styles: {
        backgroundColor: '#f0f0f0',
        textColor: '#333',
      },
    },
    {
      title: 'Design Phase',
      date: '2021-02-15',
      description: 'We created mockups and finalized UX.',
      position: 'right',
    },
    {
      title: 'Development',
      date: '2021-04-01',
      description: 'Started building the core features.',
      position: 'left',
      styles: {
        backgroundColor: '#e6f7ff',
        textColor: '#003a8c',
      },
    },
    {
      title: 'Design Phase',
      date: '2021-02-15',
      description: 'We created mockups and finalized UX.',
      position: 'right',
    },
  ];
}
