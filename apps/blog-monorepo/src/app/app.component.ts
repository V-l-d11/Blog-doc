import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@blog-monorepo/shared-ui';

@Component({
  imports: [SharedUiModule, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog-monorepo';
}
