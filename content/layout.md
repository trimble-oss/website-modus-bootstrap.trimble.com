---
title: "Modus Layout"
layout: "single"
description: "Besides the aesthetics and UI elements, the Modus Framework has an
optional layout you can use for your web applications."
sectionLayout: true
aliases:
- "/utilities/layout/"
loadModusLayout: true
---

## Basic Structure

The basic structure for our Modus Layout, including the sidebar,
toolbar, and panel, is as follows:

```text
div.modus-layout
        ├── nav.modus-header
        ├── div.modus-body
        |   ├── nav.modus-sidebar
        |   └── div.modus-content-rows
        |       ├── div.modus-toolbar (optional)
        |       └── div.modus-content-columns
        |           ├── div.modus-panel (optional)
        |           └── div.modus-content
        └── div.modus-footer
```

The page should be wrapped in a `.modus-layout` to set up the
overall structure.

The top navbar is a standard Bootstrap
`nav.navbar.navbar-expand-lg` with an additional class of
`.modus-header` to apply the aesthetics. Please refer to the
<a href="https://getbootstrap.com/docs/4.6/components/navbar/">Bootstrap Navbar Docs</a>
for more information.

The `.modus-header` should be followed by
`.modus-body` to set up the left nav area and main content
area.

After `.modus-body` should be
`nav.modus-sidebar` which contains a vertical nav list (more
info below).

The next sibling element after the `.modus-sidebar` should be
`.modus-content-rows` with an optional child of
`.modus-toolbar`.

After `.modus-content-rows` should be
`.modus-content-columns` with an optional child of
`.modus-panel`.

Your main content is housed within `.modus-content` inside of
`.modus-content-columns`.

After the `.modus-body`, the next element should be
`.modus-footer`.

### Interactive Example

To help illustrate how all the layout elements look when displayed
we have this interactive example.

