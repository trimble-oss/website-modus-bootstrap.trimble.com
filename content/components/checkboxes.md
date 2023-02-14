---
title: "Checkboxes"
layout: "single"
description: "Checkboxes are used for a list of options where the user may select multiple options, including all or none."
components: true
images:
  - "/img/components/headers/checkboxes.png"
keywords: forms, form
styleguideURL: "components/checkboxes/"
---

## Overview

Checkboxes use the `.custom-control` class as a
wrapper. They also both use `<input type="checkbox">` and
have a `<label>` with a class of `.custom-control-label`.

Checkboxes add the `.custom-checkbox` class to their
`.custom-control` wrapper.

Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

{{< example id="example-checkboxes" >}}
<div class="form-group">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" checked class="custom-control-input" id="exampleCheckbox1">
    <label class="custom-control-label" for="exampleCheckbox1">Checkbox</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="exampleCheckbox2">
    <label class="custom-control-label" for="exampleCheckbox2">Checkbox</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" disabled checked class="custom-control-input" id="exampleCheckbox3">
    <label class="custom-control-label" for="exampleCheckbox3">Disabled</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" disabled class="custom-control-input" id="exampleCheckbox4">
    <label class="custom-control-label" for="exampleCheckbox4">Disabled</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="exampleCheckbox5">
    <label class="custom-control-label" for="exampleCheckbox5">Indeterminate State</label>
  </div>
</div>
{{</ example >}}

<script>
  $('#exampleCheckbox5').prop('indeterminate', true)
</script>

#### Inline

{{< example id="example-checkboxes-inline" >}}
<div class="custom-control custom-checkbox custom-control-inline mr-3">
  <input type="checkbox" checked class="custom-control-input" id="exampleCheckboxInline1">
  <label class="custom-control-label" for="exampleCheckboxInline1">Checkbox</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline mr-3">
  <input type="checkbox" class="custom-control-input" id="exampleCheckboxInline2">
  <label class="custom-control-label" for="exampleCheckboxInline2">Checkbox</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline mr-3">
  <input type="checkbox" class="custom-control-input" id="exampleCheckboxInline3">
  <label class="custom-control-label" for="exampleCheckboxInline3">Checkbox</label>
</div>
{{</ example >}}
