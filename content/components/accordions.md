---
title: "Accordions"
layout: "single"
description: "The accordion component delivers large amounts of content in a small space through progressive disclosure. That is, the user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium."
images:
  - "/img/components/headers/accordions.png"
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
            We can dance, until we die, you and I, will be young forever. We can dance, until we die, you and I, will be young forever. I smell like a minibar, DJ's passed out in the yard. All this money can't buy me a time machine. Once you party with us you'll be falling in love, Ooh Oh Ooh! Passport stamps, she's cosmopolitan.
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
            Stinging like a bee I earned my stripes. California girls we're undeniable. So I sat quietly, agreed politely. Of anything and everything. You’re gonna hear me roar. Get ready 'cause I’ve had enough. Now I’m floating like a butterfly. I could have rewrite your addiction. Need some goose, to get loose, come on take a shot. This is transcendental, on another level, boy, you're my lucky star.
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
            Like thunder gonna shake the ground. You think I'm funny when I tell the punchline wrong. California girls we're undeniable. And now it's time to let it through Unconditional, unconditionally. Even brighter than the moon, moon, moon. If you get the chance you better keep her.
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
            After a hurricane comes a rainbow. I feel like I'm already there. Mark my words. Kiss her, touch her, squeeze her buns. You could travel the world but nothing comes close to the golden coast. Yeah, you take me to utopia. So make a wish, I'll make it like your birthday everyday. Tone, tan fit and ready, turn it up cause its getting heavy. Baby, you're a firework. We can dance, until we die, you and I, will be young forever.
          </div>
        </div>
      </div>
    </div>
  </div>
{{</ example >}}
