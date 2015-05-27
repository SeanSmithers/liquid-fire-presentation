import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('intro');
  this.route('what');
  this.route('predefined-animations');
  this.route('transition-map');
  this.resource('template-helpers', function() {
    this.route('liquid-if');
    this.route('liquid-bind');
  });
  this.route('custom-animations');
  this.route('custom-animations-2');
  this.route('custom-animations-3');
  this.route('outro');
});

export default Router;
