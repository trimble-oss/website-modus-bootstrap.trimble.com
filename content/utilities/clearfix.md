---
title: "Clearfix"
layout: "single"
description: "Quickly and easily clear floated content within a container by adding a clearfix utility."
utilities: true
hideToc: true
---

Easily clear `floats` by adding `.clearfix` <strong>to the parent element.</strong>

---

{{< example id="example-clearfix" show_preview="false" >}}
<div class="clearfix">...</div>
{{< /example >}}

The following example shows how the clearfix can be used. Without the clearfix, the wrapping div would not span the buttons, which would cause a broken layout.

{{< example id="example-clearfix-float" >}}
<div class="bg-dark clearfix">
  <button class="btn btn-secondary float-left">Example Button Floated Left</button>
  <button class="btn btn-secondary float-right">Example Button Floated Right</button>
</div>
{{< /example >}}
