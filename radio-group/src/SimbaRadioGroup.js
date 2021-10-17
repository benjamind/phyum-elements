import { LionRadioGroup } from '@lion/radio-group';
import { inputStyles } from '~/form-core';
import { ThemeMixin } from 'dark-theme-utils';
import styles from './group-styles.css.js';

export class SimbaRadioGroup extends ThemeMixin(LionRadioGroup) {
  static get styles() {
    return [...super.styles, inputStyles, styles];
  }
  static get properties() {
    return {
      ...super.properties,
      button: {
        type: Boolean,
        reflect: true,
      },
    };
  }
}
