---
title: "Radio Buttons"
layout: "single"
description: "Radio buttons are used when a list of two or more options are mutually exclusive, meaning the user must select only one option."
components: true
keywords: forms, form
aliases:
  - "/components/radio/"
styleguideURL: "components/radio-buttons/"
---

## Overview

To use custom radios, simply create a wrapper div with the class `.custom-control.custom-radio` and create `<input>` and `<label>` elements inside it.

Give the `<input>` a class of `.custom-control-input` and the `<label>` a class of `.custom-control-label`.

### Radios

<!-- prettier-ignore-start -->

{{< example id="example-radio" class="d-flex" >}}

<div class="form-group">
  <div class="custom-control custom-radio">
    <input type="radio" checked="" class="custom-control-input" id="exampleRadio" name="exampleRadio" value="customEx">
    <label class="custom-control-label" for="exampleRadio">Radio 1</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="exampleRadio2" name="exampleRadio">
    <label class="custom-control-label" for="exampleRadio2">Radio 2</label>
  </div>
</div>
<div class="form-group ml-3">
  <div class="custom-control custom-radio">
    <input type="radio" disabled="" checked="" class="custom-control-input" id="exampleRadio3" name="exampleRadio2">
    <label class="custom-control-label" for="exampleRadio3">Disabled</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" disabled="" class="custom-control-input" id="exampleRadio4" name="exampleRadio2">
    <label class="custom-control-label" for="exampleRadio4">Disabled</label>
  </div>
</div>
{{</ example >}}
<!-- prettier-ignore-end -->
