---
title: "Progress Bars"
layout: "single"
description: "Progress indicators express an unspecified wait time or display the length of a process."
components: true
aliases:
  - "/components/progress/"
styleguideURL: "components/progress-bars/"
---

## Overview

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use the HTML5
`<progress>` element, ensuring you can stack progress bars, animate them, and place text labels over them.

- We use the `.progress` as a wrapper to indicate the max value of the progress bar.
- We use the inner `.progress-bar` to indicate the progress so far.
- The `.progress-bar` requires an inline style, utility class, or custom CSS to set their width.
- The `.progress-bar` also requires some `role` and `aria` attributes to make it accessible.

Put that all together, and you have the following example.

### Examples

<!-- prettier-ignore-start -->

{{< example id="example-progress" class="d-flex bg-light flex-column" >}}
<div class="progress" aria-busy="true">
  <div class="progress-bar" role="progressbar" aria-label="Progress" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Please wait until the operation is finished.">
  </div>
</div>
<div class="text-left text-dark">
  <strong>Completed 25 of 100.</strong>
</div>
{{</ example >}}

### Small Variant

{{< example id="example-progress-sm" class="d-flex bg-light flex-column" >}}
<div class="progress progress-sm" aria-busy="true">
  <div class="progress-bar" role="progressbar" aria-label="Progress" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Please wait until the operation is finished.">
  </div>
</div>
{{</ example >}}

<!-- {{< example id="example-progress" class="d-flex bg-light flex-column" >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    25%
  </div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    50%
  </div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    75%
  </div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    100%
  </div>
</div>
{{</ example >}} -->
<!-- prettier-ignore-end -->
