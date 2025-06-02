import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { UiFormControlValidated } from '../../ui-core/abstract/ui-form-control-validated.abstract';
import {
  ControlContainer,
  FormGroupDirective,
  NgControl,
} from '@angular/forms';
import { UiControlChekboxSheme } from '../../ui-models/contoll-model/chekxbox-vm';
import { UiValidatorFeedback } from '../../ui-models/ui-general-form-vm';
import { UiFormControlValidateDirective } from '../../ui-directives/ui-control-form.directive';

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
export class InputCheckboxControlUiComponent
  extends UiFormControlValidateDirective
  implements OnInit
{
  @Input() public name!: string;
  @Input() public colorSheme: UiControlChekboxSheme =
    UiControlChekboxSheme.PRIMARY;

  @Input() public customClassList: string[] = [];
  @Input() public customStyles = {};

  constructor(@Self() @Optional() override ngControl: NgControl) {
    super(ngControl);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected readonly UiControlCheckboxSheme = UiControlChekboxSheme;
}
