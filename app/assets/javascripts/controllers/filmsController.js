App.FilmsIndexController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  sortAscending: true
});

App.FilmShowingsController = Ember.ObjectController.extend({
  needs: ['theatersShow'],
  filmShowings: function() {
    var theater_id = this.get('controllers.theatersShow.theater').get('id'),
        film_id    = this.get('id');
    return App.Showing.filter(function(showing) {
      return showing.get('theater_id') == theater_id && showing.get('film_id') == film_id;
    });
  }.property('controllers.theatersShow.theater')
});
