App.TheatersIndexController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true
});

App.TheatersShowController = Ember.ObjectController.extend({
  needs: ['filmsIndex']
});
