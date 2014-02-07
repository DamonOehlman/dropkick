# dropkick

A helpful sidekick for dealing with the HTML5
[Drag and drop](http://www.w3.org/TR/html5/editing.html#dnd) API.


[![NPM](https://nodei.co/npm/dropkick.png)](https://nodei.co/npm/dropkick/)


## Example Usage

```js
var dropkick = require('dropkick');

dropkick(document.body)
  .on('file', function(file) {
    console.log('dropped file: ', file);
  })
  .on('uri', function(uri) {
    console.log('dropped uri: ' + uri);
  });

// make sure we have some document body to drop onto...
document.body.style.height = window.innerHeight + 'px';
```

## License(s)

### MIT

Copyright (c) 2014 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
