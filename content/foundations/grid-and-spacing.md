---
title: "Spacing"
layout: "single"
description: "Space helps organize content, permitting consistent density and visual order that telegraphs our brand.
Space is a way to unify the padding, margins, and heights."
foundations: true
styleguideURL: "foundations/grid-and-spacing/"
---

## Overview

### Spacing scale

Use the spacing scale when building individual components. It includes
small increments needed to create appropriate spatial relationships for
detail-level designs. This scale is applied and used within all
components.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Level</th>
      <th>rem</th>
      <th>px</th>
      <th>Example</th>
    </tr>
  </thead>
  <tr>
    <td>Level 1</td>
    <td>0.25</td>
    <td>4</td>
    <td class="align-middle">
      <div class="d-inline-block pt-1 pr-1 bg-primary"></div>
    </td>
  </tr>
  <tr>
    <td>Level 2</td>
    <td>0.5</td>
    <td>8</td>
    <td class="align-middle">
      <div class="d-inline-block pt-2 pr-2 bg-secondary"></div>
    </td>
  </tr>
  <tr>
    <td>Level 3</td>
    <td>1</td>
    <td>16</td>
    <td class="align-middle">
      <div class="d-inline-block pt-3 pr-3 bg-success"></div>
    </td>
  </tr>
  <tr>
    <td>Level 4</td>
    <td>1.5</td>
    <td>24</td>
    <td class="align-middle">
      <div class="d-inline-block pt-4 pr-4 bg-warning"></div>
    </td>
  </tr>
  <tr>
    <td>Level 5</td>
    <td>3</td>
    <td>48</td>
    <td class="align-middle">
      <div class="d-inline-block pt-5 pr-5 bg-danger"></div>
    </td>
  </tr>
</table>

### Notation

Spacing utilities that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.

Where property is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

Where sides is one of:

- `t` - for classes that set `margin-top` or `padding-top`
- `b` - for classes that set `margin-bottom` or `padding-bottom`
- `l` - for classes that set `margin-left` or `padding-left`
- `r` - for classes that set `margin-right` or `padding-right`
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- `blank` - for classes that set a `margin` or `padding` on all 4 sides of the element

Where size is one of:

- `0` - for classes that eliminate the `margin` or `padding` by setting it to 0
- `1` - (by default) for classes that set the `margin` or `padding` to \$spacer \* .25
- `2` - (by default) for classes that set the `margin` or `padding` to \$spacer \_ .5
- `3` - (by default) for classes that set the `margin` or `padding` to \$spacer
- `4` - (by default) for classes that set the `margin` or `padding` to \$spacer \_ 1.5
- `5` - (by default) for classes that set the `margin` or `padding` to \$spacer \* 3
- `auto` - for classes that set the `margin` to auto

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

### Examples

Here are some representative examples of these classes:

```css
.mt-0 {
  margin-top: 0 !important;
}

.ml-1 {
  margin-left: 0.25rem !important;
}

.px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}
```

### Horizontal centering

Additionally, we also includes an `.mx-auto` class for horizontally centering fixed-width block level content—that is, content that has display: block and a width set—by setting the horizontal margins to auto.

{{< example id="example-mx-auto" >}}
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>
{{< /example >}}

### Negative margin

In CSS, `margin` properties can utilize negative values (`padding` cannot). As of 4.2, we’ve added negative margin utilities for every non-zero integer size listed above (e.g., `1`, `2`, `3`, `4`, `5`). These utilities are ideal for customizing grid column gutters across breakpoints.

The syntax is nearly the same as the default, positive margin utilities, but with the addition of n before the requested size. Here’s an example class that’s the opposite of `.mt-1`:

```css
.mt-n1 {
  margin-top: -0.25rem !important;
}
```

### Designing with space

Every part of a UI should be intentional including the empty space
between elements. The amount of space between items creates
relationships and hierarchy.

### Creating relationships

Elements in a design that are near each other are seen as being
meaningfully related. As more space is added between elements, their
perceived relationship weakens.

Patterns created through spacing can also create relationships. Elements
arranged in the same spacing pattern are seen as related pieces that
have equal weight.

Space can also be used to denote groups of associated information. This
creates content sections on a page without having to use lines or other
graphical elements as a divider.

### Creating hierarchy

Elements that have more spacing around them tend to be perceived as
higher in importance than elements that have less space around them.
Take this page for instance. The top level headers have more space
surrounding them giving them focus and prominence. Then as the headers
descend in importance they receive less space, signaling they are
subordinate.

Elements that are set close to each other can be easily overlooked.
Users may see the grouping but not process each individual item.
Therefore, if you have an element or content of high importance on the
page, consider giving it extra surrounding space to help it attract
focus.

### White space

Empty space — also known as white space — is important in design. It can
be used to break up sections on a page or to help create focus on
certain element(s). White space helps with information processing; too
much dense information can be disorienting or overwhelming for a user.
Sections of a UI are allowed to be dense, but the whole page should not
be crowded; there should be white space to let the user’s eye rest.
