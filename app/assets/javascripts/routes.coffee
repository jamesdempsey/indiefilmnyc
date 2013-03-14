App.Router.reopen
  location: 'history'
  rootURL: '/'

App.Router.map (match) ->
  @resource 'films', ->
    @route 'show',
      path: '/:film_id'

App.IndexRoute = Ember.Route.extend
  setupController: (controller, model) ->
    @controllerFor('application').set('currentRoute', 'home')

App.FilmsIndexRoute = Ember.Route.extend
  model: ->
    App.Film.find()
  setupController: (controller, model) ->
    controller.set('films', model)
    @controllerFor('application').set('currentRoute', 'films')

App.FilmsShowRoute = Ember.Route.extend
  model: (params) ->
    App.Film.find(params.film_id)
  setupController: (controller, model) ->
    controller.set('films', model)
    @controllerFor('application').set('currentRoute', 'films')
