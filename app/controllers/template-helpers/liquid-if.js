import Ember from 'ember';

var LiquidIfController = Ember.Controller.extend({
  condition: true,
  actions: {
    toggle: function() {
      this.toggleProperty('condition');
    }
  }
});

export default LiquidIfController;
