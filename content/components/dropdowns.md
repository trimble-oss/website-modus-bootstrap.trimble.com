---
title: "Dropdowns"
layout: "single"
description: "Dropdowns present a list of options that can be used to filter or sort existing content. They
  can also be used as menus. Their use as menus can be seen in tabs. At a smaller screen size,
  the tabs collapse into a dropdown."
components: true
styleguideURL: "components/dropdowns/"
---

## Overview

Please read this article when using dropdown menu for more styles and JavaScript calls.
<a href="https://getbootstrap.com/docs/4.6/components/dropdowns/#overview">Bootstrap Dropdown</a>

To use a dropdown, create a `.dropdown` parent container. The container should have 2
children, a button element and a `.dropdown-menu` container. The button should have
appropriate `.btn-` styling as well as a `.dropdown-toggle` class to create
a caret icon. The menu can contain any number of `.dropdown-item` links.

### Simple Button Dropdowns

{{< example id="example-dropdowns" class="d-flex" >}}
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<div class="dropdown ml-3">
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Anchor tag
  </a>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{{</ example >}}

### Color Variants

Button Dropdowns can be any variety of button style and color. Simply use the desired
`.btn-{theme-color}` class.

<div class="guide-example-block d-flex position-relative">
  <div class="guide-sample bg-transparent">
    <div class="d-flex">
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div class="dropdown ml-3">
        <button class="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div class="dropdown ml-3">
        <button class="btn btn-dark dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
    <div class="d-flex mt-3">
      <div class="dropdown">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div class="dropdown ml-3">
        <button class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div class="dropdown ml-3">
        <button class="btn btn-outline-dark dropdown-toggle" href="#" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
    <div class="d-flex mt-3">
      <div class="dropdown">
        <button class="btn btn-text-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div class="dropdown ml-3">
        <button class="btn btn-text-secondary dropdown-toggle" type="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div class="dropdown ml-3">
        <button class="btn btn-text-dark dropdown-toggle" type="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Button
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  </div>
</div>

### Dropdown Button Sizing

Use `.btn-lg` or `.btn-sm` to change the size of the dropdown button.

### Icon Button Dropdowns

Icon buttons can also function as dropdowns. Simply remove `.button-toggle` to
eliminate the caret icon.

{{< example id="example-dropdown-icon-btn-dropdown" >}}
<div class="dropdown">
  <button class="btn btn-lg btn-icon-only btn-text-dark" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i class="modus-icon material-icons">settings</i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{{</ example >}}

### Dropdown Directions

Dropdowns can be triggered in 4 different directions. Simply use `.dropdown` or
`.dropup` on the parent container.

{{< example id="example-dropdown-direction" class="d-flex flex-row">}}

<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Down
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<div class="dropup ml-3">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Up
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{{</ example >}}

### Menu Alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side
of its parent. Add `.dropdown-menu-right` to a `.dropdown-menu` to right
align the dropdown menu.

{{< example id="example-dropdown-menu-align" >}}
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Right-aligned
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{{</ example >}}

## Dropdown Menus

Dropdown menu items don't <em>have to</em> be links. You also have the option of using
`<button>` elements.

{{< example id="example-dropdown-menu" >}}
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{{</ example >}}

### Sizes

For niche cases, dropdown menus can be given a max-height using the following classes:

- `.dropdown-menu-sm`- 140px
- `.dropdown-menu-md` - 240px
- `.dropdown-menu-lg` - 400px

{{< example id="example-dropdown-sizes" >}}

<div class="dropdown-menu dropdown-menu-sm">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
<div class="dropdown-menu dropdown-menu-md">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
<div class="dropdown-menu dropdown-menu-lg">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{{</ example >}}

### Active

Add an `.active` class to items to style them as active.

{{< example id="example-dropdown-active" >}}

<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{{</ example >}}

### Disabled

Add an `.disabled` class to items to style them as disabled.

{{< example id="example-dropdown-disabled" >}}

<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item disabled" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{{</ example >}}

### Headers

Add a header to label sections of actions in any dropdown menu.

{{< example id="example-dropdown-headers" >}}

<div class="dropdown-menu">
  <h6 class="dropdown-header" id="dropdown-header">Dropdown header</h6>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
</div>
{{</ example >}}

### Dividers

Separate groups of related menu items with a divider.

<div class="guide-example-block d-flex position-relative">
  <div class="guide-sample menu-example">
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>

### Text

Place any freeform text within a dropdown menu with text. **Note:** you'll likely
need additional sizing styles to constrain the menu width.

{{< example id="example-dropdown-text" >}}

<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
{{</ example >}}

### Forms

Put a form within a dropdown menu, or make it into a dropdown menu, and use
<a href="/utilities/padding-and-margin/">margin or padding utilities</a> to give it the negative space you require.

{{< example id="example-dropdown-form" >}}

<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
{{</ example >}}

<script>
  $(".dropdown-toggle").dropdown({
    display: "static"
  });
</script>
