---
title: "Inputs"
layout: "single"
description: "Input boxes gather information from users. Labels sit atop these elements."
components: true
keywords: forms, form
aliases:
  - "/components/forms/"
styleguideURL: "components/inputs/"
---

## Overview

Use these tags & classes to opt into their customized displays for a more consistent rendering
across browsers and devices.

Textual form controls—like
`<input>, <select>, and <textarea>` —are styled with the
`.form-control` class. Included are styles for general appearance, focus state, sizing,
and more.

To use an icon with the input, wrap the `<input>` and the icon inside a
`<div>` with appropriate classes.

For indicating error and valid states, use classes
`is-invalid` and `is-valid` respectively.

Be sure to use an appropriate `type` attribute on all inputs (e.g.,
`email` for email address or `number` for numerical information) to take
advantage of newer input controls like email verification, number selection, and more.

Here’s a quick example to demonstrate form styles. Keep reading for documentation on required
classes, form layout, and more.

### Basic Form

{{< example id="example-form" >}}
<form>
  <div class="form-group">
    <label for="Input1">Regular Input</label>
    <input class="form-control" id="Input1" placeholder="Placeholder Text">
  </div>
  <div class="form-group">
    <label for="Input2">Input with icon on right</label>
    <div class="input-with-icon-right">
      <input class="form-control" placeholder="Placeholder Text" id="Input2">
      <div class="input-icon">
        <i class="modus-icon material-icons">visibility</i>
      </div>
    </div>
  </div>

  <div class="form-group">
    <label for="Input3">Input with icon on left</label>
    <div class="input-with-icon-left">
      <input class="form-control" placeholder="Placeholder Text" id="Input3">
      <div class="input-icon">
        <i class="modus-icon material-icons">search</i>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="Input4">Input with a button</label>
    <div class="input-group">
      <input class="form-control" placeholder="Placeholder Text" id="Input4">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary">
          Go
        </button>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Custom Select Outlined</label>
    <select class="custom-select form-control" id="exampleFormControlSelect2">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{{</ example >}}

### Input States

States can be applied to all input types.

<div class="guide-example-block d-flex position-relative">
  <div class="guide-sample bg-transparent">
    <div>
      <h5>On Focus</h5>
      <p><code>class="focus"</code></p>
      <div class="form-group">
        <label for="Input1">Label</label>
        <div class="input-with-icon-left">
          <input class="form-control focus" value="Focus" id="Input1" />
          <div class="input-icon">
            <i class="modus-icon material-icons">search</i>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h5>Is Valid State</h5>
      <p><code>class="is-valid"</code></p>
      <div class="form-group">
        <label for="Input6">Label</label>
        <div class="input-with-icon-right">
          <input class="form-control is-valid" value="Valid" id="Input2" />
          <div class="input-icon">
            <i class="modus-icon material-icons">visibility</i>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h5>Is Invalid State</h5>
      <p><code>class="is-invalid"</code></p>
      <div class="form-group">
        <label for="Input3">Label</label>
        <div class="input-with-icon-left">
          <input class="form-control is-invalid" value="Invalid" id="Input3" />
          <div class="input-icon">
            <i class="modus-icon material-icons">search</i>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h5>Disabled State</h5>
      <p>attribute : <code>disabled</code></p>
      <div class="form-group">
        <label for="Input4">Label</label>
        <div class="input-with-icon-right">
          <input class="form-control" value="Disabled" id="Input4" disabled />
          <div class="input-icon">
            <i class="modus-icon material-icons">visibility</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Form Feedback

Feedback text can be added after your form inputs with the
`.valid-feedback` or `.invalid-feedback` classes.

{{< example id="example-form-feedback" >}}
<form>
  <div class="form-group">
    <label for="valid">Valid Feedback</label>
    <input type="text" class="form-control is-valid" id="valid" value="This is valid">
    <div class="valid-feedback">
      This is valid feedback.
    </div>
  </div>
  <div class="form-group">
    <label for="invalid">Invalid Feedback</label>
    <input type="text" class="form-control is-invalid" id="invalid" value="This is invalid">
    <div class="invalid-feedback">
      This is invalid feedback.
    </div>
  </div>
</form>
{{< /example >}}

### Large Inputs

For large input variants, add `.form-control-lg` to the input and
`.label-lg` to the label.

