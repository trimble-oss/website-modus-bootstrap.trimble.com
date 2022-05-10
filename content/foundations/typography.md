---
title: "Typography"
layout: "single"
description: "Typography can help create clear hierarchies, organize information, and guide users through a product or experience."
foundations: true
aliases:
  - "/foundations/"
styleguideURL: "foundations/typography/"
---

## Overview

Trimble uses [Open Sans](https://fonts.google.com/specimen/Open+Sans), a humanist sans-serif
typeface with good legibility and warmth. Featuring a tall x-height and open forms, it is
ideal for on-screen consumption. Open Sans supports ISO Latin 1, Latin CE, Greek and
Cyrillic character sets.

For Internationalization, support is included for RTL (right-to-left) languages. Asian
Syllabic, Abjad, Indic and other script languages will be supported by sans-serif system
font.

### Base Sizing

- The root font size is defined as `16px (1rem)`</li>
- Base body text is sized at `14px (.875rem)`</li>
- Small body text is sized at `12px (.75rem)`</li>

### Hierarchy and Intent

Consistency is key to creating an easily scannable interface for users. Each level in the
Trimble type hierarchy is defined with a specific color and intent. Associating the
typographic style to the intent in the interface provides a visual pattern that is easy for
users to skim.

The variations help keep type styles to a minimum, so consistency is easier to achieve. Too
many type styles make a layout unbalanced and difficult to manage.

#### Type Scale

<table class="table table-bordered bg-white">
    <thead class="thead-light">
      <tr>
        <th>Category</th>
        <th>Classes</th>
        <th>Font Weight</th>
        <th>Size</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <h1>H1 Heading</h1>
        </td>
        <td>
          <code>.h1</code>
        </td>
        <td>Regular</td>
        <td>24px</td>
      </tr>
      <tr>
        <td>
          <h2>H2 Heading</h2>
        </td>
        <td>
          <code>.h2</code>
        </td>
        <td>Regular</td>
        <td>20px</td>
      </tr>
      <tr>
        <td>
          <h3>H3 Heading</h3>
        </td>
        <td>
          <code>.h3</code>
        </td>
        <td>Semi-Bold</td>
        <td>18px</td>
      </tr>
      <tr>
        <td>
          <h4>H4 Heading</h4>
        </td>
        <td>
          <code>.h4</code>
        </td>
        <td>Semi-Bold</td>
        <td>16px</td>
      </tr>
      <tr>
        <td>
          <h5>H5 Heading</h5>
        </td>
        <td>
          <code>.h5</code>
        </td>
        <td>Bold</td>
        <td>14px</td>
      </tr>
      <tr>
        <td>
          <h6>H6 Heading</h6>
        </td>
        <td>
          <code>.h6</code>
        </td>
        <td>Bold</td>
        <td>12px</td>
      </tr>
      <tr>
        <td>
          <span class="lead lead-text">Lead Text</span>
        </td>
        <td>
          <code>.lead</code>
          <code>.lead-text</code>
        </td>
        <td>Regular</td>
        <td>20px</td>
      </tr>
      <tr>
        <td>
          <span class="body-text">Body Text</span>
        </td>
        <td>
          <code>.body-text</code>
        </td>
        <td>Regular</td>
        <td>14px</td>
      </tr>
      <tr>
        <td>
          <span class="card-text">Card Text</span>
        </td>
        <td>
          <code>.card-text</code>
        </td>
        <td>Regular</td>
        <td>16px</td>
      </tr>
      <tr>
        <td>
          <span class="card-text-2">Card Text 2</span>
        </td>
        <td>
          <code>.card-text-2</code>
        </td>
        <td>Semi-Bold</td>
        <td>12px</td>
      </tr>
      <tr>
        <td>
          <span class="card-subtitle-1">Card Subtitle 1</span>
        </td>
        <td>
          <code>.card-subtitle-1</code>
        </td>
        <td>Regular</td>
        <td>16px</td>
      </tr>
      <tr>
        <td>
          <span class="card-subtitle-2">Card Subtitle 2</span>
        </td>
        <td>
          <code>.card-subtitle-2</code>
        </td>
        <td>Bold</td>
        <td>10px</td>
      </tr>
      <tr>
        <td>
          <span class="form-labels card-caption">
            Form Labels & Card Captions
          </span>
        </td>
        <td>
          <code>.form-labels</code>
          <code>.card-caption</code>
        </td>
        <td>Regular</td>
        <td>12px</td>
      </tr>
      <tr>
        <td>
          <small>
            Small
          </small>
        </td>
        <td>
          <code>.small</code>
        </td>
        <td>Regular</td>
        <td>12px</td>
      </tr>
  </tbody>
</table>

### Headings

{{< example id="example-headings" class="example-typography-headings bg-transparent guide-sample anatomy-display">}}
<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<h3>H3 Heading</h3>
<h4>H4 Heading</h4>
<h5>H5 Heading</h5>
<h6>H6 Heading</h6>
{{< /example >}}

### Display headings

When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style. Keep in mind these headings are not responsive by default.

{{< example id="example-display-headings" class="example-typography-headings bg-transparent guide-sample anatomy-display">}}
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h2>
<h1 class="display-3">Display 3</h3>
{{< /example >}}


### Text Styles

{{< example id="example-heading-styles" class="example-typography-headings bg-transparent guide-sample anatomy-display">}}
<p class="lead-text">Lead Text / Open Sans Regular</p>
<p class="body-text">Body / Open Sans Regular</p>
<p class="card-text">Card Text / Open Sans Regular</p>
<p class="card-text-2">Card Text 2 / Open Sans Semi-Bold</p>
<p class="card-subtitle-1">Card Subtitle 1 / Open Sans Regular</p>
<p class="card-subtitle-2">Card Subtitle 2 / Open Sans Bold</p>
<p class="form-labels card-caption">Form Labels + Card Caption / Open Sans Regular</p>
{{</ example >}}
