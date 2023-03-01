---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context. They serve as a form
  of navigation between related content."
components: true
keywords: nav
images:
  - "/img/components/headers/tabs.png"
styleguideURL: "components/tabs/"
---

## Overview

Tabs are a subset of `.nav` components. Simply add the
`.nav-tabs` class to generate a tabbed interface. Use them to
create tabbable regions with Bootstrap's tab
<a href="https://getbootstrap.com/docs/4.6/components/navs/#javascript-behavior" rel="noopener" target="_blank">JavaScript
plugin</a>.

### Basic Tabs

{{< example id="example-tabs-basic" >}}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Tab</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Longer tab name</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{</ example >}}

### Tabs with Icons

{{< example id="example-tabs-icons" >}}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#"><i class="modus-icon modus-icons" aria-hidden="true">clipboard_check</i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="modus-icons notranslate" aria-hidden="true">calendar_check</i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="modus-icons notranslate" aria-hidden="true">calendar_check</i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
    <i class="modus-icons notranslate" aria-hidden="true">check_circle</i></a>
  </li>
</ul>
{{</ example >}}

### Small Tabs

To use smaller variants of tabs, add the `.nav-tabs-sm` class.

{{< example id="example-tabs-small" >}}
<ul class="nav nav-tabs nav-tabs-sm">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Tab</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Longer tab name</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
<br>
<ul class="nav nav-tabs nav-tabs-sm">
  <li class="nav-item">
    <a class="nav-link active" href="#"><i class="modus-icons notranslate" aria-hidden="true">wind</i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="modus-icons notranslate" aria-hidden="true">certificate</i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="modus-icons notranslate" aria-hidden="true">web</i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="modus-icons notranslate" aria-hidden="true">volume_down</i></a>
  </li>
</ul>
{{</ example >}}

### Tabs with Content

Use the tab JavaScript plugin—include it individually or through the
compiled `bootstrap.js` file—to extend our navigational tabs and
pills to create tabbable panes of local content, even via dropdown menus.

Dynamic tabbed interfaces, as described in the
<a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel"><abbr title="Web Accessibility Initiative">WAI</abbr>
<abbr title="Accessible Rich Internet Applications">ARIA</abbr>
Authoring Practices</a>, require `role="tablist"`, `role="tab"`,
`role="tabpanel"`, and additional `aria-` attributes
in order to convey their structure, functionality and current state to users
of assistive technologies (such as screen readers).

You can activate a tab navigation without writing JavaScript by simply
specifying `data-toggle="tab"` on an element. Use this attribute
on `.nav-tabs`.

Your content should be inside a `.tab-content` element as a
sibling to `.nav-tabs`. The `href` attribute of each
tab should match the `id` of its corresponding
`.tab-pane`.

{{< example id="example-tabs-content" class="flex-column" >}}
<ul class="nav nav-tabs" id="exampleTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="exampleFirstTab" data-toggle="tab" href="#exampleFirst" role="tab" aria-controls="exampleFirst" aria-selected="true">First tab</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="exampleSecondTab" data-toggle="tab" href="#exampleSecond" role="tab" aria-controls="exampleSecond" aria-selected="false">Second tab</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="exampleThirdTab" data-toggle="tab" href="#exampleThird" role="tab" aria-controls="exampleThird" aria-selected="false">Third tab</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" id="disabledTab" data-toggle="tab" href="#exampleDisabled" role="tab" aria-controls="exampleDisabled" aria-selected="false">Disabled tab</a>
  </li>
</ul>
<div class="tab-content py-3" id="exampleTabContent">
  <div class="tab-pane fade show active" id="exampleFirst" role="tabpanel" aria-labelledby="exampleFirstTab">
    <h5 id="first-tab-content">First Tab Content</h5>
    <p>
      Placeholder content for the tab panel. This one relates to the First tab. Takes you miles high, so high,
      'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my
      head. Oh, no. In another life I would make you stay.
    </p>
  </div>
  <div class="tab-pane fade" id="exampleSecond" role="tabpanel" aria-labelledby="exampleSecondTab">
    <h5 id="second-tab-content">Second Tab Content</h5>
    <p>
      Placeholder content for the tab panel. This one relates to the Second tab. You got the finest
      architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned
      that one day I'd be losing you. She eats your heart out.
    </p>
  </div>
  <div class="tab-pane fade" id="exampleThird" role="tabpanel" aria-labelledby="exampleThirdTab">
    <h5 id="third-tab-content">Third Tab Content</h5>
    <p>
      Placeholder content for the tab panel. This one relates to the Third tab. Her love is like a drug. All
      my girls vintage Chanel baby. Got a motel and built a fort out of sheets. 'Cause she's the muse and the
      artist. (This is how we do) So you wanna play with magic.
    </p>
  </div>
  <div class="tab-pane fade" id="exampleDisabled" role="tabpanel" aria-labelledby="disabledTab">
    <h5 id="disabled-tab-content">Disabled Tab Content</h5>
    <p>
      This content is disabled and unviewable.
    </p>
  </div>
</div>
{{</ example >}}
