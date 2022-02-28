# Typography

## Headings

h1 to h6:

<div>
  <cap-title tag="h1">Header Title 01</cap-title>
  <cap-title tag="h2" style="border: none;padding:0;">Header Title 02</cap-title>
  <cap-title tag="h3">Header Title 03</cap-title>
  <cap-title tag="h4">Header Title 04</cap-title>
  <cap-title tag="h5">Header Title 05</cap-title>
  <cap-title tag="h6">Header Title 06</cap-title>
</div>

Small

<div>
  <cap-title tag="h1" class="small">Header Title 01</cap-title>
  <cap-title tag="h2" class="small">Header Title 02</cap-title>
  <cap-title tag="h3" class="small">Header Title 03</cap-title>
  <cap-title tag="h4" class="small">Header Title 04</cap-title>
  <cap-title tag="h5" class="small">Header Title 05</cap-title>
  <cap-title tag="h6" class="small">Header Title 06</cap-title>
</div>

::: details Preview the code
```vue
<div>
  <cap-title tag="h1">Header Title 01</cap-title>
  <cap-title tag="h2" style="border: none;padding:0;">Header Title 02</cap-title>
  <cap-title tag="h3">Header Title 03</cap-title>
  <cap-title tag="h4">Header Title 04</cap-title>
  <cap-title tag="h5">Header Title 05</cap-title>
  <cap-title tag="h6">Header Title 06</cap-title>
</div>

Small

<div>
  <cap-title tag="h1" class="small">Header Title 01</cap-title>
  <cap-title tag="h2" class="small">Header Title 02</cap-title>
  <cap-title tag="h3" class="small">Header Title 03</cap-title>
  <cap-title tag="h4" class="small">Header Title 04</cap-title>
  <cap-title tag="h5" class="small">Header Title 05</cap-title>
  <cap-title tag="h6" class="small">Header Title 06</cap-title>
</div>
```
:::

Different sizes of Subtitle:
<div>
  <cap-title type="subheading" size="1" transform="uppercase">Subtitle 01</cap-title>
  <cap-title type="subheading" size="2" transform="uppercase">Subtitle 02</cap-title>
</div>

Small:
<div>
  <cap-title type="subheading" class="small" size="1" transform="uppercase">Subtitle 01</cap-title>
  <cap-title type="subheading" class="small" size="2" transform="uppercase">Subtitle 02</cap-title>
</div>
::: details Preview the code
```vue
<div>
  <cap-title type="subheading" size="1" transform="uppercase">Subtitle 01</cap-title>
  <cap-title type="subheading" size="2" transform="uppercase">Subtitle 02</cap-title>
</div>

Small:
<div>
  <cap-title type="subheading" class="small" size="1" transform="uppercase">Subtitle 01</cap-title>
  <cap-title type="subheading" class="small" size="2" transform="uppercase">Subtitle 02</cap-title>
</div>
```
:::

## paragraphs

Different sizes of cap-text:

<div>
  <cap-text size="lead" font="300">Lead paragraph text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</cap-text>
  <br />
  <cap-text size="para" font="300">Paragraph text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</cap-text>
  <br />
  <cap-text size="quote" font="200">Example of a long quote</cap-text>
</div>

Small

<div>
  <cap-text size="lead" font="300" class="small">Lead paragraph text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</cap-text>
  <br />
  <cap-text size="para" font="300" class="small">Paragraph text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</cap-text>
  <br />
  <cap-text size="quote" font="200" class="small">Example of a long quote</cap-text>
</div>


::: details Preview the code
```vue

<div>
  <cap-text size="lead" font="300">Lead paragraph text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</cap-text>
  <br />
  <cap-text size="para" font="300">Paragraph text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</cap-text>
  <br />
  <cap-text size="quote" font="200">Example of a long quote</cap-text>
</div>

Small

<div>
  <cap-text size="lead" font="300" class="small">Lead paragraph text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</cap-text>
  <br />
  <cap-text size="para" font="300" class="small">Paragraph text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</cap-text>
  <br />
  <cap-text size="quote" font="200" class="small">Example of a long quote</cap-text>
</div>

```
:::