<div class="guide-example-block d-flex position-relative">
  <div class="guide-sample position-relative p-0 border bg-transparent" id="interactiveExample"
        style="height: 600px; z-index: 10;">
        <!-- Modus Layout Page Wrapper -->
        <div class="modus-layout">
          <!-- Modus Header -->
          <nav class="navbar nav navbar-expand-lg modus-header" id="modusHeader">
            <!-- Menu Button -->
            <a id="menuButton" data-modus-item="menu-btn" class="btn btn-lg btn-icon-only btn-text-dark">
              <i class="modus-icons menu-btn notranslate" aria-hidden="true">menu</i>
            </a>
            <!-- Navbar Brand -->
            <a href="#interactive-example" class="navbar-brand">BRAND</a>
            <div class="navbar-nav mr-auto">
              <div class="navbar-text">
                <span class="h3">APPLICATION NAME</span>
              </div>
            </div>
            <!-- Navbar Nav -->
            <div class="collapse navbar-collapse">
              <div class="navbar-nav ml-auto">
                <a href="#interactive-example" class="btn btn-lg btn-icon-only btn-text-dark"><i
                    class="modus-icons notranslate" aria-hidden="true">account_person</i></a>
                <a href="#interactive-example" class="btn btn-lg btn-icon-only btn-text-dark"><i
                    class="modus-icons notranslate" aria-hidden="true">apps</i></a>
              </div>
            </div>
          </nav>
          <!-- Modus Body Wrapper -->
          <div class="modus-body sidebar-closed" data-modus-item="body" id="modusBody">
            <nav class="nav flex-column modus-sidebar" id="modusSidebar">
              <!-- Modus Sidebar -->
              <ul>
                <li>
                  <a href="#interactive-example" class="nav-link active">
                  <span class="left-nav-icon"><i class="modus-icons notranslate" aria-hidden="true">package</i></span>Nav Item 1</a>
                </li>
                <li>
                  <a href="#interactive-example" class="nav-link">
                  <span class="left-nav-icon"><i class="modus-icons notranslate" aria-hidden="true">map</i></span>Nav Item 2</a>
                </li>
                <li>
                  <a href="#interactive-example" class="nav-link">
                  <span class="left-nav-icon"><i class="modus-icons notranslate" aria-hidden="true">settings</i></span>Nav Item 3</a>
                </li>
              </ul>
            </nav>
            <div class="modus-content-rows" id="modusContentRows">
              <div class="modus-toolbar" id="modusToolbar">
                <!-- Modus Toolbar -->
                <form class="form-inline ml-3 mr-5">
                  <div class="form-group">
                    <label class="mr-2" for="profiles"><strong>Profile</strong></label>
                    <select class="form-control" name="profiles" id="profiles">
                      <option>Profile 1</option>
                      <option>Profile 2</option>
                      <option>Profile 3</option>
                    </select>
                  </div>
                </form>
                <button class="btn btn-text-secondary btn-lg btn-icon-only" type="button" aria-label="Palette">
                  <i class="modus-icons notranslate" aria-hidden="true">palette</i>
                </button>
                <button class="btn btn-text-secondary btn-lg btn-icon-only" type="button" aria-label="Calendar">
                  <i class="modus-icons notranslate" aria-hidden="true">calendar</i>
                </button>
                <button class="btn btn-text-secondary btn-lg btn-icon-only" type="button" aria-label="Settings">
                  <i class="modus-icons notranslate" aria-hidden="true">settings</i>
                </button>
                <form class="form-inline ml-5" onsubmit="return false;">
                  <input type="search" class="form-control" placeholder="Search..." />
                  <button class="btn btn-text-secondary btn-lg btn-icon-only ml-2" type="button" aria-label="Search">
                    <i class="modus-icons notranslate" aria-hidden="true">search</i>
                  </button>
                </form>
              </div>
              <div class="modus-content-columns" id="modusContentColumns">
                <div class="modus-panel panel-lg shadow-sm bg-transparent" id="modusPanel">
                  <!-- Modus Panel -->
                  <!-- Panel Header -->
                  <div class="panel-header bg-transparent">
                    <div class="left-items ml-2">
                      <div class="custom-control custom-switch">
                        <input type="checkbox" checked="" class="custom-control-input" id="customSwitch"
                          name="example1" />
                        <label class="custom-control-label" for="customSwitch"></label>
                      </div>
                    </div>
                    <h5>Panel Header</h5>
                    <div class="right-items mr-2">
                      <button class="btn btn-icon-only btn-text-dark">
                        <i class="modus-icons notranslate" aria-hidden="true">unloaded_orders</i>
                      </button>
                    </div>
                  </div>
                  <!-- Panel Body -->
                  <div class="panel-body" style="flex-grow: 1;">
                    <div class="static-container">
                      <div class="d-flex">
                        <button class="btn btn-icon-only btn-text-dark">
                          <i class="modus-icons notranslate" aria-hidden="true">filter</i>
                        </button>
                        <button class="btn btn-icon-only btn-text-dark">
                          <i class="modus-icons notranslate" aria-hidden="true">layout</i>
                        </button>
                        <button class="btn btn-icon-only btn-text-dark">
                          <i class="modus-icons notranslate" aria-hidden="true">route_add</i>
                        </button>
                        <button class="btn btn-icon-only btn-text-dark disabled">
                          <i class="modus-icons notranslate" aria-hidden="true">finalize_route</i>
                        </button>
                        <button class="btn btn-icon-only btn-text-dark disabled">
                          <i class="modus-icons notranslate" aria-hidden="true">trim_fake_orders</i>
                        </button>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-icon-only btn-text-dark align-self-end">
                          <i class="modus-icons notranslate" aria-hidden="true">sort</i>
                        </button>
                      </div>
                    </div>
                    <div class="scroll-container p-2">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Panel Content</h5>
                          <p>
                            Like thunder gonna shake the ground. You think I'm funny when I tell the punchline wrong. California girls we're undeniable. And now it's time to let it through Unconditional, unconditionally. Even brighter than the moon, moon, moon. If you get the chance you better keep her.
                          </p>
                        </div>
                      </div>
                      <div class="card mt-3">
                        <div class="card-body">
                          <h5 class="card-title">Panel Content</h5>
                          <p>
                            Stinging like a bee I earned my stripes. California girls we're undeniable. So I sat quietly, agreed politely. Of anything and everything. You’re gonna hear me roar. Get ready 'cause I’ve had enough. Now I’m floating like a butterfly. I could have rewrite your addiction. Need some goose, to get loose, come on take a shot. This is transcendental, on another level, boy, you're my lucky star. But you better choose carefully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Panel Footer -->
                  <div class="panel-footer">Panel Footer</div>
                </div>
                <div class="modus-content p-5" id="modusContent">
                  <!-- Modus Content -->
                  <h1>Content</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates vel nobis repellat officia, vitae perferendis
                    quis hic at id dignissimos porro similique tempore
                    consequatur repudiandae iste blanditiis tenetur facere
                    minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates vel nobis repellat officia, vitae perferendis
                    quis hic at id dignissimos porro similique tempore
                    consequatur repudiandae iste blanditiis tenetur facere
                    minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates vel nobis repellat officia, vitae perferendis
                    quis hic at id dignissimos porro similique tempore
                    consequatur repudiandae iste blanditiis tenetur facere
                    minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates vel nobis repellat officia, vitae perferendis
                    quis hic at id dignissimos porro similique tempore
                    consequatur repudiandae iste blanditiis tenetur facere
                    minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates vel nobis repellat officia, vitae perferendis
                    quis hic at id dignissimos porro similique tempore
                    consequatur repudiandae iste blanditiis tenetur facere
                    minus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Modus Footer -->
          <div class="modus-footer">Modus Footer</div>
        </div>
      </div>
