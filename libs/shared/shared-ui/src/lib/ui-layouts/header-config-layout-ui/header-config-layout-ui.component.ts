import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import {
  HeaderItem,
  UiHeaderConfig,
} from '../../ui-models/layout-wm/config-header-layout-ui';
import { BackgroundStateService } from '../../ui-core/ui-services/background-state-service';
import { Subscription } from 'rxjs';
import { UIButtonVM } from '../../ui-models/ui-button-vm';
import { mapHeaderItemToUIButtonVM } from './../../ui-models/mappers/ui-button-mapper-ui';

@Component({
  selector: 'lib-header-config-layout-ui',
  standalone: false,
  templateUrl: './header-config-layout-ui.component.html',
  styleUrl: './header-config-layout-ui.component.scss',
})
export class HeaderConfigLayoutUiComponent implements OnInit, OnDestroy {
  @Input() headerUiConfig!: UiHeaderConfig;

  private bgState = inject(BackgroundStateService);
  private sub: Subscription | undefined;
  isDark = false;

  ngOnInit(): void {
    this.sub = this.bgState.isDarkMode$.subscribe((dark) => {
      this.isDark = dark;
      if (this.isDark) {
        this.headerUiConfig.backgroundColor = 'rgba(255, 72, 173, 0.334)';
      } else {
        this.headerUiConfig.backgroundColor = '#1F3B3B';
      }
    });
  }

  generateUiButtonConfig(item: HeaderItem): UIButtonVM {
    return mapHeaderItemToUIButtonVM(item);
  }

  getSection(position: 'left' | 'center' | 'right') {
    return this.headerUiConfig.sections.find(
      (section) => section.position === position
    );
  }

  handleAction(action: string | (() => void) | undefined): void {
    if (typeof action === 'function') {
      action();
    } else if (typeof action === 'string') {
      window.open(action, '_blank');
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
