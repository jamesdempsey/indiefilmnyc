App.Theater = DS.Model.extend(
  name:     DS.attr('string')
  showings: DS.hasMany('App.Showing')
)
