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
    controller.set('film', model);
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

App.TheatersShowRoute = App.TheatersRoute.extend({
  model: function(params) {
    return App.Theater.find(params.theater_id);
  },
  setupController: function(controller, model) {
    this._super();
    controller.set('theater', model);
    App.Showing.all();
  }
});
