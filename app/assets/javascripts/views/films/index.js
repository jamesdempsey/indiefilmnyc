App.FilmsContainer = Ember.CollectionView.extend({
  templateName: 'films.index',
  elementId: 'container',
  contentBinding: 'controller.content',
  itemViewClass: Ember.View.extend({
    classNames: ['item'],
    template: Ember.Handlebars.compile("{{#linkTo films.show view.content}}{{view.content.title}}{{/linkTo}}")
  }),
  didInsertElement: function() {
    Ember.run.next(this, function() {
      $('#container').isotope({
        masonry: {
          columnWidth: 240
        }
      });
      console.log('loaded');
    });
    console.log(this.get('content'));
    console.log(this);
  }
});
