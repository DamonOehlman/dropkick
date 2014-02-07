var dropkick = require('..');

dropkick(document.body)
  .on('file', function(file) {
    console.log('dropped file: ', file);
  })
  .on('uri', function(uri) {
    console.log('dropped uri: ' + uri);
  });

// make sure we have some document body to drop onto...
document.body.style.height = window.innerHeight + 'px';