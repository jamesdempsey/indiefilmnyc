App.Router.reopen({
  location: 'history',
  rootURL: '/'
});

App.Router.map(function(match) {
  this.resource('films', function() {
    this.route('show', {
      path: '/:film_id'
    });
  });
  this.resource('theaters', function() {
    this.route('show', {
      path: '/:theater_id'
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('application').set('currentRoute', 'home')
  }
});

App.FilmsRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('application').set('currentRoute', 'films')
  }
});

App.FilmsIndexRoute = App.FilmsRoute.extend({
  model: function() {
    return App.Film.find();
  },
  setupController: function(controller, model) {
    this._super();
    controller.set('films', model);
  }
});

App.FilmsShowRoute = App.FilmsRoute.extend({
  model: function(params) {
    return App.Film.find(params.film_id);
  },
  setupController: function(controller, model) {
    this._super();
    controller.set('films', model);
  }
});

App.TheatersRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('application').set('currentRoute', 'theaters')
  }
});

App.TheatersIndexRoute = App.TheatersRoute.extend({
  model: function() {
    return App.Theater.find();
  },
  setupController: function(controller, model) {
    this._super();
    controller.set('theaters', model);
  }
});

App.TheaterIndexRoute = App.TheatersRoute.extend({
  model: function() {
    return this.modelFor('theater');
  },
  setupController: function(controller, model) {
    this._super();
    controller.set('theater', model);
  }
});

//App.Router.reopen
  //location: 'history'
  //rootURL: '/'

//App.Router.map (match) ->
  //@resource 'films', ->
    //@route 'show',
      //path: '/:film_id'
  //#@resource 'theaters',
      //#path: '/:theater_id', ->
      //#@route 'show',
      //#@resource 'films', ->
  //@resource 'theaters', ->
    //@route 'show',
      //path: '/:theater_id', ->
        //@resource 'films', ->

//App.IndexRoute = Ember.Route.extend
  //setupController: (controller, model) ->
    //@controllerFor('application').set('currentRoute', 'home')

//App.FilmsRoute = Ember.Route.extend
  //setupController: ->
    //@controllerFor('application').set('currentRoute', 'films')

//App.FilmsIndexRoute = App.FilmsRoute.extend
  //model: ->
    //App.Film.find()
  //setupController: (controller, model) ->
    //@_super()
    //controller.set('films', model)

//App.FilmsShowRoute = App.FilmsRoute.extend
  //model: (params) ->
    //App.Film.find(params.film_id)
  //setupController: (controller, model) ->
    //@_super()
    //controller.set('films', model)

//App.TheatersRoute = Ember.Route.extend
  //setupController: ->
    //@controllerFor('application').set('currentRoute', 'theaters')

//App.TheatersIndexRoute = App.TheatersRoute.extend
  //model: ->
    //App.Theater.find()
  //setupController: (controller, model) ->
    //@_super()
    //controller.set('theaters', model)

//App.TheatersShowRoute = App.TheatersRoute.extend
  //model: (params) ->
    //App.Theater.find(params.theater_id)
  //setupController: (controller, model) ->
    //@_super()
    //controller.set('theater', model)
