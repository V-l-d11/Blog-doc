import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiH1Component } from './ui-components/ui-h1/ui-h1.component';
import { UiH2Component } from './ui-components/ui-h2/ui-h2.component';
import { UiH3Component } from './ui-components/ui-h3/ui-h3.component';
import { UiH4h5h6Component } from './ui-components/ui-h4h5h6/ui-h4h5h6.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiH1Component,
    UiH2Component,
    UiH3Component,
    UiH4h5h6Component,
  ],
})
export class SharedUiModule {}
