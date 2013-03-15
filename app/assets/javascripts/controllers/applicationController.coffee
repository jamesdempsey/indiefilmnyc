App.ApplicationController = Ember.Controller.extend
  isHome: (->
    @get('currentRoute') == 'home'
  ).property('currentRoute')

  isFilms: (->
    @get('currentRoute') == 'films'
  ).property('currentRoute')

  isTheaters: (->
    @get('currentRoute') == 'theaters'
  ).property('currentRoute')
