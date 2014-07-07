'use strict';

var Filter = require('broccoli-filter');
var colorguard = require('colorguard');


/**
 * Initialize `ColorguardFilter` with options
 *
 * @param {Object} inputTree
 * @param {Object} opts
 * @api public
 */

function ColorguardFilter(inputTree, opts) {
    if (!(this instanceof ColorguardFilter)) {
        return new ColorguardFilter(inputTree, opts);
    }

    this.inputTree = inputTree;
    this.opts = opts || {};
}

/**
 * Create object
 */

ColorguardFilter.prototype = Object.create(Filter.prototype);
ColorguardFilter.prototype.constructor = ColorguardFilter;

/**
 * Extensions
 */

ColorguardFilter.prototype.extensions = ['css'];
ColorguardFilter.prototype.targetExtension = 'css';

/**
 * Process CSS
 *
 * @param {String} str
 * @api public
 */

ColorguardFilter.prototype.processString = function (str) {
  var output = colorguard.inspect(str, this.opts);

  if (output && output.collisions && output.collisions.length) {
    var errors = output.collisions.map(function(collision) {
      return 'Collision: ' +
        collision.colors[0].rgb + ' ' +
        collision.colors[1].rgb +
        ' (' + collision.distance + ')';
    });
    throw new Error(errors.join('\n'));
  }

  // In case some one does chain
  return str;
};

/**
 * Module exports
 */

module.exports = ColorguardFilter;
