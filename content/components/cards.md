---
title: "Cards"
layout: "single"
description: "Cards provide a set of content which acts as an entry point to more detailed information."
components: true
images:
  - "/img/components/headers/cards.png"
styleguideURL: "components/cards/"
---

## Overview

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no `margin` by default, so use [spacing utilities](/utilities/padding-and-margin/) as needed.

### Card Example

Cards use a wrapper of class `.card` followed by a
`.card-body` container.

`.card-title` and `.card-subtitle` are used to space out
the title and subtitle appropriately.

{{< example id="example-card" >}}
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title" id="card-title">Card title</h4>
    <h5 class="card-subtitle mb-2 text-muted" id="card-subtitle">Card subtitle</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
{{</ example >}}

### Card with Image

To add an image to the top of the card, use `.card-img-top`

{{< example id="example-card-image" >}}
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://placehold.co/286x150?text=Card+image" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title" id="card-title-1">Card Title</h4>
    <h5 class="card-subtitle mb-2 text-muted" id="card-subtitle-1">Card Subtitle</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
</div>
{{</ example >}}

### Header and Footer

Cards can also have a header and footer. Simply use the classes
`.card-header` and `.card-footer`

{{< example id="example-card-header" >}}
<div class="card" style="width: 18rem;">
  <div class="card-header">Card Header</div>
  <div class="card-body">
    <h4 class="card-title" id="card-title-2">Card Title</h4>
    <h5 class="card-subtitle mb-2 text-muted" id="card-subtitle-2">Card Subtitle</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
  <div class="card-footer">Card Footer</div>
</div>
{{</ example >}}

### Customizing Cards

Cards primarily serve as containers to organize content for your needs. They
can be combined with other UI elements and utility classes for a broad range
of customization

{{< example id="example-card-custom" >}}
<div class="card border-dark shadow" style="width: 18rem;">
  <img class="card-img-top" src="https://placehold.co/286x150?text=Card+image" alt="Card image cap">
  <div class="card-body">
    <h3 class="card-title" id="card-title-3">Card title</h3>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">List Item</li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      List Item with Badge
      <span class="badge badge-primary badge-pill">14</span>
    </li>
    <li class="list-group-item">List Item</li>
  </ul>
  <div class="card-footer text-right">
    <a href="#" class="card-link">Link</a>
    <a href="#" class="card-link btn btn-primary">Button</a>
  </div>
</div>
{{</ example >}}
