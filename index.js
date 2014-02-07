/* jshint node: true */
'use strict';

var EventEmitter = require('events').EventEmitter;

/**
  # dropkick

  A helpful sidekick for dealing with the HTML5
  [Drag and drop](http://www.w3.org/TR/html5/editing.html#dnd) API.

  ## Example Usage

  <<< examples/simple.js

**/
module.exports = function(target) {
  var dropkick = new EventEmitter();
  var emitFile = dropkick.emit.bind(dropkick, 'file');
  var emitUri = dropkick.emit.bind(dropkick, 'uri');

  function handleDragEnter(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    return false;
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    return false;
  }

  function handleDrop(evt) {
    var transfer = evt && evt.dataTransfer;
    var files = [].slice.call((transfer && transfer.files) || []);
    var urls = [];

    evt.stopPropagation();
    evt.preventDefault();

    // iterate through the transfer types and decide the appropriate action
    transfer.types.forEach(function(transferType) {
      var data = transfer.getData(transferType);

      switch (transferType) {
        case 'text/x-moz-url': {
          urls.push(transfer.getData(transferType));
        }

        case 'text/uri-list': {
          urls.push(transfer.getData(transferType));
        }
      }
    });

    files.forEach(emitFile);
    urls.forEach(emitUri);
  }

  function processItems(items) {
    // if (items instanceof DataItemTransferList) {

    // }
  }

  // add the various listeners
  target.addEventListener('dragenter', handleDragEnter);
  target.addEventListener('dragover', handleDragOver);
  target.addEventListener('drop', handleDrop);

  return dropkick;
};