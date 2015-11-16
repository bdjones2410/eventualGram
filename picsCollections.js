var Backbone = require('backbone');
var picModel = require('./pics');

module.exports = Backbone.Collection.extend({
  url:'https://tiny-tiny.herokuapp.com/collections/eventualgram',
  model: picModel

});
