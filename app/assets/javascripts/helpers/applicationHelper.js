Ember.Handlebars.registerBoundHelper('getTheaterShowtime', function(theater, showing) {
  if (showing.get('theater_id') == theater.get('id')) {
    escaped = Handlebars.Utils.escapeExpression(showing.get('showtime'));
    return new Handlebars.SafeString('<li>' + escaped + '</li>');
  }
});
