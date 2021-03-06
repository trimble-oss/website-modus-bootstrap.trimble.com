---
title: "Alerts"
layout: "single"
description: "Alerts provide contextual information adjacent to items on the visible page. There are four types: error, warning, success, or informational."
lead: ""
components: true
images:
  - "/img/headers/components/alerts.png"
styleguideURL: "components/alerts/"
---

## Overview

Alerts are available for any length of text, as well as an optional dismiss button. For proper
styling, use one of the eight required contextual classes (e.g., `.alert-success`).
For inline dismissal, use the alerts jQuery plugin.

Add `class="alert"` along with contextual classes and `role="alert"` to a div to create an alert.

### Basic Alerts

{{< example id="example-alerts" >}}
<div class="alert alert-primary" role="alert">
  <i class="modus-icon material-icons alert-icon">info</i>
  <div>A basic Primary alert</div>
  <button type="button" class="close" data-dismiss="toast">
    <i class="modus-icon material-icons">close</i>
  </button>
</div>
<div class="alert alert-secondary" role="alert">
  <i class="modus-icon material-icons alert-icon">help</i>
  <div>A basic secondary alert with a button</div>
  <a href="#" class="btn btn-sm btn-text-secondary">Button</a>
</div>
<div class="alert alert-dark" role="alert">
  <i class="modus-icon material-icons alert-icon">info</i>
  <div>A basic <u>dark alert</u> with <em>text formatting</em></div>
</div>
<div class="alert alert-success fade show" role="alert">
  <i class="material-icons alert-icon">check_circle</i>
  <div>Success! A basic success alert with a dismiss icon</div>
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons">close</i>
  </button>
</div>
<div class="alert alert-danger fade show" role="alert">
  <i class="material-icons alert-icon">error</i>
  <div>Error! A basic error alert with a dismiss icon</div>
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons">close</i>
  </button>
</div>
<div class="alert alert-warning text-dark fade show" role="alert">
  <i class="modus-icon material-icons alert-icon">warning</i>
  <div>Warning! A basic warning alert with dark text and a dismiss icon</div>
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons">close</i>
  </button>
</div>
{{</ example >}}

### Alerts with Links

Use the `.alert-link` utility class to quickly provide matching colored links within
any alert.

{{< example id="example-alerts-links" >}}
<div class="alert alert-primary" role="alert">
  <i class="modus-icon material-icons alert-icon">info</i>
  <div>
    This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a
    click if you like.
  </div>
</div>
{{</ example >}}

### Alerts with Buttons

You can add a button to an alert using any button style. For best results with single line
alerts, use `.btn-sm`.

{{< example id="example-alerts-buttons" class="d-block" >}}
<div class="alert alert-primary" role="alert">
  <i class="modus-icon material-icons alert-icon">info</i>
  <div>A basic primary alert with a button</div>
  <a href="#" class="btn btn-sm btn-text-primary">Button</a>
</div>
{{</ example >}}

### Dismissible Alerts

Add `class="fade show"` to the alert and add a button with attributes
`class="close" data-dismiss="alert"` to add dismissible alerts

To use this, please review [Bootstrap documentation](https://getbootstrap.com/docs/4.6/components/alerts/#dismissing).

{{< example id="example-alerts-dismiss" >}}
<div class="alert alert-primary fade show" role="alert">
  <i class="modus-icon material-icons alert-icon">info</i>
  <div>A basic primary alert with a dismiss icon</div>
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons">close</i>
  </button>
</div>
{{</ example >}}

View [additional documentation on JavaScript behavior on Bootstrap's Alerts](https://getbootstrap.com/docs/4.6/components/alerts/#javascript-behavior).
