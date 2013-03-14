App.Router.reopen
  location: 'history'
  rootURL: '/'

App.Router.map ->
  @resource 'films', ->

App.IndexRoute = Ember.Route.extend
  setupController: (controller, model) ->
    @controllerFor('application').set('currentRoute', 'home')

App.FilmsIndexRoute = Ember.Route.extend
  model: ->
    App.Film.find()
  setupController: (controller, model) ->
    controller.set('films', model)
    @controllerFor('application').set('currentRoute', 'films')
