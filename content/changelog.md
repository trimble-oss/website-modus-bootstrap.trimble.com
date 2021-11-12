---
title: "Changelog"
layout: "single"
description: "View list of changes of releases"
start: true
disableScrollSpy: true
changelog: true
---

<style>
/* only show release versions in right-side bar */
#TableOfContents li li a {
  display: none;
}

#TableOfContents li a {
  border-color: transparent !important;
}

main .h2 {
  margin-top: 8px !important;
}

</style>

## v1.3.1 - 2021-11-11

* Improved checkbox mis-aligned input fix
* Fix for 'Using / for division is deprecated' Dart Sass warning in `_controls.scss`

## v1.3.0 - 2021-10-29

- Update to [Bootstrap v4.6.1](https://github.com/twbs/bootstrap/releases/tag/v4.6.1)
- Add a `.navbar-blue` navbar variant <small>([#222](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap/pull-requests/222/overview))</small>
- Move Google Fonts Import from `modus-variables.scss` to main `modus.scss` for easier customization <small>([#221](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap/pull-requests/221/overview))</small>
- Fix for icon-only button focus state (now no longer has a outline)
- Fix for Checkbox mis-aligned inputs <small>([ETHER-140](https://jira.trimble.tools/browse/ETHER-140))</small>
- Correct Vertical Padding for Navbar so that it displays at 56px
- Remove unused and undocumented yellow variants and gray palette colors
- Correct toast-secondary, tertiary, danger + warning text colors (is now {{< color-preview hex="#252A2E">}})
- Correct color of switches, checkboxes and radio buttons (is now {{< color-preview hex="#90939F">}})

## v1.2.0 - 2021-09-28

- Update Trimble Brand Colors <small>([ETHER-138](https://jira.trimble.tools/browse/ETHER-138))</small>
- Add `panel-xl` class and modify other panel sizes in modus-layout CSS <small>([ETHER-136](https://jira.trimble.tools/browse/ETHER-136))</small>
- Remove deprecated `btn-reverse` button variant (use `btn-outline` instead)
- Smaller npm install size

## v1.1.0 - 2021-08-12

- Change box-shadow color from blue to trimble gray <small>([ETHER-134](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap/pull-requests/204/overview))</small>
- Fix for SASS deprecation warnings for adjust-color() saturation <small>([#202](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap/pull-requests/202/overview))</small>
- Change `<small>` and `.small` font-size from 10.5px to 12px <small>([DDS-174](https://jira.trimble.tools/browse/DDS-174))</small>
- Custom Switch CSS fix for IE11 <small>([ETHER-126](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap/pull-requests/201/overview))</small>
- Drop Edge Legacy support <small>([ETHER-132](https://jira.trimble.tools/browse/ETHER-132))</small>
- Fix for body font-family being duplicated <small>([#203](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap/pull-requests/203/overview))</small>

## v1.0.1 - 2021-06-10

- Update to [Bootstrap v4.6.0](https://github.com/twbs/bootstrap/releases/tag/v4.6.0)
- Input Field Placeholder Shift fix <small>([DDS-133](https://jira.trimble.tools/browse/DDS-133))</small>
- Address SASS deprecation warnings for adjust-color() <small>([ETHER-129](https://jira.trimble.tools/browse/ETHER-129))</small>
- Fix for Indeterminate Checkbox SVG size /position <small>([DDS-107](https://jira.trimble.tools/browse/DDS-107))</small>

## v1.0.0 - 2020-12-08

- Update to [Bootstrap v4.5.3](https://github.com/twbs/bootstrap/releases/tag/v4.5.3)
- Improved [Checkbox](/components/checkboxes/) indeterminate state styling <small>([ETHER-112](https://jira.trimble.tools/browse/ETHER-112))</small>
- Improved [Breadcrumb](/components/breadcrumbs/) chevron style <small>([ETHER-114](https://jira.trimble.tools/browse/ETHER-114))</small>
- Added `breadcrumb-underline` class (with underlined links)
- Changed background-color of form-control [Checkboxes](/components/checkboxes/) from transparent to white for greater contrast on non-white backgrounds
- Add 1px bottom border to form-controls [inputs](/components/inputs/)
- Reduce label size of forms from 13px to 12px
- Increase font size of small [Buttons](/components/buttons/) from 11px to 12px
- Add `code` color {{< color-preview hex="#cc3377">}} (previously it used Bootstrap default)
- Change [Pagination](/components/pagination/) active color to {{< color-preview hex="#07599B">}}
- Change [Pagination](/components/pagination/) active background to {{< color-preview hex="#E5F0F8">}}
- Reduce [Card](/components/cards/) padding to 16px
- Change [Progress](/components/progress-bars/) colors and add 1px {{< color-preview hex="#8C8B96">}} border
- Change [Slider](/components/sliders/) color to `$col_blue`
- Change [Shadow](/foundations/shadows-and-depth/#shadow-depths) depth and colors
- Change [Close](/utilities/close-icon/) button
- Change [Toast](/components/toasts/) colors
- Change [Badge](/components/badges/) Warning text color to `$col_trimble_gray`
- Improved contrast, consistency with custom scrollbars which apply to all elements except body <small>([ETHER-125](https://jira.trimble.tools/browse/ETHER-125))</small>
- Revised Supported Browser <small>([ETHER-120](https://jira.trimble.tools/browse/ETHER-120))</small>

<!-- - Add Sass Source Maps? <small>([ETHER-119](https://jira.trimble.tools/browse/ETHER-119))</small>   -->

## v0.9.5 - 2020-04-23

- Added custom thinner scrollbars to WebKit/Blink and Firefox browsers

## v0.9.2 - 2020-02-06

### General

- Update to [Bootstrap v4.4.1](https://github.com/twbs/bootstrap/releases/tag/v4.4.1)
- Add a `.browserslistrc` config which is used by [Autoprefixer](https://github.com/postcss/autoprefixer) to add vendor prefixes.

### Components

- Added `.message` component with variants from `$theme-colors`

## v0.9.1 - 2019-10-16

### General

- Re-imported Bootstrap's Jumbotron, Carousel, and Print files

### Components

- Updated outline button styles. Hover and Pressed background colors now 10% more opaque and 10% more saturated.
- Removed default Bootstrap styles for `.toast-header` and `.toast-body`
- Removed `min-width` on `.nav-tabs` and `.nav-tabs-sm`
- Adjusted table cell line heights to better accommodate multiple lines
- Adjusted list-group line heights to better accommodate multiple lines
- Changed `.card-header` and `.card-footer` background colors to match `main-background-color`
- Added bottom border to `.card-header`
- Added top border to `.card-footer`

## v0.9.0 - 2019-09-06

### Framework Name Change

- Changed name of framework files from `ether*.css` to `modus*.css`
- Changed name of layout classes from `ether*` to `modus*`
- Removed `material-icons` from `$icon-font-classes`. Now include the `modus-icon` class when using `material-icons`.

### General

- Updated to [Bootstrap v4.3.1](https://github.com/twbs/bootstrap/releases/tag/v4.3.1)
- Enabled customizability via `!default` tags in variable overrides

### Color Palette

- Added `$trimble-grays` `.bg-` color classes
- Removed `light` color from `$theme-colors`
- Removed `info` color from `$theme-colors`
- Added `tertiary` color to `$theme-colors` based on Trimble Gray 2 (#D0D0D7)
- Added `yellow` color to `$theme-colors` based on Trimble Yellow (#FFBE00)
- Changed `secondary` color in `$theme-colors` to Trimble Gray 6 (#8C8B96)
- Changed `warning` color in `$theme-colors` to #FFA500
- Changed `active` color in `$ui-colors` to Blue Alt (#0C77BE)
- Renamed gray colors to Trimble Gray naming scheme

### Typography

- Added `$trimble-grays` `.text-` color classes
- Removed `Roboto` as heading font-family (now Open Sans)
- Removed `.display-` variable overrides

### Components

- Adjusted List Group border color to #EAEAEF (UI hover color)
- Styled `.list-group-outlined` (deprecated) to match default List Group
- Added `.list-group-borderless` which matches `.list-group-chromeless` (deprecated)
- Adjusted Modal Header and Footer to be 3.75rem (60px) in height
- Adjusted Modal Title to be 1rem (16px) bold
- Change modal header and footer internal border color to Trimble Gray 1
- Adjusted badges to have fixed heights (sm: 14px, default: 20px, lg: 28px)
- Adjusted table styles to work with buttons and custom controls
- Changed custom range styles and added hover styles
- Added hover styles to custom switches, radios, and checkboxes
- Revised list group styles (normal heigh 48px, small height 32px)
- Added `.badge-text` theme color variants
- Removed `.btn-raised` classes
- Changed `btn-outline` variants to match `btn-reverse` (which is now deprecated)
- Removed uppercase text transformation from button classes
- Added `.active` and `.selected` button classes to toggle "Active" state (different than `:active`)
- Text only and outline button variants now use opacity for styling rather than lighter colors
- Changed tab styling
- Changed accordion styling
- Added custom breadcrumb styles
- Added gray border classes (`.border-gray-200` etc...)
- Changed opacity of `.nav-tabs .nav-link` in disabled state to 0.3

## v0.3.2 - 2019-08-02

### Layout Fixes

- Fixed issue with `.ether-content-columns` _(Note: "ether" class names were changed to "modus" in v0.9.0)_ not behaving correctly in Firefox (related to bug with `flex-shrink` property)
- Changed `.ether-header` height to 56px

### Components

- Added `.btn-light` styles and corresponding variants
- Custom controls now have cursor pointers on hover (not when disabled)
- Added custom spinner `.spinner-rectangle-bounce`
- Added `.chip-sm` size variant for Chips
- Adjusted badges inside paragraph tags
- Updated alert styles
- Updated toast styles (they now have theme-color variants)
- Changed ether content background color to panel background color (#F3F3F7)
- Updated badge font-size and padding. Badge heights are now equal to the relative font size of their containers
- Changed chip font color to `$gray-600` (#595868)
- Changed chip base color to `$gray-200` (#E2E2E7)
- Updated Accordion styles and added `.accordion-sm` variant
- Reduced font-size for `.tooltip`
- Changed background color and border color to `.control-bg-color` (#009ad9) for input controls in disabled state
- Updated input-group-lg styles (height is now 48px)
- Updated List style for disabled state
- Updated Tables styles for hover, disabled and selected states
- Updated Form Control's disabled state opacity to 0.7
- updated `.custom-control-label` font to match with form label font size and fixed vertical align.

### Color Palette

- Added `light` color (#EAEAEF) to `$theme-colors`
- Changed `selected` color in theme `ui-colors` to #E5F0F8

## v0.3.1 - 2019-06-05

### Layout Fixes

- Panel widths added: `.panel-sm` (250px), `.panel-md` (350px), and `.panel-lg` (450px)
- Fixed z-index for layout to avoid modals

### Color Palette

- Added Trimble Brand Colors and their `.bg-` and `.text-` variants

### Components

- Updated Nav Tabs styles
- Updated tooltip styles
- Updated alert styles
- Added `.dropdown-menu-sm` (140px), `.dropdown-menu-md` (240px), and `.dropdown-menu-lg` (400px) to limit the height with scrolling.

## v0.3.0 - 2019-05-23

### Change to Ether Layout

- Added new `.ether-toolbar`
- Added `.ether-content-rows` and `.ether-content-columns` to better structure the main content area
- Ether layout structure is now as follows:

  ```plaintext
  div.ether-layout
  ├── nav.ether-header
  ├── div.ether-body
  |   ├── nav.ether-sidebar
  |   └── div.ether-content-rows
  |       ├── div.ether-toolbar(optional)
  |       └── div.ether-content-columns
  |           ├── div.ether-panel(optional)
  |           └── div.ether-content
  └── div.ether-footer
  ```

  _(Note: "ether" class names were changed to "modus" in v0.9.0)_

## v0.2.0 - 2019-05-03

### Component Updates

- Switches, Radio buttons, Checkboxes, and Slider overhaul
- Chip alignment fixes

## v0.1.33 - 2019-04-29

### Icons

- Allow for multiple icon libraries (defaults to `ether-icons` and `material-icons`) _(Note: "ether-icons" class names were changed to "modus-icons" in v0.9.0)_

## v0.1.32 - 2019-04-29

### Inputs

- New input boxes and text areas styling

## v0.1.31 - 2019-04-22

### Release

- First official release

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
