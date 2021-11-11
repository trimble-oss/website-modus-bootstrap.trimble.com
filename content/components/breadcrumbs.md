---
title: "Breadcrumbs"
layout: "single"
description: "The breadcrumb component is a secondary navigation pattern that shows hierarchy among content or traces a user’s path."
components: true
images:
  - "/img/headers/components/breadcrumbs.png"
styleguideURL: "components/breadcrumbs/"
---

## Overview

Breadcrumbs are created by adding a `.breadcrumb` class to an `<ol>` within a `<nav>` element. Each `<li>` within the list should have a class of `.breadcrumb-item`

The final list item should have an additional class of `.active`

For longer breadcrumb trails, use a `.dropdown` as one of your second list item to hold extra items within a dropdown menu.

### Default

<!-- prettier-ignore-start -->

{{< example id="example-breadcrumbs" >}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library </a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{{</ example >}}
<!-- prettier-ignore-end -->

### Breadcrumbs with Icons

<!-- prettier-ignore-start -->

{{< example id="example-breadcrumbs-icons" >}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><i class="modus-icons">dashboard</i><a href="#">Home</a></li>
    <li class="breadcrumb-item"><i class="material-icons">local_library</i><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page"><i class="modus-icons">clipboard</i>Data</li>
  </ol>
</nav>

{{</ example >}}
<!-- prettier-ignore-end -->

### Accessible Option

For accessible underlined links add the `.breadcrumb-underline` modifier to the `breadcrumb` list.

<!-- prettier-ignore-start -->

{{< example id="example-breadcrumbs-underline" >}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb-underline mb-0">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library </a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{{</ example >}}
<!-- prettier-ignore-end -->

### Behaviors

For implementations with large numbers of sub-directories, make use of dropdown that appears on click of ellipses as shown in the example below

<!-- prettier-ignore-start -->

{{< example id="example-breadcrumbs-underline" >}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb-underline mb-0">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item">
      <div class="dropdown">
        <button type="button" id="breadcrumbDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</button>
        <div class="dropdown-menu" aria-labelledby="breadcrumbDropdown">
          <a href="#" class="dropdown-item">Link1</a>
          <a href="#" class="dropdown-item">Link2</a>
          <a href="#" class="dropdown-item">Link3</a>
        </div>
      </div>
    </li>
    <li class="breadcrumb-item"><a href="#">Link1</a></li>
    <li class="breadcrumb-item active" aria-current="page">Current Page</li>
  </ol>
</nav>
{{</ example >}}
<!-- prettier-ignore-end -->
