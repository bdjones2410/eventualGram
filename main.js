var $ = require('jquery');
var _ = require('underscore');
var PicModel = require('./pics');
var PicCollection = require('./picsCollections');
var picArr = [];
var picCollection = new PicCollection();
$(document).ready(function(){
  page.init();

  });


  var page = {

      init:function(){
        page.events();
        page.styling();
      },


      events:function(){



          $('form').on('click','.sub', function(e){
            e.preventDefault();
            var picURl = $(this).siblings('.picLink').val();
            var picCapt = $(this).siblings('.picDesc').val();
            $(this).siblings('input').val('');
            var newPic = new PicModel({picURL: picURl, caption: picCapt});
            newPic.save().then(page.styling());
          });

          $('.gallery').on('click','.likeIt', function(e){
            e.preventDefault();
            id = $(this).attr('id');
            curpic = picCollection.get(id);
            curlikes = curpic.attributes.likes;
            curpic.set({likes: curlikes+1});
            curpic.save().then(page.styling());

          });

          $('.gallery').on('click','.delete', function(e){
            e.preventDefault();
            id=$(this).attr('id');
            curpic = picCollection.get(id);
            curpic.destroy().then(page.styling());

          });

        },

      styling:function(){
        picCollection.fetch().then(function(){
          picArr=[];
          _.each(picCollection.models, function(el){
            picArr.push(el);
          });
          page.loadTemp($('.gallery'), picArr, $('#galTemp').html());
        });


      },

      loadTemp: function($section, array, $template){
        var template = _.template($template);
        var ourhtml = '';
        _.each(array, function(el){
          ourhtml += template(el);
        });
        $section.html(ourhtml);
      }

  };
