---
title: "Toasts"
menuTitle: "Toasts"
layout: "single"
description: "Toasts are types of alerts."
keywords: alert
lead: ""
components: true
styleguideURL: "components/toasts/"
---

## Overview

Toasts are available for any length of text, as well as an optional dismiss button. For proper
styling, use one of the eight required contextual classes (e.g., .`toast-success`).
For inline dismissal, use the alerts jQuery plugin.

Add `class="toast"` along with contextual classes and `role="alert"` to a
div to create an toast.

### Toasts

{{< example id="example-toasts" class="flex-column" >}}
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a toast.
  <button type="button" class="close" data-dismiss="toast" aria-label="Close">
    <i class="modus-icon modus-icons" aria-hidden="true">close</i>
  </button>
</div>
<div class="toast toast-dark show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a dark toast.
  <button type="button" class="close" data-dismiss="toast" aria-label="Close">
    <i class="modus-icon modus-icons" aria-hidden="true">close</i>
  </button>
</div>
<div class="toast toast-primary show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a primary toast.
  <button type="button" class="close" data-dismiss="toast" aria-label="Close">
    <i class="modus-icon modus-icons" aria-hidden="true">close</i>
  </button>
</div>
<div class="toast toast-secondary show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a secondary toast.
  <button type="button" class="close" data-dismiss="toast" aria-label="Close">
    <i class="modus-icon modus-icons" aria-hidden="true">close</i>
  </button>
</div>
<div class="toast toast-danger show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a danger toast.
  <button type="button" class="close" data-dismiss="toast" aria-label="Close">
    <i class="modus-icon modus-icons" aria-hidden="true">close</i>
  </button>
</div>
<div class="toast toast-success show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a success toast.
  <button type="button" class="close" data-dismiss="toast" aria-label="Close">
    <i class="modus-icon modus-icons" aria-hidden="true">close</i>
  </button>
</div>
{{</ example >}}
