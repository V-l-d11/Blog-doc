import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiH1Component } from './ui-components/ui-h1/ui-h1.component';
import { UiH2Component } from './ui-components/ui-h2/ui-h2.component';
import { UiH3Component } from './ui-components/ui-h3/ui-h3.component';
import { UiH4h5h6Component } from './ui-components/ui-h4h5h6/ui-h4h5h6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFiledControlUiComponent } from './ui-controls/input-filed-control-ui/input-filed-control-ui.component';
import { FieldErrorsInptControlUiComponent } from './ui-controls/field-errors-inpt-control-ui/field-errors-inpt-control-ui.component';
import { GeneralFormControlUiComponent } from './ui-controls/general-form-control-ui/general-form-control-ui.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    UiH1Component,
    UiH2Component,
    UiH3Component,
    UiH4h5h6Component,
    InputFiledControlUiComponent,
    FieldErrorsInptControlUiComponent,
    GeneralFormControlUiComponent,
  ],
})
export class SharedUiModule {}
