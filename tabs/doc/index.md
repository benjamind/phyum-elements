# Tabs

Tabs web component.

```js script
import { html } from '~/core';
import '~/doc-styles';
import '../simba-tabs.js';
import '../../tab/simba-tab.js';
```

## Selected Index

You can set the `selectedIndex` to select a certain tab.

```js preview-story
export const selectedIndex = () => html`
  <simba-tabs .selectedIndex=${1}>
    <simba-tab slot="tab">Info</simba-tab>
    <p slot="panel">Info page with lots of information about us.</p>
    <simba-tab slot="tab">Work</simba-tab>
    <p slot="panel">Work page that showcases our work.</p>
  </simba-tabs>
`;
```

## Slots Order

The tab and panel slots are ordered by DOM order.

This means you can switch the grouping in your `simba-tabs` from tab + panel to all tabs first or all panels first.

```js preview-story
export const slotsOrder = () => html`
  <simba-tabs>
    <simba-tab slot="tab">Info</simba-tab>
    <simba-tab slot="tab">Work</simba-tab>
    <p slot="panel">Info page with lots of information about us.</p>
    <p slot="panel">Work page that showcases our work.</p>
  </simba-tabs>
`;
```

## Nesting tabs

You can include tabs within tabs

```js preview-story
export const nestedTabs = () => html`
  <simba-tabs>
    <simba-tab slot="tab">Movies</simba-tab>
    <simba-tab slot="tab">Work</simba-tab>
    <div slot="panel">
      <p>Find some more info about our favorite movies:</p>
      <simba-tabs>
        <simba-tab slot="tab">Info about Cars</simba-tab>
        <simba-tab slot="tab">Info about Toy Story</simba-tab>
        <p slot="panel">
          Cars is a 2006 American computer-animated comedy film produced by
          Pixar Animation Studios and released by Walt Disney Pictures.
        </p>
        <p slot="panel">
          The feature film directorial debut of John Lasseter, it was the first
          entirely computer-animated feature film, as well as the first feature
          film from Pixar.
        </p>
      </simba-tabs>
    </div>
    <p slot="panel">Work page that showcases our work.</p>
  </simba-tabs>
`;
```
