---
title: "Buttons"
layout: "single"
description: "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize
an action, either in the background or foreground of an experience."
components: true
# loadFontAwesome: true
styleguideURL: "components/buttons/"
---

## Overview

The `.btn` classes are designed to be used with the
`<button>` element. However, you can also use these classes on
`<a>` or `<input>` elements (though some browsers may apply a
slightly different rendering).

When using button classes on
`<a>` elements that are used to trigger in-page functionality (like collapsing
content), rather than linking to new pages or sections within the current page, these links should
be given a `role="button"` to appropriately convey their purpose to assistive technologies such as
screen readers.

## Button Types

Buttons have both a style class and a color class which, when combined, give a wide area of uses
and connotations.

The following are the three main types of buttons available:

- Solid: `.btn-{theme-color}`</li>
- Outline: `.btn-outline-{theme-color}`</li>
- Text: `.btn-text-{theme-color}`</li>

### Solid Buttons

Solid buttons should only be used with the Primary, Secondary, and Tertiary theme colors.

`class="btn-{theme-color}"`

{{< example id="example-btn" >}}
<button class="btn btn-primary">Button</button>
<button class="btn btn-secondary">Button</button>
<button class="btn btn-tertiary">Button</button>
{{</ example >}}

### Outline Buttons

Outline buttons should only be used with the Primary, and Dark theme colors.

`class="btn-outline-{theme-color}"`

{{< example id="example-btn-outline">}}
<button class="btn btn-outline-primary">Button</button>
<button class="btn btn-outline-dark">Button</button>
{{</ example >}}

### Text Buttons

Text buttons should only be used with the Primary theme color.

`class="btn-text-{theme-color}"`

## Icon Buttons

Modus has built in support for both icon only buttons and buttons with both icons and text.

### Text and Icons

Icons can be used within buttons by giving the icon a class of `.modus-icon` in
addition to a class of either `.left-icon` or `.right-icon`, depending on
the desired position.

### Icon Only Buttons

When using Icon Only Buttons, **DO NOT** add any additional text inside the button.
Give the button a class of `.btn-icon-only` and give the icon a class of
`.modus-icon`.

**Note**: Text icon-only buttons can be used with the Primary or Dark theme color.

<!--prettier-ignore -->
{{< example id="example-btn-icon" >}}
<button class="btn btn-icon-only btn-text-dark">
  <i class="modus-icon material-icons">settings</i>
</button>
  <button class="btn btn-icon-only btn-text-secondary">
<i class="modus-icon material-icons">settings</i>
</button>
{{</ example >}}

## Button Sizes

Buttons default to "medium" size but there are also large and small options available.

### Small Buttons

`class="btn btn-sm"`

<!--prettier-ignore -->
{{< example id="example-btn-small" >}}
<button class="btn btn-sm btn-primary">Button</button>
<button class="btn btn-sm btn-secondary">Button</button>
<button class="btn btn-sm btn-tertiary">Button</button>
<button class="btn btn-sm btn-outline-primary">Button</button>
<button class="btn btn-sm btn-outline-dark">Button</button>
<button class="btn btn-sm btn-text-primary">Button</button>
<button class="btn btn-sm btn-primary">
  <i class="modus-icon material-icons left-icon">settings</i>Button
</button>
<button class="btn btn-sm btn-icon-only btn-text-dark">
  <i class="modus-icon material-icons">settings</i>
</button>
<button class="btn btn-sm btn-icon-only btn-text-secondary">
  <i class="modus-icon material-icons">settings</i>
</button>
{{</ example >}}

### Large Buttons

`class="btn btn-lg"`

<!--prettier-ignore -->
{{< example id="example-btn-lg" >}}
<button class="btn btn-lg btn-primary">Button</button>
<button class="btn btn-lg btn-secondary">Button</button>
<button class="btn btn-lg btn-tertiary">Button</button>
<button class="btn btn-lg btn-outline-primary">Button</button>
<button class="btn btn-lg btn-outline-dark">Button</button>
<button class="btn btn-lg btn-text-primary">Button</button>
<button class="btn btn-lg btn-primary">
  <i class="modus-icon material-icons left-icon">settings</i>Button
</button>
<button class="btn btn-lg btn-icon-only btn-text-dark">
  <i class="modus-icon material-icons">settings</i>
</button>
<button class="btn btn-lg btn-icon-only btn-text-secondary">
  <i class="modus-icon material-icons">settings</i>
</button>
{{</ example >}}

### Full-width (Block) Buttons

`class="btn-block"`

{{< example id="example-btn-block" >}}
<button class="btn btn-block btn-primary">Button</button>
<button class="btn btn-block btn-outline-primary">Button</button>
<button class="btn btn-block btn-text-primary">Button</button>
{{</ example >}}

## Special Use Cases

<!--

### Dark Backgrounds

For specific use cases where a light colored button is needed against a dark background use a
tertiary solid, outline, or text button.

- `.btn-tertiary`
- `.btn-outline-tertiary`
- `.btn-text-tertiary`

{{< example id="example-btn-other" >}}
<button type="button" data-toggle="button" class="btn btn-tertiary">
  Button
</button>
<button type="button" data-toggle="button" class="btn btn-outline-tertiary">
  Button
</button>
<button type="button" data-toggle="button" class="btn btn-text-tertiary">
  Button
</button>
{{</ example >}}

<strong>Use case examples for light buttons.</strong>

{{< example show_markup="false" >}}
<div class="row">
  <div class="col">
    <div class="toast toast-dark show" role="alert" aria-live="assertive" aria-atomic="true">
      A Dark Toast
      <button type="button" data-toggle="button" class="btn btn-tertiary" data-dismiss="toast" aria-label="Close">
        Close
      </button>
    </div>
    <div class="toast toast-dark show" role="alert" aria-live="assertive" aria-atomic="true">
      A Dark Toast
      <button type="button" data-toggle="button" class="btn btn-outline-tertiary" data-dismiss="toast"
        aria-label="Close">
        Close
      </button>
    </div>
    <div class="toast toast-dark show" role="alert" aria-live="assertive" aria-atomic="true">
      A Dark Toast
      <button type="button" data-toggle="button" class="btn btn-text-tertiary" data-dismiss="toast" aria-label="Close">
        Close
      </button>
    </div>
  </div>
  <div class="col">
    <div class="card-body bg-trimble-blue-dark text-tertiary">
      <h5 class="card-title text-tertiary" id="dark-element">Dark Element</h5>
      <p class="card-text">
        This can be any element with a dark colored background.
      </p>
      <a href="#" class="btn btn-tertiary">Regular</a>
      <a href="#" class="btn btn-outline-tertiary">Outline</a>
      <a href="#" class="btn btn-text-tertiary">Text</a>
    </div>
  </div>
</div>
{{</ example >}}

-->

### Danger Button

A danger button should be used for permanent, destructive actions like delete.

`class="btn btn-danger"`

<!--prettier-ignore -->
{{< example id="example-btn-danger" >}}
<button class="btn btn-danger">Delete</button>
<button class="btn btn-danger btn-icon-only ml-1 mr-3">
  <i class="modus-icons">trash</i>
</button>
<button class="btn btn-text-danger">Delete</button>
<button class="btn btn-text-danger btn-icon-only ml-1 mr-3">
  <i class="modus-icons">trash</i>
</button>
{{</ example >}}
