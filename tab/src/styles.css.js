import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';
import { typographyMixin } from '~/typography';
import { spacing } from '~/spacing';

export default css`
  :host {
    display: inline-block;
    cursor: pointer;
    color: ${coolGray[50]};
    background-color: transparent;
    ${typographyMixin('sans', 'base', 'medium')};
    /*border-bottom: ${spacing['2']} solid ${coolGray[300]};*/
    border-bottom-width: ${spacing['1']};
    border-bottom-style: solid;
    border-bottom-color: ${coolGray[300]};

    padding: ${spacing['2.5']} ${spacing['4']};
    transition: var(--theme-background-transition), color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;
  }

  :host(:hover) {
    border-bottom-color: var(--simba-color-primary-300);
    background-color: transparent;
  }

  :host(:active) {
    border-bottom-color: var(--simba-color-primary-500);

  }

  :host([selected]) {
    border-bottom-color: var(--simba-color-primary-500);
    color: var(--simba-color-primary-500);
  }

  
  :host(:focus-visible:not([disabled])) {
    box-shadow: 0 0 1px 1px ${coolGray[300]},
      0 0 0 3px var(--simba-focus-ring-color);
    outline: none;
  }

  :host([disabled]) {
    filter: brightness(75%);
    pointer-events: none;
  }

  :host([theme='dark'] {
    color: ${coolGray[50]};
  }

  :host([theme='dark']:hover) {
    border-bottom-color: ${coolGray[700]};
  }
`;
