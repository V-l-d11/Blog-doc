import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { UiFormControlValidated } from '../../ui-core/abstract/ui-form-control-validated.abstract';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { UiControlChekboxSheme } from '../../ui-models/contoll-model/chekxbox-vm';
import { UiValidatorFeedback } from '../../ui-models/ui-general-form-vm';

@Component({
  selector: 'lib-input-checkbox-control-ui',
  standalone: false,
  templateUrl: './input-checkbox-control-ui.component.html',
  styleUrl: './input-checkbox-control-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: UiFormControlValidated,
      useExisting: InputCheckboxControlUiComponent,
    },
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupDirective),
    },
  ],
})
export class InputCheckboxControlUiComponent {
  @Input() public name!: string;
  @Input() public colorSheme: UiControlChekboxSheme =
    UiControlChekboxSheme.PRIMARY;
  @Input({ required: false }) public validationFedback: UiValidatorFeedback[] =
    [];
  @Input() public customClassList: string[] = [];
  @Input() public customStyles = {};

  protected readonly UiControlCheckboxSheme = UiControlChekboxSheme;

  onValidation(feedback: UiValidatorFeedback[]): void {
    this.validationFedback = feedback;
  }
}
