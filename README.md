# Novicell Debounce

[![Greenkeeper badge](https://badges.greenkeeper.io/Novicell/novicell-debounce.svg)](https://greenkeeper.io/)

**Simple function to debounce scroll and resize event**

## Usage

Written in pure Vanilla JS, it has *no dependencies*.

### Install with npm

```bash
npm install novicell-debounce --save
```

## Setup
In this example `vendorPath` is the path to your *node_modules* folder.
First add the debouncer script in your `vendor`-bundle in your `gulp/config.js`-file:

```javascript
scripts: [
    vendorPath + "novicell-cookie-info/js/novicell.cookieinfo.js"
    ...
]
```
Then make sure to include the js file in your HTML:
```html
<script defer src="/dist/scripts/vendor.min.js"></script>
```

## Example
Finally you need to use the debouncer. Create a function, and an eventlistener. Wrap your function in `novicell.debounce` and set a debounce delay.

```javascript
function doStuff() {
    if (window.innerWidth > 750) {
        console.log('Screen is wider than 750 pixels');
    }
};

window.addEventListener('resize', novicell.debounce(doStuff, 250));
```