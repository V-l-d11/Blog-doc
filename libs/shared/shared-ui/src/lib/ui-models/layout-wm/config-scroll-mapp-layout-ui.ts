export interface UiScrollMapVM {
  title?: string;
  date?: string;
  description?: string;
  img?: string;
  position: 'left' | 'right';
  styles?: {
    backgroundColor?: string;
    textColor?: string;
  };
}
