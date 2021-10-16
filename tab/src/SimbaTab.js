import { html } from '~/core';
import { LionButton } from '@lion/button';
import { ThemeMixin } from 'dark-theme-utils';
import styles from './styles.css.js';

export class SimbaTab extends ThemeMixin(LionButton) {
  static get properties() {
    return {};
  }

  static get styles() {
    return [...super.styles, styles];
  }
}
