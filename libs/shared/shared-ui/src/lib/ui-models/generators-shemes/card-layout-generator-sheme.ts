import { CardSchema } from '../layout-wm/config-dynamic-card-layout-ui';

export function generateCardList(
  configs: { colorClass: string; title: string; content: string }[]
): CardSchema[] {
  return configs.map((config) =>
    generateCardSchema(config.colorClass, config.title, config.content)
  );
}

export function generateCardSchema(
  colorClass: string,
  badgeText: string,
  bodyText: string
): CardSchema {
  return {
    shemeType: 'primary',
    cardClasses: ['card-light', colorClass],
    header: [
      {
        type: 'text',
        value: badgeText,
        wrapperClass: 'card-badge-wrapper',
        elementClass: 'card-badge-label',
      },
      {
        type: 'text',
        value: '',
        wrapperClass: 'card-circle',
      },
    ],
    body: [
      {
        type: 'text',
        value: bodyText,
        wrapperClass: 'card-content',
        elementClass: 'card-title',
      },
    ],
    footer: [],
  };
}
