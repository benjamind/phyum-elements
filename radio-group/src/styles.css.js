import { css } from '~/core';
import { spacing } from '~/spacing';
import { coolGray } from '~/colors';
import { borderRadiusMixin } from '~/borders';
import { typographyMixin } from '~/typography';

export default css`
  ::slotted(.form-control) {
    ${borderRadiusMixin('full')};
  }

  ::slotted(.form-control):after {
    left: 0;
    top: 0;
    width: ${spacing['3.5']};
    height: ${spacing['3.5']};
    border-radius: 50%;
    background: ${coolGray[50]};
    transform: scale(var(--scale, 0.7));
  }

  /* button styles */

  :host([button]) {
    display: block;
    margin: 6px 0px;
    color: ${coolGray[50]};
    background-color: transparent;
    /*box-shadow: 0 0 1px 1px ${coolGray[300]};*/
    border: 1px solid ${coolGray[300]};
    border-right: 0;
    ${typographyMixin('sans', 'base', 'medium')};
    transition: var(--theme-background-transition),
      var(--theme-color-transition);
  }

  :host([button]:first-child) {
    ${borderRadiusMixin('', 'l')}
  }

  :host([button]:last-of-type) {
    ${borderRadiusMixin('', 'r')}
    border-right: 1px solid ${coolGray[300]};
  }

  :host([button]) ::slotted(.form-control) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  :host([button]) ::slotted([slot='label']) {
    padding: ${spacing['2.5']} ${spacing['4']};
    display: inline-block;
    margin: 0;
  }

  :host([button][checked]) {
    box-shadow: none;
    color: ${coolGray[50]};
    background-color: var(--simba-color-primary-500);
  }
  :host([button][checked]) ::slotted([slot='label']) {
    color: var(--simba-text-color);
  }

  :host([button][checked]:hover) {
    background-color: var(--simba-color-primary-700);
  }

  :host([button][checked]:active) {
    background-color: var(--simba-color-primary-800);
  }

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    box-shadow: 0 0 0 3px var(--simba-focus-ring-color);
    outline: none;
  }
`;
