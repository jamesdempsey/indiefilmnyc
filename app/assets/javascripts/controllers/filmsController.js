App.FilmsIndexController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  sortAscending: true
});

App.FilmsShowController = Ember.ObjectController.extend({
  showings_per_theater: function() {
    return this.get('showings')
  }.property('showings')
});
