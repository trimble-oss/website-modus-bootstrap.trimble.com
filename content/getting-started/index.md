---
title: "Getting Started"
layout: "single"
description: "The Modus Front-end Framework is an HTML/CSS library developed as a common, open source platform for all
of Trimble's web applications. The framework is designed and managed by the Trimble UX Council."
start: true
aliases:
  - "developers/"
  - "setup/"
  - "start/"
---

The Modus Front-end Framework is an HTML/CSS library developed as a common, open source platform for all of Trimble's web applications. The framework is designed and managed by the Trimble UX Council.

## Background

Modus Bootstrap is built upon and extends the Bootstrap 4 code framework. It is a responsive framework for web and mobile uses. You can use the CSS files as is, or integrate the Sass files into your own application if you wish to modify it further.

## CDN

The Modus CSS can be used as is from a CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trimbleinc/modus-bootstrap@{{< modus-bootstrap-version >}}/dist/modus.min.css">
```

You do not (and should not) include additional references to Bootstrap CSS other than their JavaScript links for component functions. If you are using Angular, React, or other framework you should use an appropriate Bootstrap library.

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
```

## Install with npm

Install the Modus Framework in your Node.js powered apps with our npm package:

```bash
$ npm install --save-dev @trimbleinc/modus-bootstrap
```

The compiled CSS files will be found in the `./node_modules/@trimbleinc/modus-bootstrap/dist` directory.

## Using with Angular

Modus Bootstrap can be used in an Angular application. First, follow the [Install with npm](#install-with-npm) instructions above.

To use the compiled CSS files, add the following reference to angular.json.

```javascript
{
...
  "styles": [
   ...
   "./node_modules/@trimbleinc/modus-bootstrap/dist/modus.min.css"
  ],
...
}
```

When using core Bootstrap components like Modals and Accordions, include [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/) in your application.

More information about component support of ngx-bootstrap can be found on the [Status page](/status/).

## Customize using Sass

The Sass files will be found in the `/scss` directory.

### File structure

Whenever possible, avoid modifying Modus or Bootstrap core files.

For Sass, that means creating your own stylesheet that imports Modus and Bootstrap so you can modify and extend it. Assuming you’re using a package manager like npm, you’ll have a file structure that looks something like this:

```text
your-project/
      ├── scss
      │   └── custom.scss
      └── node_modules/
          ├── bootstrap
          │   ├── js
          │   └── scss
          └── @trimbleinc
              └──modus-bootstrap
                  └── scss
```

### Importing

In your custom.scss, you’ll import Modus and Bootstrap’s source Sass files. With that setup in place, you can begin to modify any of the Sass variables and maps in your custom.scss.

You can also start to add parts of Bootstrap under the `// Optional` section as needed. We suggest using the full import stack from our `bootstrap.scss` file as your starting point.

The main file to focus on is the `_theme.scss` file (and/or `_theme-dark.scss` if you want a dark look).

You should copy this file from `/node_modules/@trimbleinc/modus-bootstrap/scss/components` to your own Sass directory and import your copy instead of the Modus bootstrap version in your main Sass file.

This example shows you how you should structure your main file. The order in which files are imported matters.

```scss
// Bootstrap functions
@import "../node_modules/bootstrap/scss/functions";
// Modus functions
@import "../node_modules/@trimbleinc/modus-bootstrap/scss/components/functions";

// YOUR CUSTOM THEME GOES HERE
@import "your_custom_sass_directory/your_copy_of_modus_theme_file";
// Modus variables
@import "../node_modules/@trimbleinc/modus-bootstrap/scss/components/variables";
// OPTIONAL - use your own variables:
// @import "your_custom_sass_directory/copy_of_modus_variables_file";

// Bootstrap variables
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

// Modus mixins
@import "../node_modules/@trimbleinc/modus-bootstrap/scss/components/mixins";

// Bootstrap components (you can leave some of these out if you don't need them)
@import "../node_modules/bootstrap/scss/reboot"; // Required
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/code";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/tables";
@import "../node_modules/bootstrap/scss/forms";
@import "../node_modules/bootstrap/scss/buttons";
@import "../node_modules/bootstrap/scss/transitions";
@import "../node_modules/bootstrap/scss/dropdown";
@import "../node_modules/bootstrap/scss/button-group";
@import "../node_modules/bootstrap/scss/input-group"; // Requires forms
@import "../node_modules/bootstrap/scss/custom-forms";
@import "../node_modules/bootstrap/scss/nav";
@import "../node_modules/bootstrap/scss/navbar"; // Requires nav
@import "../node_modules/bootstrap/scss/card";
@import "../node_modules/bootstrap/scss/breadcrumb";
@import "../node_modules/bootstrap/scss/pagination";
@import "../node_modules/bootstrap/scss/badge";
@import "../node_modules/bootstrap/scss/jumbotron";
@import "../node_modules/bootstrap/scss/alert";
@import "../node_modules/bootstrap/scss/progress";
@import "../node_modules/bootstrap/scss/media";
@import "../node_modules/bootstrap/scss/list-group";
@import "../node_modules/bootstrap/scss/close";
@import "../node_modules/bootstrap/scss/toasts";
@import "../node_modules/bootstrap/scss/modal"; // Requires transitions
@import "../node_modules/bootstrap/scss/tooltip";
@import "../node_modules/bootstrap/scss/popover";
@import "../node_modules/bootstrap/scss/carousel";
@import "../node_modules/bootstrap/scss/spinners";
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/print";

// Modus components
@import "../node_modules/@trimbleinc/modus-bootstrap/scss/components/controls";
@import "../node_modules/@trimbleinc/modus-bootstrap/scss/components/base";

// *** YOUR SITE SPECIFIC SASS GOES HERE ***
@import "your_custom_sass_directory/your_project_specific_sass_files";
```

## Add-ons in Progress

The following are framework add-ons currently in development. These can be used but should be considered as beta and are subject to changed.

### Icons

If you want to use the icons, include the following:

```html
<link rel="stylesheet" href="https://modus.trimble.com/assets/{{< modus-icons-version >}}/fonts/modus-icons.css">
```

Learn more about [using the icons](/foundations/icons/).

### Application Layout

If you want to also use the Modus Framework layout (top nav, left nav, and content area) you will need to add these additional references:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trimbleinc/modus-bootstrap/{{< modus-bootstrap-version >}}/dist/modus-layout.css">
<script src="https://cdn.jsdelivr.net/npm/@trimbleinc/modus-bootstrap/{{< modus-bootstrap-version >}}/dist/modus-layout.js"></script>
<!-- For Internet Explorer compatibility -->
<script nomodule src="https://polyfill.io/v3/polyfill.min.js"></script>
```

Learn more about [using the layout CSS/JS](/layout/).

<div class="row mt-5">

{{< card-start title="Modus React Bootstrap" url="https://modus-react-bootstrap.trimble.com" header="react.svg" class="bg-react text-white py-4" >}}

{{</ card-start >}}

{{< card-start title="Modus Angular" header="angular.svg" class="bg-danger py-4 bg-coming-soon" >}}

{{</ card-start >}}

</div>
