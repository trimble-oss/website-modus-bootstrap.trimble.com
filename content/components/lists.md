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
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
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
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
    <span>Left Icon</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Icon</span>
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
  </li>
  <li class="list-group-item list-item-leftright-control">
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
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
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
    <span>Left Icon</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Icon</span>
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
  </li>
  <li class="list-group-item list-item-leftright-control">
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
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
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-sm">
      <label class="custom-control-label" for="listSwitch-sm"></label>
    </div>
    <span>Left Switch</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Switch</span>
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-sm2">
      <label class="custom-control-label" for="listSwitch-sm2"></label>
    </div>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" checked="" class="custom-control-input" id="customCheck-sm1" name="sm1">
      <label class="custom-control-label" for="customCheck-sm1"></label>
    </div>
    <span>Left Checkbox</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" checked="" class="custom-control-input" id="customRadio-sm2" name="sm2" value="customEx">
      <label class="custom-control-label" for="customRadio-sm2"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio-list5" name="sm2" value="customEx">
      <label class="custom-control-label" for="customRadio-list5"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
    <span>Left Icon</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Icon</span>
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
  </li>
  <li class="list-group-item list-item-leftright-control">
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
    <span>Both Icons</span>
    <i class="icon modus-icons">check</i>
  </li>
</ul>
{{< /example >}}

### Large Lists

Add the `.list-group-lg` modifier class for a larger variant.

{{< example id="example-list-lg" >}}
<h6>List Items</h6>
<ul class="list-group list-group-lg">
  <li class="list-group-item active">List Item (active)</li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-lg">
      <label class="custom-control-label" for="listSwitch-lg"></label>
    </div>
    <span>Left Switch</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Switch</span>
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-lg2">
      <label class="custom-control-label" for="listSwitch-lg2"></label>
    </div>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" checked="" class="custom-control-input" id="customCheck-lg1" name="lg1">
      <label class="custom-control-label" for="customCheck-lg1"></label>
    </div>
    <span>Left Checkbox</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" checked class="custom-control-input" id="customRadio-lg2" name="lg2" value="customEx">
      <label class="custom-control-label" for="customRadio-lg2"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" id="customRadio-list5" name="sm2" value="customEx">
      <label class="custom-control-label" for="customRadio-list5"></label>
    </div>
    <span>Left Radio Button</span>
  </li>
  <li class="list-group-item list-item-left-control">
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
    <span>Left Icon</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Icon</span>
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
  </li>
  <li class="list-group-item list-item-leftright-control">
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
    <span>Both Icons</span>
    <i class="icon modus-icons">check</i>
  </li>
</ul>
{{< /example >}}
