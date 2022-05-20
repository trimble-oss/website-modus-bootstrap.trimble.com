---
title: "Padding and Margins"
layout: "single"
description: "Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance."
utilities: true
---

## Overview

Assign responsive-friendly `margin` or `padding` values to an element or a subset of its
sides with shorthand classes. Includes support for individual properties, all properties, and vertical and
horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to
`3rem`.

### Notation

Spacing utilities that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.

Where _property_ is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

Where <em>sides</em> is one of:


- `t` - for classes that set `margin-top` or `padding-top`
- `b` - for classes that set `margin-bottom` or `padding-bottom`
- `l` - for classes that set `margin-left` or `padding-left`
- `r` - for classes that set `margin-right` or `padding-right`
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a `margin` or `padding` on all 4 sides of the element


Where _size_ is one of:

- `0` - for classes that eliminate the `margin` or `padding` by setting it to
        `0`
- `1` - (by default) for classes that set the `margin` or `padding` to
        `$spacer * .25`
- `2` - (by default) for classes that set the `margin` or `padding` to
        `$spacer * .5`
- `3` - (by default) for classes that set the `margin` or `padding` to
        `$spacer`
- `4` - (by default) for classes that set the `margin` or `padding` to
        `$spacer * 1.5`
- `5` - (by default) for classes that set the `margin` or `padding` to
        `$spacer * 3`
- `auto` - for classes that set the `margin` to auto

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

### Examples

Here are some examples with `padding`:

{{< example class="example-padding text-white d-block" >}}
<div class="p-0">p-0</div>
<div class="p-1">p-1</div>
<div class="p-2">p-2</div>
<div class="p-3">p-3</div>
<div class="p-4">p-4</div>
<div class="p-5">p-5</div>
{{</ example >}}

Here are some examples with `margin`.

{{< example class="text-white example-margin" >}}
<div class="m-0">m-0</div>
<div class="m-1">m-1</div>
<div class="m-2">m-2</div>
<div class="m-3">m-3</div>
<div class="m-4">m-4</div>
<div class="m-5">m-5</div>
{{</ example >}}

### Horizontal Centering

Additionally, Bootstrap also includes an `.mx-auto` class for horizontally centering fixed-width
block level content—that is, content that has `display: block` and a `width` set—by
setting the horizontal margins to `auto`.

{{< example id="example-horizontal" >}}
<div class="mx-auto bg-light" style="width: 200px;">
  Centered element
</div>
{{</ example >}}
