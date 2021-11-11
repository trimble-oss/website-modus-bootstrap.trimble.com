---
title: "Modals"
layout: "single"
description: "Modals gather information, complete a subtask, or provide additional
  information without losing the context of an underlying page."
components: true
keywords: dialog
styleguideURL: "components/modals/"
---

## Overview

Modals are built with HTML, CSS, and JavaScript. They’re positioned over
everything else in the document and remove scroll from the
`<body>` so that modal content scrolls instead.

Clicking on the modal “backdrop” will automatically close the modal.

Bootstrap only supports one modal window at a time. Nested modals aren’t
supported as we believe them to be poor user experiences.

Modals use `position: fixed`, which can sometimes be a bit
particular about its rendering. Whenever possible, place your modal HTML in a
top-level position to avoid potential interference from other elements. You’ll
likely run into issues when nesting a `.modal` within another fixed
element.

Due to `position: fixed`, there are some caveats with using modals
on mobile devices. [See Bootstrap's browser support docs](https://getbootstrap.com/docs/4.6/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile)
for details.

Due to how HTML5 defines its semantics, [the `autofocus` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus)
has no effect in Bootstrap modals. To achieve the same effect, use some custom
JavaScript:

```js
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
```

### Basic Modal

Below is a static modal example (meaning its `position` and
`display` have been overridden). Included are the modal header,
modal body (required for `padding`), and modal footer (optional).
We ask that you include modal headers with dismiss actions whenever possible,
or provide another explicit dismiss action.

Inside of `.modal-header`, include a `.modal-title` to properly style the Modal Title.

<!-- prettier-ignore-start -->

{{< example id="example-basic-modal" >}}

<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        Modal body text goes here.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}
<!-- prettier-ignore-end -->

### Live Example

To use a modal, add `data-toggle="modal"` to your trigger button, set the `data-target` to your `.modal`'s ID and add a class of `.modal-dialog-centered` to your `.modal-dialog` to vertically center your modal.

{{< example id="example-center-modal" >}}

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal-title-1">
          Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

### Optional Sizes

Modals have three optional sizes, available via modifier classes placed on .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

<table class="table bg-striped bg-white border">
  <thead>
    <tr>
      <th>Size</th>
      <th>Class</th>
      <th>Modal max-width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Small</td>
      <td><code>.modal-sm</code></td>
      <td><code>300px</code></td>
    </tr>
    <tr>
      <td>Default</td>
      <td class="text-muted">None</td>
      <td><code>500px</code></td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>.modal-lg</code></td>
      <td><code>800px</code></td>
    </tr>
    <tr>
      <td>Extra large</td>
      <td><code>.modal-xl</code></td>
      <td><code>1140px</code></td>
    </tr>
  </tbody>
</table>

{{< example id="example-modal-sizes" >}}

<!-- Extra large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">
  Extra large modal
</button>

<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleExtraLargeModalScrollableTitle">
          Extra Large Modal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<!-- Large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
  Large modal
</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleLargeModalScrollableTitle">
          Large Modal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">
  Small modal
</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleSmallModalScrollableTitle">
          Small Modal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>
{{</ example >}}