{{< example id="example-form-large" >}}
<div class="form-group">
  <label class="label-lg" for="Input1">Regular Input</label>
  <input class="form-control form-control-lg" id="Input1" placeholder="Placeholder Text">
</div>
<div class="form-group">
  <label class="label-lg" for="Input2">Input with icon on right</label>
  <div class="input-with-icon-right">
    <input class="form-control form-control-lg" placeholder="Placeholder Text" id="Input2">
    <div class="input-icon">
      <i class="modus-icon material-icons">visibility</i>
    </div>
  </div>
</div>

<div class="form-group">
  <label class="label-lg" for="Input3">Input with icon on left</label>
  <div class="input-with-icon-left">
    <input class="form-control form-control-lg" placeholder="Placeholder Text" id="Input3">
    <div class="input-icon">
      <i class="modus-icon material-icons">search</i>
    </div>
  </div>
</div>
<div class="form-group">
  <label class="label-lg" for="Input4">Input with a button</label>
  <div class="input-group">
    <input class="form-control form-control-lg" placeholder="Placeholder Text" id="Input4">
    <div class="input-group-append">
      <button class="btn btn-outline-secondary">
        Go
      </button>
    </div>
  </div>
</div>
<div class="form-group">
  <label class="label-lg" for="exampleFormControlSelect1">Custom Select Outlined</label>
  <select class="custom-select form-control form-control-lg" id="exampleFormControlSelect2">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
  </select>
</div>
{{</ example >}}

### Text Area

{{< example id="example-textarea" >}}
<div class="form-group">
  <label for="Input1">Normal Text Area</label>
  <textarea class="form-control" id="Input1">Some Text</textarea>
</div>
<div class="form-group">
  <label class="label-lg" for="Input2">Large Text Area</label>
  <textarea class="form-control form-control-lg" id="Input2">Some Text</textarea>
</div>
{{</ example >}}

### Readonly

Add the `readonly` boolean attribute on an input to prevent modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

{{< example id="example-readonly" >}}
<input class="form-control" type="text" placeholder="Readonly input here..." readonly>
{{</ example >}}

### Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, use the `.form-control-plaintext` class to remove the default form field styling and preserve the correct `margin` and `padding`.

{{< example id="example-readonly-plain-text" >}}
<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
</form>
{{</ example >}}

## Layout

Since Modus Bootstrap applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

### Form groups

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element.

{{< example >}}
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
  </div>
</form>
{{< /example >}}

### Form grid

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

{{< example >}}
<form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
{{< /example >}}

#### Form row

You may also swap `.row` for `.form-row`, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.

{{< example >}}
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
{{< /example >}}

More complex layouts can also be created with the grid system.

{{< example >}}
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" id="gridCheck">
      <label class="custom-control-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{{< /example >}}

#### Horizontal form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<label>`s as well so they're vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

{{< example >}}
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3">
    </div>
  </div>
  <fieldset class="form-group row">
    <legend class="col-form-label col-sm-2 float-sm-left pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="custom-control custom-radio">
        <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="custom-control-label" for="gridRadios1">
          First radio
        </label>
      </div>
      <div class="custom-control custom-radio">
        <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="custom-control-label" for="gridRadios2">
          Second radio
        </label>
      </div>
      <div class="custom-control custom-radio disabled">
        <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
        <label class="custom-control-label" for="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-10 offset-sm-2">
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="gridCheck1">
        <label class="custom-control-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
{{< /example >}}

##### Horizontal form label sizing

Be sure to use `.col-form-label-lg` to your `<label>`s or `<legend>`s to correctly follow the size of `.form-control-lg`.

{{< example >}}
<form>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
    </div>
  </div>
</form>
{{< /example >}}

#### Column sizing

As shown in the previous examples, our grid system allows you to place any number of `.col`s within a `.row` or `.form-row`. They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `.col`s equally split the rest, with specific column classes like `.col-7`.

{{< example >}}
<form>
  <div class="form-row">
    <div class="col-7">
      <input type="text" class="form-control" placeholder="City">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="State">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Zip">
    </div>
  </div>
</form>
{{< /example >}}

#### Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

{{< example >}}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="custom-control custom-checkbox mb-2">
        <input class="custom-control-input" type="checkbox" id="autoSizingCheck">
        <label class="custom-control-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
{{< /example >}}

You can then remix that once again with size-specific column classes.

{{< example >}}
<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
      </div>
    </div>
    <div class="col-auto my-1">
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="autoSizingCheck2">
        <label class="custom-control-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{{< /example >}}

