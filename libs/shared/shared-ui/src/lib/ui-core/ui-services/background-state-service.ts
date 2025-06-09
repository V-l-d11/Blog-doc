import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BackgroundStateService {
  private darkMode$ = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode$.asObservable();

  setDarkMode(value: boolean) {
    this.darkMode$.next(value);
  }

  isDark(): boolean {
    return this.darkMode$.value;
  }
}
