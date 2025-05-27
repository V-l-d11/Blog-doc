import { Component, forwardRef, Input } from '@angular/core';
import { NeastedFormClassesType } from '../../ui-models/contoll-model/nested-form-groupe-vm';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'lib-nested-form-groupe-control-ui',
  templateUrl: './nested-form-groupe-control-ui.component.html',
  styleUrls: ['./nested-form-groupe-control-ui.component.scss'],

  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupDirective),
    },
  ],
})
export class NestedFormGroupeControlUiComponent {
  @Input() public formGroupeName!: string;
  @Input() customClassList?: NeastedFormClassesType;
  @Input() customStyle = {};
}
