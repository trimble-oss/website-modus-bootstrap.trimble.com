---
title: "Flex"
layout: "single"
description: "Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a
full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary."
utilities: true
---

### Enable flex behaviors

Apply `display` utilities to create a flexbox container and transform **direct children elements** into flex items. Flex containers and items are able to be modified further with additional flex properties.

{{< example id="example-d-flex" >}}
<div class="d-flex p-2 highlighted">I'm a flexbox container!</div>
{{< /example >}}

{{< example id="example-d-inline-flex" >}}
<div class="d-inline-flex p-2 highlighted">I'm an inline flexbox container!</div>
{{< /example >}}

Responsive variations also exist for `.d-flex` and `.d-inline-flex`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}<!-- prettier-ignore-->

- `.d{{ .abbr }}-flex`
- `.d{{ .abbr }}-inline-flex`
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

### Direction

Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the
horizontal class here as the browser default is `row`. However, you may encounter situations where
you needed to explicitly set this value (like responsive layouts).

Use `.flex-row` to set a horizontal direction (the browser default), or
`.flex-row-reverse` to start the horizontal direction from the opposite side.

{{< example id="example-d-direction-flex" >}}
<div class="d-flex flex-row highlighted mb-3">
  <div class="p-2 highlighted">Flex item 1</div>
  <div class="p-2 highlighted">Flex item 2</div>
  <div class="p-2 highlighted">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse highlighted">
  <div class="p-2 highlighted">Flex item 1</div>
  <div class="p-2 highlighted">Flex item 2</div>
  <div class="p-2 highlighted">Flex item 3</div>
</div>
{{< /example >}}

Use `.flex-column` to set a vertical direction, or `.flex-column-reverse` to start the vertical direction from the opposite side.

{{< example id="example-flex-" >}}
<div class="d-flex flex-column highlighted mb-3">
  <div class="p-2 highlighted">Flex item 1</div>
  <div class="p-2 highlighted">Flex item 2</div>
  <div class="p-2 highlighted">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse highlighted">
  <div class="p-2 highlighted">Flex item 1</div>
  <div class="p-2 highlighted">Flex item 2</div>
  <div class="p-2 highlighted">Flex item 3</div>
</div>
{{< /example >}}

Responsive variations also exist for `flex-direction`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}<!-- prettier-ignore-->

- `.flex{{ .abbr }}-row`
- `.flex{{ .abbr }}-row-reverse`
- `.flex{{ .abbr }}-column`
- `.flex{{ .abbr }}-column-reverse`
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

### Justify Content

Use `justify-content` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if `flex-direction: column`). Choose from `start` (browser default), `end`, `center`, `between`, or `around`.

<div class="bd-example">
  <div class="d-flex justify-content-start bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-end bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-center bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-between bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-around bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-evenly bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{{< example id="example-flex-" >}}
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
{{</ example >}}

Responsive variations also exist for `justify-content`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}

- `.justify-content{{ .abbr }}-start`
- `.justify-content{{ .abbr }}-end`
- `.justify-content{{ .abbr }}-center`
- `.justify-content{{ .abbr }}-between`
- `.justify-content{{ .abbr }}-around`
- `.justify-content{{ .abbr }}-evenly`
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

### Align Items

Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

<div class="bd-example">
  <div class="d-flex align-items-start bd-highlight mb-3" style="height: 100px;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-end bd-highlight mb-3" style="height: 100px;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-center bd-highlight mb-3" style="height: 100px;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-baseline bd-highlight mb-3" style="height: 100px;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-stretch bd-highlight" style="height: 100px;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{{< example id="example-flex-align-items" >}}
<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>
{{</ example >}}

Responsive variations also exist for `align-items`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}

- `.align-items{{ .abbr }}-start`
- `.align-items{{ .abbr }}-end`
- `.align-items{{ .abbr }}-center`
- `.align-items{{ .abbr }}-baseline`
- `.align-items{{ .abbr }}-stretch`
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

### Align Self

{{< example id="example-flex-align-self" >}}
<div class="align-self-start">Aligned flex item</div>
<div class="align-self-end">Aligned flex item</div>
<div class="align-self-center">Aligned flex item</div>
<div class="align-self-baseline">Aligned flex item</div>
<div class="align-self-stretch">Aligned flex item</div>
{{</ example >}}

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-self{{ .abbr }}-start`
- `.align-self{{ .abbr }}-end`
- `.align-self{{ .abbr }}-center`
- `.align-self{{ .abbr }}-baseline`
- `.align-self{{ .abbr }}-stretch`
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

### Fill

{{< example id="example-flex-fill" >}}
<div class="d-flex highlighted">
  <div class="p-2 flex-fill highlighted">Flex item with a lot of content</div>
  <div class="p-2 flex-fill highlighted">Flex item</div>
  <div class="p-2 flex-fill highlighted">Flex item</div>
</div>
{{</ example >}}

Responsive variations also exist for `flex-fill`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}

- `.flex{{ .abbr }}-fill`
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

### Grow and Shrink

Use `.flex-grow-*` utilities to toggle a flex item's ability to grow to fill available space. In the example below, the `.flex-grow-1` elements uses all available space it can, while allowing the remaining two flex items their necessary space.

{{< example id="example-flex-grow-shrink" >}}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Third flex item</div>
</div>
{{< /example >}}

Use `.flex-shrink-*` utilities to toggle a flex item's ability to shrink if necessary. In the example below, the second flex item with `.flex-shrink-1` is forced to wrap its contents to a new line, "shrinking" to allow more space for the previous flex item with `.w-100`.

{{< example id="example-flex-shrink" >}}
<div class="d-flex bd-highlight">
  <div class="p-2 w-100 bd-highlight">Flex item</div>
  <div class="p-2 flex-shrink-1 bd-highlight">Flex item</div>
</div>
{{< /example >}}

Responsive variations also exist for `flex-grow` and `flex-shrink`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-{grow|shrink}-0`
- `.flex{{ .abbr }}-{grow|shrink}-1`
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

