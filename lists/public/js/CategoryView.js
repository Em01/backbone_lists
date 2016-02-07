window.CategoryView = Backbone.View.extend({
  template: "#categoryView",
  events: {
    'click .delete': 'removeCategory'
  },
  initialize: function() {
    _.bindAll(this, 'render', 'removeCategory');
    this.collection.fetch();
    this.collection.bind('all', this.render);
  },
  
  removeCategory: function(e) {
    e.preventDefault();
    console.log('removed');
  },
  render: function() {
    $(this.el).html($(this.template).html());

    this.collection.each(function(cat){
      var template = '<li data-id="'+cat.get('_id')+'">'+
                        cat.get('name') + ' <a href="#" class="pull-right delete">x</a>'+
                      '</li>';

      $(this.el).find('.categories').append('<li>'+cat.get('_id')+'</li>');
    
    },this); //makes this the same this as the rest of the application
    return this;
  }

});