</div>

### Modus Sidebar

The Modus sidebar is a simple Bootstrap
<code>.nav flex-column</code> element with an additional
<code>.modus-sidebar</code> class for styling. Each
<code>.nav-link</code> should have an icon or image with a class of
<code>.left-nav-icon</code>.

The <code>.modus-body</code> should have a class of either
<code>.sidebar-open</code> or <code>.sidebar-closed</code> to open or
close the sidebar.

Toggling the sidebar is done through a menu button icon with an
attribute of <code>data-modus-item="menu-btn"</code>. The
<code>.modus-body</code> should also have a corresponding attribute of
<code>data-modus-item="body"</code>.

<div class="guide-example-block d-flex position-relative">
  <div class="guide-sample position-relative p-0 border bg-transparent" style="height: 300px; z-index: 10;" id="sidebarExample">
        <!-- Modus Layout Page Wrapper -->
        <div class="modus-layout">
          <!-- Modus Header -->
          <nav class="navbar navbar-expand-lg modus-header">
            <a class="btn btn-lg btn-icon-only btn-text-dark" data-modus-item="menu-btn">
              <i class="modus-icons menu-btn notranslate" aria-hidden="true">menu</i>
            </a>
            <a href="#modus-sidebar" class="navbar-brand">BRAND</a>
          </nav>
          <!-- Modus Body Wrapper -->
          <div class="modus-body sidebar-open bg-transparent" data-modus-item="body">
            <!-- Modus Sidebar -->
            <nav class="nav flex-column modus-sidebar">
              <ul>
                <li>
                  <a class="nav-link active" href="#modus-sidebar">
                  <span class="left-nav-icon"><i class="modus-icons notranslate" aria-hidden="true">home</i></span>
                    Nav Item (Icon Font)
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#modus-sidebar"><span class="left-nav-icon">
                  <svg height="24" width="24">
                        <circle cx="12" cy="12" r="12" fill="#363545"></circle>
                        <text fill="#ffffff" text-anchor="middle" font-size="9" font-weight="700"
                          font-family="Open Sans" x="12" y="15">
                          SVG
                        </text>
                      </svg></span>
                    Nav Item (Inline SVG)
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#modus-sidebar"><span class="left-nav-icon">
                  <img src="/img/route.svg" height="24" width="24" alt="" /></span>
                    Nav Item (SVG Image)
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#modus-sidebar"><span class="left-nav-icon">
                  <img src="/img/check-mark-orange.png" height="24" width="24"
                        style="min-width: 24px;" alt="" /></span>
                    Nav Item (PNG Image, 24x24)
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
</div>

### Modus Toolbar

Our framework includes an all purpose toolbar that can be inserted
inside your layout. Simply add `.modus-toolbar` inside
`.modus-content-rows`.

You can use our other components, such as buttons and form groups,
inside `.modus-toolbar` to add functionality to your
application.

<div class="guide-example-block d-flex position-relative">
  <div class="guide-sample position-relative p-0 bg-transparent" style="z-index: 10;" id="example-block2">
    <!-- Modus Layout Page Wrapper -->
    <div class="modus-layout">
      <!-- Modus Body Wrapper -->
      <div class="modus-body">
        <div class="modus-content-rows">
          <!-- Modus Toolbar -->
          <div class="modus-toolbar">
            <form class="form-inline ml-3 mr-5">
              <div class="form-group">
                <label class="mr-2" for="profiles"><strong>Profile</strong></label>
                <select class="form-control" name="profiles" id="profiles">
                  <option>Profile 1</option>
                  <option>Profile 2</option>
                  <option>Profile 3</option>
                </select>
              </div>
            </form>
            <button class="btn btn-text-secondary btn-lg btn-icon-only" type="button" aria-label="Palette">
              <i class="modus-icons notranslate" aria-hidden="true">palette</i>
            </button>
            <button class="btn btn-text-secondary btn-lg btn-icon-only" type="button" aria-label="Calendar">
              <i class="modus-icons notranslate" aria-hidden="true">calendar</i>
            </button>
            <button class="btn btn-text-secondary btn-lg btn-icon-only" type="button" aria-label="Settings">
              <i class="modus-icons notranslate" aria-hidden="true">settings</i>
            </button>
            <form class="form-inline ml-5" onsubmit="return false;">
              <input type="search" class="form-control" placeholder="Search..." />
              <button class="btn btn-text-secondary btn-lg btn-icon-only ml-2" type="button" aria-label="Search">
                <i class="modus-icons notranslate" aria-hidden="true">search</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Modus Panel

