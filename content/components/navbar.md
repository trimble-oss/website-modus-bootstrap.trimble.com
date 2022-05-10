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
  <button class="btn btn-lg btn-icon-only btn-text-dark" id="menuButton" data-modus-item="menu-btn" href="#overview" data-toggle="#" type="button">
    <i class="modus-icon material-icons">menu</i>
  </button>
  <a href="#navbar-example" class="navbar-brand mr-auto ml-2">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-logo.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-icon.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ml-auto">
      <button class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Notifications">
        <i class="modus-icon material-icons">notifications</i>
      </button>
      <button class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Help">
        <i class="modus-icon material-icons">help</i>
      </button>
      <button class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Applications">
        <i class="modus-icon material-icons">apps</i>
      </button>
    </div>
  </div>
  <button class="btn btn-lg btn-icon-only btn-text-dark d-block d-sm-none">
    <i class="modus-icons">more_vertical</i>
  </button>
  <button class="btn btn-lg btn-icon-only btn-text-dark bg-transparent border-white ml-2 border-0"
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
  <button class="btn btn-lg btn-icon-only btn-text-dark" id="menuButton" data-modus-item="menu-btn" href="#overview" data-toggle="#">
    <i class="modus-icon material-icons">menu</i>
  </button>
  <a href="#navbar-example" class="navbar-brand mr-auto ml-2">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-logo-rev.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-icon-rev.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ml-auto">
      <button class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Notifications">
        <i class="modus-icon material-icons">notifications</i>
      </button>
      <button class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Help">
        <i class="modus-icon material-icons">help</i>
      </button>
      <button class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Applications">
        <i class="modus-icon material-icons">apps</i>
      </button>
    </div>
  </div>
  <button class="btn btn-lg btn-icon-only btn-text-dark d-block d-sm-none">
    <i class="modus-icons">more_vertical</i>
  </button>
  <button class="btn btn-lg btn-icon-only btn-text-dark bg-transparent ml-2"
         data-toggle="tooltip" data-placement="bottom" data-html="true"
         title="<div class=text-left>MyTrimble<br>Stephanie Carter<br>stephanie_carter@example.com</div>">
         <i class="modus-icon material-icons rounded-circle">account_circle</i>
  </button>
</nav>
{{</ example >}}
<!-- prettier-ignore-end -->


<!-- enable tooltips everywhere -->
<script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
</script>
