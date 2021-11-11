---
title: "Vertical Alignment"
layout: "single"
description: "Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."
utilities: true
hideToc: true
---

Change the alignment of elements with the `vertical-alignment` utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.

Choose from `.align-baseline`, `.align-top`, `.align-middle`,
`.align-bottom`, `.align-text-bottom`, and `.align-text-top` as needed.

With inline elements:

<!-- prettier-ignore-start -->
{{< example id="example-align" class="notranslate">}}
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>
{{</ example >}}
<!-- prettier-ignore-end -->

With table cells:

<!-- prettier-ignore-start -->
{{< example id="example-align-table" class="notranslate">}}
<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>
{{</ example >}}
<!-- prettier-ignore-end -->
