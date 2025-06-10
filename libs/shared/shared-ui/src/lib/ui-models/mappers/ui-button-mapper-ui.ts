import { HeaderItem } from '../layout-wm/config-header-layout-ui';
import { UiButtonSizes, UiButtonStyle, UIButtonVM } from '../ui-button-vm';

export function mapHeaderItemToUIButtonVM(item: HeaderItem): UIButtonVM {
  return {
    icon: item.iconName || '',
    text: item.text || '',
    disabled: false,
    submitType: 'button',
    inline: true,
    isOutlined: false,
    colorStyle: UiButtonStyle.Primary,
    hasBorder: true,
    isSelected: false,
    tooltip: item.tooltip,
    sizeStyle: UiButtonSizes.Secondary,
    customStyles: item.styles
      ? {
          ...item.styles,
          classList: item.styles.classList?.join(' ') || '',
        }
      : {},
    customClasses: item.styles?.classList || [],
  };
}
