---
title: "Spinners"
layout: "single"
description: "Spinners indicate progress by showing users a loading state."
keywords: loading
components: true
styleguideURL: "components/spinners/"
---

## Overview

Our spinners are built entirely using HTML and CSS. You can toggle their
visibility using JavaScript in you project. Their appearance, alignment, and
sizing can be easily customized with our utility classes.

For accessibility purposes, each loader here includes `role="status"` and a
nested `<span class="sr-only">Loading...</span>`.

Expected ways to use spinners:

- Use the border spinners for a lightweight loading indicator.
- Spinners should be centered within its container unless inside of another element like a button and use flexbox utilities, or text alignment utilities for placement.

<!-- prettier-ignore-start -->
{{< example id="example-spinner-border" >}}
<div class="d-flex justify-content-start">
  <div class="pr-3">
    <button type="button" class="btn btn-primary display-active">
      <span class="spinner-border mr-1" style="height:16px;width:16px;color:#fff;"></span>
        Loading
    </button>
  </div>
  <div class="px-3">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div class="px-3">
    <div class="spinner-border text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div class="px-3">
    <div class="text-center text-primary">
      <div class="spinner-border"></div>
      <div class="h3 text-primary mt-3">Loading...</div>
    </div>
  </div>
</div>
{{</ example >}}
<!-- prettier-ignore-end -->
