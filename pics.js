var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  //post and store pictures.
  urlRoot : 'https://tiny-tiny.herokuapp.com/collections/eventualgram',
  //id for each picture
  idAttribute: '_id',
  //all pics have url to image, number of likes, and caption
  defaults:{
    picURL: "http://culturainquieta.com/images/articles/Breathtaking_Sculpture_Of_Mother_Nature_Rotating_Earth/Lorenzo_Quinn__madre_naturaleza_escultura2.jpg",
    likes: 0,
    caption: "Awesome Sauce",
  },
  //confirm that it's being created
  initialize: function(){
    console.log('new pic added');
  }







});
