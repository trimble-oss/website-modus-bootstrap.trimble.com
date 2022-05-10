---
title: "Interactions"
layout: "single"
description: "Utility classes that change how users interact with contents of a website."
utilities: true
hideToc: true
---

## Text selection

Change the way in which the content is selected when the user interacts with it.

{{< example id="example-d-inline" >}}
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto">This paragraph has default select behavior.</p>
<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
{{< /example >}}

Note: `user-select-all` is not supported on Internet Explorer.
