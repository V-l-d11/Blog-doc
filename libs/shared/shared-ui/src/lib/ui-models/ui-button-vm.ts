export interface UIButtonVM {
  icon?: string;
  text?: string;
  disabled: boolean;
  submitType: 'submit' | 'button';
  inline: boolean;
  isOutlined: boolean;
  colorStyle: UiButtonStyle;
  hasBorder: boolean;
  isSelected: boolean;
  tooltip?: string;
  sizeStyle: UiButtonSizes;
  customStyles?: { [key: string]: string };
  customClasses?: string[];
}

export enum UiButtonStyle {
  Primary = 'primary',
  Secondry = 'secondary',
  Tertiary = 'tertiary',
  Custom = 'custom',
  CustomDark = 'custom-dark',
}

export enum UiButtonSizes {
  Small = 'small',
  Secondary = 'secondary',
  Large = 'large',
}