### Inline forms

Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are `display: flex`, collapsing any HTML white space and allowing you to provide alignment control with spacing and flexbox utilities.
- Controls and input groups receive `width: auto` to override the Bootstrap default `width: 100%`.
- Controls **only appear inline in viewports that are at least 576px wide** to account for narrow viewports on mobile devices.

You may need to manually address the width and alignment of individual form controls with spacing utilities (as shown below). Lastly, be sure to always include a `<label>` with each form control, even if you need to hide it from non-screenreader visitors with `.sr-only`.

{{< example >}}
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

<label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>

  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
  </div>

  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
{{< /example >}}

{{< callout warning >}}

##### Alternatives to hidden labels

Assistive technologies such as screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria-labelledby` or `title` attribute. If none of these are present, assistive technologies may resort to using the `placeholder` attribute, if present, but note that use of `placeholder` as a replacement for other labelling methods is not advised.
{{< /callout >}}

## Help text

Block-level help text in forms can be created using `.form-text` (previously known as `.help-block` in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted`.

{{< callout warning >}}

##### Associating help text with form controls

Help text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.
{{< /callout >}}

Help text below inputs can be styled with `.form-text`. This class includes `display: block` and adds some top margin for easy spacing from the inputs above.

{{< example >}}
<label for="inputPassword5">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{{< /example >}}

Inline text can use any typical inline HTML element (be it a `<small>`, `<span>`, or something else) with nothing more than a utility class.

{{< example >}}
<form class="form-inline">
  <div class="form-group">
    <label for="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{{< /example >}}

## Disabled forms

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

```html
```

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within.

{{< example >}}
<form>
  <fieldset disabled>
    <legend>Disabled fieldset example</legend>
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect" class="form-control custom-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="form-group">
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="custom-control-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{{< /example >}}

{{< callout warning >}}

##### Caveat with anchors

Browsers treat all native form controls (`<input>`, `<select>`, and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them.

However, if your form also includes custom button-like elements such as `<a ... class="btn btn-*">`, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons](/components/buttons#disabled-state) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn't fully supported in Internet Explorer 10. The anchor-based controls will also still be focusable and operable using the keyboard. You must manually modify these controls by adding `tabindex="-1"` to prevent them from receiving focus and `aria-disabled="disabled"` to signal their state to assistive technologies.
{{< /callout >}}

{{< callout danger >}}

#### Cross-browser compatibility

While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don't fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.
{{< /callout >}}

### File browser

{{< callout info >}}
The recommended plugin to animate custom file input: [bs-custom-file-input](https://www.npmjs.com/package/bs-custom-file-input), that's what we are using currently here in our docs.
{{< /callout >}}

The file input is the most gnarly of the bunch and requires additional JavaScript if you'd like to hook them up with functional _Choose file..._ and selected file name text.

{{< example >}}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
{{< /example >}}

We hide the default file `<input>` via `opacity` and instead style the `<label>`. The button is generated and positioned with `::after`. Lastly, we declare a `width` and `height` on the `<input>` for proper spacing for surrounding content.

#### Translating or customizing the strings with SCSS

The [`:lang()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) is used to allow for translation of the "Browse" text into other languages. Override or add entries to the `$custom-file-text` Sass variable with the relevant [language tag](https://en.wikipedia.org/wiki/IETF_language_tag) and localized strings. The English strings can be customized the same way. For example, here's how one might add a Spanish translation (Spanish's language code is `es`):

```scss
$custom-file-text: (
  en: "Browse",
  es: "Elegir"
);
```

Here's `lang(es)` in action on the custom file input for a Spanish translation:

{{< example >}}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLang" lang="es">
  <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
</div>
{{< /example >}}

You'll need to set the language of your document (or subtree thereof) correctly in order for the correct text to be shown. This can be done using [the `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) on the `<html>` element or the [`Content-Language` HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12), among other methods.

#### Translating or customizing the strings with HTML

Bootstrap also provides a way to translate the "Browse" text in HTML with the `data-browse` attribute which can be added to the custom input label (example in Dutch):

{{< example >}}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLangHTML">
  <label class="custom-file-label" for="customFileLangHTML" data-browse="Bestand kiezen">Voeg je document toe</label>
</div>
{{< /example >}}

<script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js"></script>
<script>
$(document).ready(function () {
  bsCustomFileInput.init()
});
</script>
