---
title: "Lists"
layout: "single"
description: "A list can be used to display content related to a single subject."
lead: A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.
components: true
styleguideURL: "components/lists/"
---

## Overview

Basic code structure involves using unordered lists. Add `.list-group` to the `<ul>`
and `.list-group-item` to the `<li>` tag. Add `.active `to a `.list-group-item` to
indicate the current active selection.

### Basic List

The most basic list group is an unordered list with list items and the proper
classes. Build upon it with the options that follow, or with your own CSS as
needed.

{{< example id="example-list" >}}
<h6>List Items</h6>
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{{< /example >}}

### List Items

The most basic list group is an unordered list with list items and the proper
classes. Build upon it with the options that follow, or with your own CSS as
needed.

Use `.list-item-left-control`,
`.list-item-right-control`, and
`.list-item-leftright-control` to add custom controls, buttons, or
icons to list items. Be sure to include `.modus-icon` for 3rd party
icons.

{{< example id="example-list-items" >}}
<h6>List Items</h6>
<ul class="list-group">
  <li class="list-group-item active">List Item (active)</li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch1">
      <label class="custom-control-label" for="listSwitch1"></label>
    </div>
    <span>Left Switch</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Switch</span>
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch2">
      <label class="custom-control-label" for="listSwitch2"></label>
    </div>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" checked="" class="custom-control-input" id="customCheck-list" name="example1">
      <label class="custom-control-label" for="customCheck-list"></label>
    </div>
    <span>Left Checkbox</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" checked="" class="custom-control-input" id="customRadio-list" name="example4" value="customEx">
      <label class="custom-control-label" for="customRadio-list"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" disabled="" class="custom-control-input disabled" id="customRadio-list2" name="example4" value="customEx">
      <label class="custom-control-label" for="customRadio-list2"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item disabled">List Item (disabled)</li>
  <li class="list-group-item list-item-left-control">
    <i class="modus-icon material-icons">settings</i>
    <span>Left Icon</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Icon</span>
    <i class="modus-icon material-icons">settings</i>
  </li>
  <li class="list-group-item list-item-leftright-control">
    <i class="modus-icon material-icons">settings</i>
    <span>Both Icons</span>
    <i class="icon modus-icons">check</i>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    List with Badge
    <span class="badge badge-primary badge-pill">14</span>
  </li>
</ul>
{{< /example >}}

### Borderless Lists

Add a class of `.list-group-borderless` to your List Group for a
borderless variant.

{{< example id="example-list-borderless" >}}
<h6>List Items</h6>
<ul class="list-group list-group-borderless">
  <li class="list-group-item active">List Item (active)</li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-borderless1">
      <label class="custom-control-label" for="listSwitch-borderless1"></label>
    </div>
    <span>Left Switch</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Switch</span>
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-borderless2">
      <label class="custom-control-label" for="listSwitch-borderless2"></label>
    </div>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" checked="" class="custom-control-input" id="customCheck-borderless1" name="borderless1">
      <label class="custom-control-label" for="customCheck-borderless1"></label>
    </div>
    <span>Left Checkbox</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" checked="" class="custom-control-input" id="customRadio-borderless1" name="borderless2" value="customEx">
      <label class="custom-control-label" for="customRadio-borderless1"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio-borderless2" name="borderless2" value="customEx">
      <label class="custom-control-label" for="customRadio-borderless2"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <i class="modus-icon material-icons">settings</i>
    <span>Left Icon</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Icon</span>
    <i class="modus-icon material-icons">settings</i>
  </li>
  <li class="list-group-item list-item-leftright-control">
    <i class="modus-icon material-icons">settings</i>
    <span>Both Icons</span>
    <i class="icon modus-icons">check</i>
  </li>
</ul>
{{< /example >}}

### Condensed Lists

Add a class of `.list-group-condensed` for a smaller variant.

{{< example id="example-list-condensed" >}}
<h6>List Items</h6>
<ul class="list-group list-group-condensed">
  <li class="list-group-item active">List Item (active)</li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-cond">
      <label class="custom-control-label" for="listSwitch-cond"></label>
    </div>
    <span>Left Switch</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Switch</span>
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-cond2">
      <label class="custom-control-label" for="listSwitch-cond2"></label>
    </div>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" checked="" class="custom-control-input" id="customCheck-cond1" name="cond1">
      <label class="custom-control-label" for="customCheck-cond1"></label>
    </div>
    <span>Left Checkbox</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" checked="" class="custom-control-input" id="customRadio-cond2" name="cond2" value="customEx">
      <label class="custom-control-label" for="customRadio-cond2"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio-list5" name="cond2" value="customEx">
      <label class="custom-control-label" for="customRadio-list5"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <i class="modus-icon material-icons">settings</i>
    <span>Left Icon</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Icon</span>
    <i class="modus-icon material-icons">settings</i>
  </li>
  <li class="list-group-item list-item-leftright-control">
    <i class="modus-icon material-icons">settings</i>
    <span>Both Icons</span>
    <i class="icon modus-icons">check</i>
  </li>
</ul>
{{< /example >}}
