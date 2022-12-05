---
title: "Navbar"
layout: "single"
description: "The navbar provides context through globally accessible menu options."
components: true
styleguideURL: "components/navbar/"
aliases:
  - "/components/navbars/"
---

## Overview

The navbar or the app header provides context through globally accessible menu options and positions a consistent component to connect various Trimble applications and contains the main navigation for your application.

<!-- prettier-ignore-start -->
{{< example id="example-navbar" bg_select="false" class="p-0" >}}
<nav class="navbar nav navbar-expand-sm modus-header">
  <button class="btn btn-lg btn-icon-only" id="menuButton" href="#overview" data-toggle="#" type="button">
    <i class="modus-icons notranslate">menu</i>
  </button>
  <a href="#navbar-example" class="navbar-brand mr-auto ml-2">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-logo.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-icon.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ml-auto">
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Notifications">
        <i class="modus-icon notranslate material-icons">notifications</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Help">
        <i class="modus-icons notranslate">help</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Applications">
        <i class="modus-icons notranslate">apps</i>
      </button>
    </div>
  </div>
  <button type="button" aria-label="" class="btn btn-lg btn-icon-only d-block d-sm-none">
    <i class="modus-icons notranslate">more_vertical</i>
  </button>
  <button type="button" class="btn btn-lg btn-icon-only bg-transparent border-white ml-2 border-0"
         data-toggle="tooltip" data-placement="bottom" data-html="true"
         title="<div class=text-left>MyTrimble<br>Stephanie Carter<br>stephanie_carter@example.com</div>">
         <i class="modus-icon material-icons rounded-circle">account_circle</i>
  </button>
</nav>
{{</ example >}}
<!-- prettier-ignore-end -->

## Blue Variant

An alternative blue variant is available. Add the classes `navbar-blue` to the navbar and add `text-white` to the icons.

<!-- prettier-ignore-start -->
{{< example id="example-navbar" bg_select="false" class="p-0" >}}
<nav class="navbar navbar-blue nav navbar-expand-sm modus-header py-1">
  <button class="btn btn-lg btn-icon-only" id="menuButton" href="#overview" data-toggle="#" type="button">
    <i class="modus-icons notranslate">menu</i>
  </button>
  <a href="#navbar-example" class="navbar-brand mr-auto ml-2">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-logo-rev.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-icon-rev.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ml-auto">
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Notifications">
        <i class="modus-icon notranslate material-icons">notifications</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Help">
        <i class="modus-icons notranslate">help</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Applications">
        <i class="modus-icons notranslate">apps</i>
      </button>
    </div>
  </div>
  <button type="button" class="btn btn-lg btn-icon-only d-block d-sm-none">
    <i class="modus-icons">more_vertical</i>
  </button>
  <button type="button" class="btn btn-lg btn-icon-only bg-transparent ml-2"
         data-toggle="tooltip" data-placement="bottom" data-html="true"
         title="<div class=text-left>MyTrimble<br>Stephanie Carter<br>stephanie_carter@example.com</div>">
         <i class="modus-icon material-icons rounded-circle">account_circle</i>
  </button>
</nav>
{{</ example >}}
<!-- prettier-ignore-end -->

## Navbar without Menu button

You can omit the navbar menu button if it isn't needed.

<nav class="navbar navbar-blue nav navbar-expand-sm">
  <a href="#navbar-example" class="navbar-brand mr-auto ml-2">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-logo-rev.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-icon-rev.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ml-auto">
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Notifications">
        <i class="modus-icon notranslate material-icons">notifications</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Help">
        <i class="modus-icons notranslate">help</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Applications">
        <i class="modus-icons notranslate">apps</i>
      </button>
    </div>
  </div>
  <button type="button" aria-label="" class="btn btn-lg btn-icon-only d-block d-sm-none">
    <i class="modus-icons notranslate">more_vertical</i>
  </button>
  <button type="button" class="btn btn-lg btn-icon-only bg-transparent border-white ml-2 border-0"
         data-toggle="tooltip" data-placement="bottom" data-html="true"
         title="<div class=text-left>MyTrimble<br>Stephanie Carter<br>stephanie_carter@example.com</div>">
         <i class="modus-icon material-icons rounded-circle">account_circle</i>
  </button>
</nav>

<!-- enable tooltips everywhere -->
<script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
</script>
