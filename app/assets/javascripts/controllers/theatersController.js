App.TheatersIndexController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true
});

App.TheatersShowController = Ember.ObjectController.extend({
  needs: ['filmsShow'],
  //test_property: function() {
    //return this.get('films').get('firstObject').get('showings');
  //}.property('films')
  test_property: function() {
    //return this.get('films').find({id: '2'});
    return this.get('films').map(function(film) {
      film.set('at_theater', '20');
      return film.get('scoped_showings').map(function(item) {
      });
    });
  }.property('films')
});

//App.TheatersIndexController = Ember.ArrayController.extend
  //sortProperties: ['name'],
  //sortAscending: true

//App.TheatersShowController = Ember.ObjectController.extend
  //something: (->
    //@get('films').forEach (film) ->
      //film.get('showings').filterProperty({theater_id: 20})
  //).property('films')
