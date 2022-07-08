---
title: "Accordions"
layout: "single"
description: "The accordion component delivers large amounts of content in a small space through progressive disclosure. That is, the user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium."
images:
  - "/img/headers/components/accordions.png"
components: true
styleguideURL: "components/accordions/"
---

## Overview

**Requires JavaScript Component**

### Usage

The collapse JavaScript plugin is used to show and hide content. It utilizes a few classes to
handle the heavy lifting:

`.collapse` hides the content

`.collapse.show` shows the content

`.collapsing` is added when the transition starts, and removed when it finishes

### Via Data Attributes

Just add `data-toggle="collapse"` and a `data-target` to the element to
automatically assign control of one or more collapsible elements. The
`data-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add
the class collapse to the collapsible element. If you’d like it to default open, add the
additional class `show`.

To add accordion-like group management to a collapsible area, add the data attribute
`data-parent="#selector"`.

## Examples

Use the `.accordion` class in combination with `.card` elements to create
collapsible elements that apply appropriate styling.

### Collapsible Cards

{{< example id="example-collapsible-cards" >}}
<div class="accordion" id="accordionCodeExample">
  <div class="card">
    <div class="card-header" role="button" id="accordionHeadingOne" data-toggle="collapse" data-target="#codeCollapseOne" aria-expanded="true" aria-controls="codeCollapseOne">
      <h6 class="mb-0" id="collapsible-group-item-1">
        Collapsible Group Item #1</h6>
    </div>
    <div id="codeCollapseOne" class="collapse show" aria-labelledby="accordionHeadingOne" data-parent="#accordionCodeExample">
      <div class="card-body">
        This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="button" id="accordionHeadingTwo" data-toggle="collapse" data-target="#codeCollapseTwo" aria-expanded="false" aria-controls="codeCollapseTwo">
      <h6 class="mb-0" id="collapsible-group-item-2">
        Collapsible Group Item #2</h6>
    </div>
    <div id="codeCollapseTwo" class="collapse" aria-labelledby="accordionHeadingTwo" data-parent="#accordionCodeExample">
      <div class="card-body">
        This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="button" id="accordionHeadingThree" data-toggle="collapse" data-target="#codeCollapseThree" aria-expanded="false" aria-controls="codeCollapseThree">
      <h6 class="mb-0" id="collapsible-group-item-3">
        Collapsible Group Item #3</h6>
    </div>
    <div id="codeCollapseThree" class="collapse" aria-labelledby="accordionHeadingThree" data-parent="#accordionCodeExample">
      <div class="card-body">
        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables.
      </div>
    </div>
  </div>
</div>
{{</ example >}}

### Compact Variant

Add the `.accordion-sm` class to `.accordion` to create a smaller variant.

{{< example id="example-collapsible-small" show_markup="false" >}}
<div class="accordion accordion-sm" id="smallAccordionCodeExample">
  <div class="card">
    <div class="card-header" role="button" id="smallAccordionHeadingOne" data-toggle="collapse" data-target="#smallCodeCollapseOne" aria-expanded="true" aria-controls="smallCodeCollapseOne">
      <h6 class="mb-0">Collapsible Group Item #1</h6>
    </div>
    <div id="smallCodeCollapseOne" class="collapse show" aria-labelledby="smallAccordionHeadingOne" data-parent="#smallAccordionCodeExample">
      <div class="card-body">
        This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="button" id="smallAccordionHeadingTwo" data-toggle="collapse" data-target="#smallCodeCollapseTwo" aria-expanded="false" aria-controls="smallCodeCollapseTwo">
      <h6 class="mb-0">Collapsible Group Item #2</h6>
    </div>
    <div id="smallCodeCollapseTwo" class="collapse" aria-labelledby="smallAccordionHeadingTwo" data-parent="#smallAccordionCodeExample">
      <div class="card-body">
        This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well
        as the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="button" id="smallAccordionHeadingThree" data-toggle="collapse" data-target="#smallCodeCollapseThree" aria-expanded="false" aria-controls="smallCodeCollapseThree">
      <h6 class="mb-0">Collapsible Group Item #3</h6>
    </div>
    <div id="smallCodeCollapseThree" class="collapse" aria-labelledby="smallAccordionHeadingThree" data-parent="#smallAccordionCodeExample">
      <div class="card-body">
        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
</div>

{{</ example >}}

### Collapsible Lists

You can use the `.accordion` classes in combination with other UI Elements to create collapsible content.

{{< example id="example-collapsible-lists" class="d-flex flex-column" >}}
<ul class="list-group">
  <li class="list-group-item">List Item</li>
  <li class="list-group-item">List Item</li>
  <li class="list-group-item py-0">
    <div class="accordion borderless w-100" id="listAccordion">
      <div class="card">
        <div class="card-header px-0" role="button" id="listAccordionHeading" data-toggle="collapse" data-target="#listAccordionOne" aria-expanded="false" aria-controls="listAccordionOne">
          <h6 class="mb-0" id="collapsible-list-item">
            Collapsible List Item</h6>
        </div>
        <div id="listAccordionOne" class="collapse" aria-labelledby="listAccordionHeading" data-parent="#listAccordion">
          <div class="card-body">
            Anim cliche, high life accusamus terry
            richardson ad squid. 3 wolf moon official, non cupidatat skateboard dolor
            brunch. Food truck quinoa. Brunch 3 wolf moon temper, sun
            aliqua put a bird on it squid single-origin coffee null assume shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred sap
            ea president. Ad vegan excepteur butcher vice. Leggings craft beer
            farm-to-table, raw denim aesthetic synth you probably haven't heard of them
            accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="list-group-item">List Item</li>
  <li class="list-group-item">List Item</li>
</ul>
{{</ example >}}

### Mutually Exclusive Collapse

To have your collapsible elements operate mutually exclusively, simply remove the `data-parent` attribute from each collapsible item.

{{< example id="example-collapsible-exc" show_markup="false">}}
<div class="guide-sample bg-light">
    <div class="accordion">
      <div class="card">
        <div class="card-header" role="button" id="headingOneEx" data-toggle="collapse" data-target="#One" aria-expanded="true" aria-controls="One">
          <h6 class="mb-0" id="collapsible-group-item-1-3">
            Collapsible Group Item #1</h6>
        </div>
        <div id="One" class="collapse show" aria-labelledby="headingOneEx">
          <div class="card-body">
            Anim cliche, high life accusamus terry
            richardson ad squid. 3 wolf moon official, non cupidatat skateboard dolor
            brunch. Food truck quinoa. Brunch 3 wolf moon temper, sun
            aliqua put a bird on it squid single-origin coffee null assume shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred sap
            ea president. Ad vegan excepteur butcher vice. Leggings craft beer
            farm-to-table, raw denim aesthetic synth you probably haven't heard of them
            accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="button" id="headingTwoEx" data-toggle="collapse" data-target="#Two" aria-expanded="false" aria-controls="Two">
          <h6 class="mb-0" id="collapsible-group-item-2-3">
            Collapsible Group Item #2</h6>
        </div>
        <div id="Two" class="collapse" aria-labelledby="headingTwoEx">
          <div class="card-body">
            Anim cliche, high life accusamus terry
            richardson ad squid. 3 wolf moon official, non cupidatat skateboard dolor
            brunch. Food truck quinoa. Brunch 3 wolf moon temper, sun
            aliqua put a bird on it squid single-origin coffee null assume shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred sap
            ea president. Ad vegan excepteur butcher vice. Leggings craft beer
            farm-to-table, raw denim aesthetic synth you probably haven't heard of them
            accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="button" id="headingThreeEx" data-toggle="collapse" data-target="#Three" aria-expanded="false" aria-controls="Three">
          <h6 class="mb-0" id="collapsible-group-item-3-3">
            Collapsible Group Item #3</h6>
        </div>
        <div id="Three" class="collapse" aria-labelledby="headingThreeEx">
          <div class="card-body">
            Anim cliche, high life accusamus terry
            richardson ad squid. 3 wolf moon official, non cupidatat skateboard dolor
            brunch. Food truck quinoa. Brunch 3 wolf moon temper, sun
            aliqua put a bird on it squid single-origin coffee null assume shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred sap
            ea president. Ad vegan excepteur butcher vice. Leggings craft beer
            farm-to-table, raw denim aesthetic synth you probably haven't heard of them
            accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>
{{</ example >}}
