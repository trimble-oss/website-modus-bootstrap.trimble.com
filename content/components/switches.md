---
title: "Switches"
layout: "single"
description: "Switches are used to toggle functionality."
components: true
images:
  - "/img/headers/components/switches.png"
keywords: forms, form
styleguideURL: "components/switches/"
---

## Overview

Both checkboxes and switches use the `.custom-control` class as a
wrapper. They also both use `<input type="checkbox">` and
have a `<label>` with a class of `.custom-control-label`.
Switches add the `.custom-switch` class to their `.custom-control` wrapper.

{{< example id="example-switches" >}}
<div class="form-group">
  <div class="custom-control custom-switch">
    <input type="checkbox" checked class="custom-control-input" id="exampleSwitch1">
    <label class="custom-control-label" for="exampleSwitch1">Switch</label>
  </div>
  <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="exampleSwitch2">
    <label class="custom-control-label" for="exampleSwitch2">Switch</label>
  </div>
  <div class="custom-control custom-switch">
    <input type="checkbox" disabled checked class="custom-control-input" id="exampleSwitch3">
    <label class="custom-control-label" for="exampleSwitch3">Disabled</label>
  </div>
  <div class="custom-control custom-switch">
    <input type="checkbox" disabled class="custom-control-input" id="exampleSwitch4">
    <label class="custom-control-label" for="exampleSwitch4">Disabled</label>
  </div>
</div>
{{</ example >}}

#### Inline

{{< example id="example-switches-inline" >}}
<div class="form-group">
  <div class="custom-control custom-switch custom-control-inline mr-4">
    <input type="checkbox" checked class="custom-control-input" id="exampleSwitchInline1">
    <label class="custom-control-label" for="exampleSwitchInline1">Switch</label>
  </div>
  <div class="custom-control custom-switch custom-control-inline mr-4">
    <input type="checkbox" class="custom-control-input" id="exampleSwitchInline2">
    <label class="custom-control-label" for="exampleSwitchInline2">Switch</label>
  </div>
  <div class="custom-control custom-switch custom-control-inline mr-4">
    <input type="checkbox" disabled checked class="custom-control-input" id="exampleSwitchInline3">
    <label class="custom-control-label" for="exampleSwitchInline3">Disabled</label>
  </div>
  <div class="custom-control custom-switch custom-control-inline mr-4">
    <input type="checkbox" disabled class="custom-control-input" id="exampleSwitchInline4">
    <label class="custom-control-label" for="exampleSwitchInline4">Disabled</label>
  </div>
</div>
{{</ example >}}
