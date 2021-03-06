import { html } from '~/core';
import { LionTabs } from '@lion/tabs';
import { ThemeMixin } from 'dark-theme-utils';
import styles from './styles.css.js';

export class SimbaTabs extends ThemeMixin(LionTabs) {
  static get properties() {
    return {
      variation: {
        // primary, secondary, outline, text
        type: String,
        reflect: true,
      },
      rounded: {
        type: Boolean,
        reflect: true,
      },
      size: {
        type: String, // 'small', '', 'large'
        reflect: true,
      },
    };
  }

  static get styles() {
    return [...super.styles, styles];
  }
}