Our framework also includes panels that can be inserted into your
layout. Simply add `.modus-panel` inside of
`.modus-content-columns` before `.modus-content`.

The panels come with `.panel-header`,
`.panel-body`, and `.panel-footer` classes for
additional layout options.

Items can be aligned to the left or right of the
`.panel-header` by using either `.left-items` or
`.right-items` classes.

You also have the option of including `.static-container` and
`.scroll-container` inside the `.panel-body` for
additional functionality.

**Note:** Modus Panels must be given a `width` using any of the following classes:

- `.panel-sm` (256px)
- `.panel-md` (352px)
- `.panel-lg` (448px)
- `.panel-xl` (544px)

<div class="guide-example-block d-flex position-relative">
  <div class="guide-sample position-relative p-0 border bg-transparent" style="height: 400px; z-index: 10;" id="example-block3">
    <!-- Modus Layout Page Wrapper -->
    <div class="modus-layout">
      <!-- Modus Body Wrapper -->
      <div class="modus-body">
        <div class="modus-content-rows">
          <div class="modus-content-columns">
            <!-- Modus Panel -->
            <div class="modus-panel panel-lg shadow-sm bg-transparent">
              <!-- Panel Header -->
              <div class="panel-header bg-transparent">
                <div class="left-items ml-2">
                  <div class="custom-control custom-switch">
                    <input type="checkbox" checked class="custom-control-input" id="exampleSwitch"
                      name="exampleSwitch" />
                    <label class="custom-control-label" for="exampleSwitch"></label>
                  </div>
                </div>
                <h5>Panel Header</h5>
                <div class="right-items mr-2">
                  <button class="btn btn-icon-only btn-text-dark" type="button" aria-label="Orders">
                    <i class="modus-icons notranslate" aria-hidden="true">unloaded_orders</i>
                  </button>
                </div>
              </div>
              <!-- Panel Body -->
              <div class="panel-body" style="flex-grow: 1;">
                <!-- Static Container -->
                <div class="static-container">
                  <div class="d-flex">
                    <button class="btn btn-icon-only btn-text-dark" type="button" aria-label="Filter">
                      <i class="modus-icons notranslate" aria-hidden="true">filter</i>
                    </button>
                    <button class="btn btn-icon-only btn-text-dark" type="button" aria-label="Layout">
                      <i class="modus-icons notranslate" aria-hidden="true">layout</i>
                    </button>
                    <button class="btn btn-icon-only btn-text-dark" type="button" aria-label="Add Route">
                      <i class="modus-icons notranslate" aria-hidden="true">route_add</i>
                    </button>
                    <button class="btn btn-icon-only btn-text-dark disabled" type="button" aria-label="Route">
                      <i class="modus-icons notranslate" aria-hidden="true">finalize_route</i>
                    </button>
                    <button class="btn btn-icon-only btn-text-dark disabled" type="button" aria-label="Trim Orders">
                      <i class="modus-icons notranslate" aria-hidden="true">trim_fake_orders</i>
                    </button>
                  </div>
                  <div class="d-flex">
                    <button class="btn btn-icon-only btn-text-dark align-self-end" type="button" aria-label="Sort">
                      <i class="modus-icons notranslate" aria-hidden="true">sort</i>
                    </button>
                  </div>
                </div>
                <!-- Scroll Container -->
                <div class="scroll-container p-2">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Panel Content</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Explicabo asperiores doloremque dolorum qui
                        ducimus quae eius alias perspiciatis, quod, libero
                        fuga recusandae quidem molestias nobis non soluta.
                        Doloremque, in iusto?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Explicabo asperiores doloremque dolorum qui
                        ducimus quae eius alias perspiciatis, quod, libero
                        fuga recusandae quidem molestias nobis non soluta.
                        Doloremque, in iusto?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Panel Footer -->
              <div class="panel-footer">Panel Footer</div>
            </div>
            <!-- Modus Content -->
            <div class="modus-content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
