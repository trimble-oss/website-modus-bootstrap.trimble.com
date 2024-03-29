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

In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

### Example

To use paginations, create a `<nav>` wrapper with
`<ul>` of class `.pagination`

Each `<li>` item should have a class of
`.page-item`

Each `<a>` inside each list item should have a class of
`.page-link`

{{< example id="example-pagination" >}}
<nav aria-label="Page navigation example">
  <ul class="pagination m-0">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <i class="modus-icons notranslate" aria-hidden="true">chevron_left</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons notranslate" aria-hidden="true">more_horizontal</i>
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
        <i class="modus-icons notranslate" aria-hidden="true">more_horizontal</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <i class="modus-icons notranslate" aria-hidden="true">chevron_right</i>
      </a>
    </li>
  </ul>
</nav>
{{</ example >}}

### Disabled and active states

Use `.disabled` to make links appear un-clickable and
`.active` to indicate the current page.

{{< example id="example-pagination-disabled" >}}
<nav aria-label="Page navigation example">
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

### Large

Add `.pagination-lg` to your `.pagination` for a larger size.

{{< example id="example-pagination-large" >}}
<nav aria-label="Page navigation example">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <i class="modus-icons notranslate" aria-hidden="true">chevron_left</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons notranslate" aria-hidden="true">more_horizontal</i>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons notranslate" aria-hidden="true">more_horizontal</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <i class="modus-icons notranslate" aria-hidden="true">chevron_right</i>
      </a>
    </li>
  </ul>
</nav>
{{</ example >}}


### Small

Add `.pagination-sm` to your `.pagination` for a smaller size.

{{< example id="example-pagination-small" >}}
<nav aria-label="Page navigation example">
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <i class="modus-icons notranslate" aria-hidden="true">chevron_left</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons notranslate" aria-hidden="true">more_horizontal</i>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="modus-icons notranslate" aria-hidden="true">more_horizontal</i>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <i class="modus-icons notranslate" aria-hidden="true">chevron_right</i>
      </a>
    </li>
  </ul>
</nav>
{{</ example >}}
