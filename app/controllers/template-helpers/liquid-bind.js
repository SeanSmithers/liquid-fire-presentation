import Ember from 'ember';

var LiquidBindController = Ember.Controller.extend({
  setUp: function() {
    this.tick();
  }.on('init'),
  tick: function() {
    var date = new Date();
    this.setProperties({
      hours: date.getHours(),
      minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
      seconds: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    });
    Ember.run.later(this, this.tick, 1000);
  }
});

export default LiquidBindController;
