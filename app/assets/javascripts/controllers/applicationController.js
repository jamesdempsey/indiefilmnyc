App.ApplicationController = Ember.Controller.extend({
  isHome: function() {
    return this.get('currentRoute') == 'home'
  }.property('currentRoute'),

  isFilms: function() {
    return this.get('currentRoute') == 'films'
  }.property('currentRoute'),

  isTheaters: function() {
    return this.get('currentRoute') == 'theaters'
  }.property('currentRoute')
});
