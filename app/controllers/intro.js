import Ember from 'ember';

var IntroController = Ember.Controller.extend({
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  date: function() {
    var date = new Date();
    return `${this.days[date.getDay()]} ${date.getDate()} ${this.months[date.getMonth()]} ${date.getFullYear()}`;
  }.property()
});

export default IntroController;
