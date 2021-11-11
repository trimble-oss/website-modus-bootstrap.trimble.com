---
title: "Tooltips"
layout: "single"
description: "Tooltips provide a short description of a page element or control."
components: true
images:
  - "/img/headers/components/tooltips.png"
styleguideURL: "components/tooltips/"
---

<script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
</script>

## Overview

Things to know when using the tooltip plugin:

- Tooltips rely on the 3rd party library [Popper.js](https://popper.js.org/) for positioning. You must include popper.min.js before bootstrap.js or use `bootstrap.bundle.min.js` which contains Popper.js in order for tooltips to work!
- If you’re building our JavaScript from source, it requires util.js.
- Tooltips are opt-in for performance reasons, so **you must initialize them yourself**.
- Tooltips with zero-length titles are never displayed.
- Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
- Triggering tooltips on hidden elements will not work.
- Tooltips for `.disabled` or `disabled` elements must be triggered on a wrapper element.
- When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use `white-space: nowrap;` on your `<a>`s to avoid this behavior.
- Tooltips must be hidden before their corresponding elements have been removed from the DOM.
- Tooltips can be triggered thanks to an element inside a shadow DOM.

### Enable Tooltips Everywhere

One way to initialize all tooltips on a page would be to select them by their
`data-toggle` attribute:

```js
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
```

### Tooltip Examples

Tooltips can be used with a variety of different components.

{{< example id="example-tooltip" class="d-flex" >}}
<button class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Button Tooltip">
  Button
</button>

<div class="chip chip-solid chip-input ml-3" data-toggle="tooltip" data-placement="top" title="Chip Tooltip">
  <div class="chip-thumbnail"><img src="/img/headshot.png" alt=""></div>
  <div class="chip-text">Clifford</div>
  <div class="chip-delete-right"><i class="material-icons">cancel</i></div>
</div>

<i class="modus-icon material-icons ml-3" data-toggle="tooltip" data-placement="top" title="Icon Tooltip">settings</i>

<p class="ml-3 mb-0">
  Tooltips can even be used with
  <strong data-toggle="tooltip" data-placement="top" title="Text Tooltip">text</strong>
</p>
{{</ example >}}

### Tooltip Placement

Use the `data-placement` attribute to specify the tooltip's location.

<!-- prettier-ignore -->
{{< example id="example-tooltip-placement" >}}
<button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-primary ml-3" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-primary ml-3" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-primary ml-3" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
{{</ example >}}

### Tooltips with HTML

To use custom HTML inside a tooltip, enable `data-html="true"` and
place your HTML in the `title` attribute.

<!-- prettier-ignore -->
{{< example id="example-tooltip-html" >}}
<button type="button" class="btn btn-primary" data-toggle="tooltip" data-html="true" data-placement="top" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
{{</ example >}}

<script>
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({
      container: ".guide-body"
    });
  });
</script>
