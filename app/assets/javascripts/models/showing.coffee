App.Showing = DS.Model.extend(
  film_id:    DS.attr('number')
  theater_id: DS.attr('number')
  showtime:   DS.attr('date')
  film:       DS.belongsTo('App.Film')
  theater:    DS.belongsTo('App.Theater')
)
