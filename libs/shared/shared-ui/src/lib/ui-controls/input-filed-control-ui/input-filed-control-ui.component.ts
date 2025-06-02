import {
  Component,
  forwardRef,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  NgControl,
} from '@angular/forms';
import { UiFormControlValidated } from '../../ui-core/abstract/ui-form-control-validated.abstract';
import { UiValidatorFeedback } from '../../ui-models/ui-general-form-vm';
import { UiFormControlValidateDirective } from '../../ui-directives/ui-control-form.directive';

/*
<lib-input-filed-control-ui [parentForm]="regidtrationForm" filedName="name label="Name"> 
*/

@Component({
  selector: 'lib-input-filed-control-ui',
  templateUrl: './input-filed-control-ui.component.html',
  styleUrl: './input-filed-control-ui.component.scss',
  standalone: false,
  providers: [
    {
      provide: UiFormControlValidated,
      useExisting: forwardRef(() => InputFiledControlUiComponent),
    },
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupDirective),
    },
  ],
})
export class InputFiledControlUiComponent
  extends UiFormControlValidateDirective
  implements OnInit
{
  @Input() type: 'text' | 'number' | 'email' | 'date' = 'text';
  @Input() name!: string;
  @Input() placholder = '';
  @Input() readonly = false;
  @Input() autocomplete = false;
  @Input() customClassList: string[] = [];
  @Input() customStyles: { [key: string]: string } = {};

  override validationFeedback: UiValidatorFeedback[] = [];

  constructor(@Self() @Optional() override ngControl: NgControl) {
    super(ngControl);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.name) {
      throw new Error('Input [name] is required for UiInputComponent');
    }
  }

  onValidation(feedback: UiValidatorFeedback[]): void {
    this.validationFeedback = feedback;
  }

  public get combinedClasses(): string[] {
    return [
      'form-control',
      ...(this.customClassList || []),
      this.type === 'date' ? 'date-input' : '',
    ];
  }

  getControlName(): string {
    return this.name;
  }
}
