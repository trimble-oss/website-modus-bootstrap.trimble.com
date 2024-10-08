---
title: "Device Support"
layout: "single"
description: "Modus supports design patterns, best usability and accessibility practices for products built across platforms."
start: true
---

Trimble suite of products spans a plethora of sectors and devices. In order to ensure different teams can build beautiful user experiences, Modus currently supports the following devices and platforms:

## Currently Supported

### Web-based Software

Software that is built to be viewed on a web-browser on a desktop, tablet, and/or other mobile device. The content adapts to different screen sizes. Modus provides a responsive grid and design patterns that reflect best usability practices for all breakpoints.

Modus Bootstrap supports the following browsers:

- Chrome >= 80
- Edge >= 80
- Firefox >= 80
- iOS >= 12
- Safari >= 12

Note: As [Microsoft themselves have dropped support](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/) we no longer include that in our default browserslist config, but you can add support by editing the browserslist config for your project.

We use [Autoprefixer](https://github.com/postcss/autoprefixer) to handle intended browser support via CSS prefixes, which uses [Browserslist](https://github.com/browserslist/browserslist) to manage these browser versions. Consult their documentation for how to integrate these tools into your projects.

### Desktop Software

A desktop application runs on a computer or device locally and is built to be installed in the environment of the device’s operating system (i.e. Microsoft Windows).

### Mobile Applications

Modus supports native, hybrid, and web-based apps designed to run on a mobile device such as a phone or a tablet. Currently, we do not support watch patterns.
