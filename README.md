# d3-html-color-palette

The D3 HTML Color Palette presents a set of named CSS colors in a responsive grid layout.

## The Colors
The named CSS colors are stored in a CSV version of the [HTML named Colors HTML table](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) that is loaded with [d3.csv](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#csv).

## The Layout
D3 creates a color swatch <code>DIV</code> element for each row of CSV color data that is organised out with a [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). The responsive layout is implemented with media queries that control the number of columns in the grid layout.

## Text Color
The text of each color swatch is either black or white to contrast with the background color. The lightness component of the [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) color model ranges from 0 to 1 and is used to control the text color: black is chosen for colors with a lightness value of 0.5 or more; white otherwise.

<img src="https://jeffreymorganio.github.io/d3-html-color-palette/d3-html-color-palette.png" alt="D3 HTML Color Palette" width="100%">
