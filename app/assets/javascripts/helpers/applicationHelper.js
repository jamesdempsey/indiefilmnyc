Ember.Handlebars.registerBoundHelper('formatShowtime', function(showtime) {
  var ap = '', showtimeDateTime = new Date(showtime),
      showtimeDate = showtimeDateTime.toDateString(),
      showtimeHour = showtimeDateTime.getHours(),
      showtimeMinutes = showtimeDateTime.getMinutes().toString();

  ap = (showtimeHour < 12) ? 'AM' : 'PM';
  if (showtimeHour == 0) {
    showtimeHour = 12;
  }
  if (showtimeHour > 12) {
    showtimeHour = showtimeHour - 12;
  }
  if (showtimeMinutes.length == 1) {
    showtimeMinutes = '0' + showtimeMinutes;
  }
  return [showtimeDate, [showtimeHour, showtimeMinutes].join(':'), ap].join(' ')
});
