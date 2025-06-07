import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-shell-blog-main-container',
  imports: [CommonModule, RouterOutlet],
  standalone: true,
  templateUrl: './shell-blog-main-container.component.html',
  styleUrl: './shell-blog-main-container.component.css',
})
export class ShellBlogMainContainerComponent {}
