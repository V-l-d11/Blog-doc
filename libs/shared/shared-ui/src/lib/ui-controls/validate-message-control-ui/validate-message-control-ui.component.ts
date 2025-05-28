import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UiValidatorFeedback } from '../../ui-models/ui-general-form-vm';

@Component({
  selector: 'lib-validate-message-control-ui',
  templateUrl: './validate-message-control-ui.component.html',
  styleUrl: './validate-message-control-ui.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidateMessageControlUiComponent {
  @Input() validationFeedback: UiValidatorFeedback[] = [];

  isPrimitive(value: any): boolean {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    );
  }

  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  getValue(obj: any, key: string): any {
    return obj?.[key];
  }
}
