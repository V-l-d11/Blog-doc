import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-field-errors-inpt-control-ui',
  templateUrl: './field-errors-inpt-control-ui.component.html',
  styleUrl: './field-errors-inpt-control-ui.component.scss',
  standalone: false,
})
export class FieldErrorsInptControlUiComponent {
  @Input()
  public formField!: FormControl;
}
