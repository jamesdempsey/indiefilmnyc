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

App.FilmsRoute = Ember.Route.extend
  setupController: ->
    @controllerFor('application').set('currentRoute', 'films')

App.FilmsIndexRoute = App.FilmsRoute.extend
  model: ->
    App.Film.find()
  setupController: (controller, model) ->
    @_super()
    controller.set('films', model)

App.FilmsShowRoute = App.FilmsRoute.extend
  model: (params) ->
    App.Film.find(params.film_id)
  setupController: (controller, model) ->
    @_super()
    controller.set('films', model)
