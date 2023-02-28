---
title: "Tables"
layout: "single"
description: "Tables display information in a grid-like format of rows and columns. They organize
  information in a way that’s easy to scan, so that users can look for patterns and insights."
components: true
StyleGuide: "components/tables/"
---

## Overview

Due to the widespread use of tables across third-party widgets like calendars
and date pickers, we’ve designed our tables to be opt-in. Just add the base
class `.table` and `.table-bordered` to any `<table>`, then extend with custom
styles or our various included modifier classes.

### Basic Table

{{< example id="example-table" >}}
<table class="table table-bordered">
  <thead class="bg-gray-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{{</ example >}}

### Hoverable Rows

Add a class of `.table-hover` to enable a hover state on table rows within a `<tbody>`

{{< example id="example-table-hoverable" class="flex-column" >}}
<table class="table table-bordered table-hover">
  <thead class="bg-gray-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{{</ example >}}

### Tables with Icons and Controls

{{< example id="example-table-icons" class="flex-column" >}}
<table class="table table-bordered">
  <thead class="bg-gray-light">
    <tr>
      <th scope="col" class="icon-only"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col" class="icon-only"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="icon-only">
        <button class="btn btn-icon-only btn-text-dark rounded-circle">
          <i class="modus-icons notranslate" aria-hidden="true">folder</i>
        </button>
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td class="icon-only">
        <div class="dropdown">
          <button class="btn btn-icon-only btn-text-dark rounded-circle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row" class="icon-only">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" checked="" class="custom-control-input" id="tableCheckbox4" name="example1">
          <label class="custom-control-label" for="tableCheckbox4"></label>
        </div>
      </th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td class="icon-only">
        <div class="dropdown">
          <button class="btn btn-icon-only btn-text-dark rounded-circle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row" class="icon-only">
        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="tableRadio3" name="tableRadio" value="customEx">
          <label class="custom-control-label" for="tableRadio3"></label>
        </div>
      </th>
      <td>John</td>
      <td>Snow</td>
      <td>@j_snow</td>
      <td class="icon-only">
        <div class="dropdown">
          <button class="btn btn-icon-only btn-text-dark rounded-circle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row" class="icon-only">
        <div class="custom-control custom-switch">
          <input type="checkbox" checked="" class="custom-control-input" id="tableSwitch3" name="example1">
          <label class="custom-control-label" for="tableSwitch3"></label>
        </div>
      </th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td class="icon-only">
        <div class="dropdown">
          <button class="btn btn-icon-only btn-text-dark rounded-circle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
{{</ example >}}

### Small Variant

All previous table styles are also available in a smaller variant. Just add a class of `.table-sm` to your table.

When using small variants of tables with icons and controls, don't forget to use the smaller variants of those icons and controls too!

{{< example id="example-table-small" class="flex-column" >}}

<table class="table table-sm table-bordered table-hover">
  <thead class="bg-gray-light">
    <tr>
      <th scope="col" class="icon-only"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col" class="icon-only"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="icon-only">
        <button class="btn btn-sm btn-icon-only btn-text-dark rounded-circle">
          <i class="modus-icons notranslate" aria-hidden="true">folder</i>
        </button>
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td class="icon-only">
        <div class="dropdown">
          <button class="btn btn-sm btn-icon-only btn-text-dark rounded-circle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row" class="icon-only">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" checked="" class="custom-control-input" id="tableCheckbox6" name="example1">
          <label class="custom-control-label" for="tableCheckbox6"></label>
        </div>
      </th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td class="icon-only">
        <div class="dropdown">
          <button class="btn btn-sm btn-icon-only btn-text-dark rounded-circle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row" class="icon-only">
        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="tableRadio3" name="tableRadio" value="customEx">
          <label class="custom-control-label" for="tableRadio3"></label>
        </div>
      </th>
      <td>John</td>
      <td>Snow</td>
      <td>@j_snow</td>
      <td class="icon-only">
        <div class="dropdown">
          <button class="btn btn-sm btn-icon-only btn-text-dark rounded-circle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row" class="icon-only">
        <div class="custom-control custom-switch">
          <input type="checkbox" checked="" class="custom-control-input" id="tableSwitch3" name="example1">
          <label class="custom-control-label" for="tableSwitch3"></label>
        </div>
      </th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td class="icon-only">
        <div class="dropdown">
          <button class="btn btn-sm btn-icon-only btn-text-dark rounded-circle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
{{</ example >}}

### Tables with sticky header

Add the `.sticky-top` class to the `thead` `th` for sticky header.

[View Example](/examples/table-with-sticky-header/)
<br><br>

### Tables with sticky header and First Column

Add the `.sticky-top` class to the thead th for sticky header and some additional custom CSS for the sticky first column.

[View Example](/examples/table-with-sticky-header-and-column/)
<br><br>

### Grid.js Data Table Integration

[Grid.js](https://gridjs.io/) is a free and open-source JavaScript table plugin. It works with most JavaScript frameworks, including React, Angular, Vue and VanillaJs.
It supports pagination, sorting, filtering, resizable columns and more.
Modus Bootstrap CSS classes can be added at render-time.

[View Example](/examples/gridjs-table/)

<script>
$("a[href^='/examples/']").attr('target','_blank_');
</script>
