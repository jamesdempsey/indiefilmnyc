App.Film = DS.Model.extend({
  title:       DS.attr('string'),
  description: DS.attr('string'),
  showings:    DS.hasMany('App.Showing'),
  theaters:    DS.hasMany('App.Theater')
});