### Auto Margins

Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (`.mr-auto`), and pushing two items to the left (`.ml-auto`).

{{< example id="example-flex-auto-margins" >}}
<div class="d-flex highlighted mb-3">
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
</div>

<div class="d-flex highlighted mb-3">
  <div class="mr-auto p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
</div>

<div class="d-flex highlighted mb-3">
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="ml-auto p-2 highlighted">Flex item</div>
</div>
{{</ example >}}

{{< example id="example-flex-" >}}

{{</ example >}}

### With align-items

Vertically move one flex item to the top or bottom of a container by mixing `align-items`, `flex-direction: column`, and `margin-top: auto` or `margin-bottom: auto`.

{{< example id="example-flex-align-items" >}}
<div class="d-flex align-items-start flex-column highlighted mb-3" style="height: 200px;">
  <div class="mb-auto p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
</div>

<div class="d-flex align-items-end flex-column highlighted mb-3" style="height: 200px;">
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="mt-auto p-2 highlighted">Flex item</div>
</div>
{{</ example >}}

### Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.flex-nowrap`, wrapping with `.flex-wrap`, or reverse wrapping with `.flex-wrap-reverse`.

{{< example id="example-flex-wrap" >}}
<div class="d-flex flex-nowrap">
  ...
</div>
{{</ example >}}

{{< highlight html >}}

<div class="d-flex flex-wrap-reverse">
  ...
</div>
{{< /highlight >}}

Responsive variations also exist for `flex-wrap`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}

- `.flex{{ .abbr }}-nowrap`
- `.flex{{ .abbr }}-wrap`
- `.flex{{ .abbr }}-wrap-reverse`
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

### Order

Change the visual order of specific flex items with a handful of `order` utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As `order` takes any integer value (e.g., `5`), add custom CSS for any additional values needed.

{{< example id="example-flex-order" >}}
<div class="d-flex flex-nowrap highlighted">
  <div class="order-3 p-2 highlighted">First flex item</div>
  <div class="order-2 p-2 highlighted">Second flex item</div>
  <div class="order-1 p-2 highlighted">Third flex item</div>
</div>
{{</ example >}}

Responsive variations also exist for `order`.

<!-- prettier-ignore-start -->

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints -}}
{{- range (seq 0 5) }}<!-- prettier-ignore-->

- `.order{{ $bp.abbr }}-{{ . }}`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}
<!-- prettier-ignore-end -->

### Align Content

Use `align-content` utilities on flexbox containers to align flex items together on the cross axis. Choose from start (browser default), `end`, `center`, `between`, `around`, or `stretch`. To demonstrate these utilities, we’ve enforced `flex-wrap: wrap` and increased the number of flex items.

**Heads up!** This property has no effect on single rows of flex items.

{{< example id="example-flex-align-content" >}}

<div class="d-flex align-content-start flex-wrap">
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
  <div class="p-2 highlighted">Flex item</div>
</div>
{{</ example >}}

{{< example id="example-flex-content-end" >}}
<div class="d-flex align-content-end flex-wrap">...</div>
{{</ example >}}

{{< example id="example-flex-content-center" >}}
<div class="d-flex align-content-center flex-wrap">...</div>
{{</ example >}}

{{< example id="example-flex-content-between" >}}
<div class="d-flex align-content-between flex-wrap">...</div>
{{</ example >}}

<div class="bd-example">
  <div class="d-flex align-content-around flex-wrap bd-highlight mb-3" style="height: 200px;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{{< example id="example-flex-content-around" >}}
<div class="d-flex align-content-around flex-wrap">...</div>
{{</ example >}}

<div class="bd-example">
  <div class="d-flex align-content-stretch flex-wrap bd-highlight mb-3" style="height: 200px;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{{< example show_preview="false">}}
<div class="d-flex align-content-stretch flex-wrap">...</div>
{{</ example >}}

Responsive variations also exist for `align-content`.

<!-- prettier-ignore-start -->

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}

- `.align-content{{ .abbr }}-start`
- `.align-content{{ .abbr }}-end`
- `.align-content{{ .abbr }}-center`
- `.align-content{{ .abbr }}-around`
- `.align-content{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}
<!-- prettier-ignore-end -->
