---
title: "Shadows & Depth"
layout: "single"
description: "Depth is defined through a combination of z-index, overlays, and drop shadows. Use it to focus
the user’s attention on a task, provide temporary supplementary information, or define spatial
relationships between content."
foundations: true
aliases:
  - "/foundations/depth/"
styleguideURL: "foundations/shadows-and-depth/"
---

## Overview

### Z-index

Z-index is a CSS property that specifies the stack order of an element. An element with
greater stack order is always in front of an element with a lower stack order.

| Z-index  | Use             |
| -------- | --------------- |
| **1000** | Dropdowns       |
| **1020** | Sticky Elements |
| **1030** | Fixed Elements  |
| **1040** | Modal Backdrops |
| **1050** | Modal Dialogs   |
| **1060** | Popovers        |
| **1070** | Tooltips        |
{class="table table-bordered"}

### Overlays

Overlays work in concert with Modals and Dialogs to temporarily obstruct a user’s access to
the underlying page and focus their attention on the content above the overlay.

### Drop Shadows

Shadows provide cues about depth, direction of movement, and surface edges. A surface’s
shadow is determined by its elevation and relationship to other surfaces.

Because shadows express the degree of elevation between surfaces, they must be used
consistently throughout your product. Higher shadows must be positioned above lower shadows
in the z-index.

Use one of the following classes to add shadow depth; `shadow-sm`,
`shadow` or `shadow-lg`

### Shadow Depths

<div class="guide-example-block d-flex position-relative shadow-none border-0">
  <div class="row mt-2">
      <div class="col-12 col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="text-center font-weight-bold">
              Shadow (small)
            </h3>
          </div>
        </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="text-center font-weight-bold">
              Shadow
            </h3>
          </div>
        </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <h3 class="text-center font-weight-bold">
              Shadow (large)
            </h3>
          </div>
        </div>
    </div>
  </div>
</div>

## UI Examples

Below are a few examples of shadows being used to create depth with our UI Elements.

### Cards

Use shadows to make card elements pop based on importance.

<div class="guide-example-block d-flex position-relative shadow-none border-0">
  <div class="row">
    <div class="col-12 col-md-4 mb-4">
    <div class="card p-2 shadow-sm">
      <div class="card-header">Card Header</div>
      <div class="card-body">
        <h3 class="card-title">Card Title</h3>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary shadow">Raised button</a>
      </div>
      </div>
    </div>
    <div class="col-12 col-md-4 mb-4">
    <div class="card p-2 shadow">
      <div class="card-header">Card Header</div>
      <div class="card-body">
        <h3 class="card-title">Card Title</h3>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary shadow">Raised button</a>
      </div>
      </div>
    </div>
    <div class="col-12 col-md-4 mb-4">
    <div class="card p-2 shadow-lg">
      <div class="card-header">Card Header</div>
      <div class="card-body">
        <h3 class="card-title">Card Title</h3>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary shadow">Raised button</a>
      </div>
      </div>
    </div>
  </div>
</div>

### Modals

Use shadows to separate modal dialogs from the main content layer.

<div class="guide-example-block d-flex position-relative">
  <div class="guide-sample modal-static bg-light">
    <div class="modal d-inline position-relative" tabindex="-1">
      <div class="modal-dialog shadow-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
