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
import { HeaderControlUiComponent } from './ui-controls/header-control-ui/header-control-ui.component';
import { FooterControlUiComponent } from './ui-controls/footer-control-ui/footer-control-ui.component';
import { DropDownSearchControlUiComponent } from './ui-controls/drop-down-search-control-ui/drop-down-search-control-ui.component';
import { UiParagrafComponent } from './ui-components/ui-paragraf/ui-paragraf.component';
import { UiButtonComponent } from './ui-components/ui-button/ui-button.component';
import { NestedFormGroupeControlUiComponent } from './ui-controls/nested-from-groupe-control-ui/nested-form-groupe-control-ui.component';
import { UiLabelComponent } from './ui-components/ui-label/ui-label.component';
import { ValidateMessageControlUiComponent } from './ui-controls/validate-message-control-ui/validate-message-control-ui.component';
import { UiSpinnerComponent } from './ui-components/ui-spinner/ui-spinner.component';
import { UiChipComponent } from './ui-components/ui-chip/ui-chip.component';
import { UiIconComponent } from './ui-components/ui-icon/ui-icon.component';
import { BreadcrumbsControlUiComponent } from './ui-controls/breadcrumbs-control-ui/breadcrumbs-control-ui.component';
import { RouterModule } from '@angular/router';
import { SnackbarControlUiComponent } from './ui-controls/snackbar-control-ui/snackbar-control-ui.component';
import { FormConfigLayoutUiComponent } from './ui-layouts/form-config-layout-ui/form-config-layout-ui.component';
import { InputCheckboxControlUiComponent } from './ui-controls/input-checkbox-control-ui/input-checkbox-control-ui.component';
import { SelectControlUiComponent } from './ui-controls/select-control-ui/select-control-ui.component';
import { NavSectionCardControlUiComponent } from './ui-controls/nav-section-card-control-ui/nav-section-card-control-ui.component';
import { CardControlUiComponent } from './ui-controls/card-control-ui/card-control-ui.component';
import { ScrollspyLayoutUiComponent } from './ui-layouts/scrollspy-layout-ui/scrollspy-layout-ui.component';
import { DynamicCardConfigLayoutUiComponent } from './ui-layouts/dynamic-card-config-layout-ui/dynamic-card-config-layout-ui.component';
import { UiListComponent } from './ui-components/ui-list/ui-list.component';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [
    UiH1Component,
    UiH2Component,
    UiH3Component,
    UiH4h5h6Component,
    InputFiledControlUiComponent,
    FieldErrorsInptControlUiComponent,
    GeneralFormControlUiComponent,
    HeaderControlUiComponent,
    FooterControlUiComponent,
    DropDownSearchControlUiComponent,
    UiParagrafComponent,
    UiButtonComponent,
    NestedFormGroupeControlUiComponent,
    UiLabelComponent,
    ValidateMessageControlUiComponent,
    UiSpinnerComponent,
    UiChipComponent,
    UiIconComponent,
    BreadcrumbsControlUiComponent,
    SnackbarControlUiComponent,
    FormConfigLayoutUiComponent,
    InputCheckboxControlUiComponent,
    SelectControlUiComponent,
    NavSectionCardControlUiComponent,
    CardControlUiComponent,
    ScrollspyLayoutUiComponent,
    DynamicCardConfigLayoutUiComponent,
    UiListComponent,
  ],
  exports: [UiH1Component, UiParagrafComponent, UiH2Component],
})
export class SharedUiModule {}
