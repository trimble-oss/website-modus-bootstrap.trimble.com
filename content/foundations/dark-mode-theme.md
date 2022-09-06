---
title: "Dark Mode Theme"
layout: "single"
description: "Guidance for adding a dark mode theme to your site"
foundations: true
styleguideURL: "foundations/dark-mode/"
---

## Overview

A dark mode theme for Modus Bootstrap is now available. You can preview how it looks with the sun/moon toggle to the right of the search input above.

How you choose to implement a dark-mode theme on your site is up to you but a few suggested options are suggested below:

### Display the theme based on users browser preference

```html
<link rel="stylesheet" href="/common-styles.css" />
<link rel="stylesheet" href="/modus.min.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="/modus-dark.min.css" media="(prefers-color-scheme: dark)" />
```

This is the easiest method and doesn't require any additional JavaScript but a user won't be able to change their site's color scheme preference from your site. The site theme will always match the users system/browser preference.

### Use a theme-toggle JavaScript library

If you'd like to give users the ability to switch the theme from your site then you can load the CSS with something like:

```scss
html[data-theme="light"] {
  color-scheme: light;
  @import "modus-bootstrap";
}
html[data-theme="dark"] {
  color-scheme: dark;
  @import "modus-bootstrap-dark";
}
```

<br>

and then use a custom JavaScript such as [Theme Switch by Adam Argyle](https://web.dev/building-a-theme-switch-component/). We are using a modified version of that script for this site.

### Recommendations

- Avoid using color utility classes (e.g. `.bg-dark`, .`bg-white`, `text-dark`) in your HTML if the colors will be different between light and dark mode, instead define colors for dark and light modes in your CSS separately.
- Be sure to thoroughly test your site in both light and dark mode. Test in multiple browsers and devices.
- Consider using [PurgeCSS](https://purgecss.com/) to reduce the file-size of the CSS to improve CSS load times.

Note: In order to use `modus-layout.css` with dark-mode CSS the layout CSS should be loaded **before** so that the dark-mode CSS overrides other background-colors set.
