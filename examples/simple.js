var dropkick = require('..');

dropkick(document.body)
  .on('file', function(file) {
    console.log('dropped file: ', file);
  })
  .on('uri', function(uri) {
    console.log('dropped uri: ' + uri);
  });

document.body.style.height = window.innerHeight + 'px';