---
title: "Pagination"
layout: "single"
description: "Pagination affords navigation between pages of content, and it highlights which page is currently in view."
components: true
styleguideURL: "components/pagination/"
---

## Overview

We use a large block of connected links for our pagination, making links hard
to miss and easily scalable—all while providing large hit areas. Pagination is
built with list HTML elements so screen readers can announce the number of
available links. Use a wrapping `<nav>` element to identify
it as a navigation section to screen readers and other assistive technologies.

### Example

To use paginations, create a `<nav>` wrapper with
`<ul>` of class `.pagination`

Each `<li>` item should have a class of
`.page-item`

Each `<a>` inside each list item should have a class of
`.page-link`

{{< example id="example-pagination" >}}
<nav aria-label="...">
  <ul class="pagination m-0">
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">chevron_left</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">more_horizontal</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        3
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        4
      </a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">5 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        6
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        7
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">more_horizontal</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">chevron_right</i>
      </a>
    </li>
  </ul>
</nav>
{{</ example >}}

### Disabled and active states

Use `.disabled` to make links appear un-clickable and
`.active` to indicate the current page.

{{< example id="example-pagination-disabled" >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2 (active) <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
  </ul>
</nav>
{{</ example >}}

### Sizing

Add `.pagination-sm` and `.pagination-lg` to your
`.pagination` for additional sizes.

{{< example id="example-pagination-sizing" >}}
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">chevron_left</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">more_horizontal</i>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">more_horizontal</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">chevron_right</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">chevron_left</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">more_horizontal</i>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">more_horizontal</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons">chevron_right</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{</ example >}}
