import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  shortcuts: {
    'left': 'previous',
    'right': 'next'
  },
  navigation: {
    '/': {
      next: 'intro',
      previous: ''
    },
    '/intro': {
      next: 'what',
      previous: 'outro'
    },
    '/what': {
      next: 'predefined-animations',
      previous: 'intro'
    },
    '/predefined-animations': {
      next: 'transition-map',
      previous: 'what'
    },
    '/transition-map': {
      next: 'template-helpers.index',
      previous: 'predefined-animations'
    },
    '/template-helpers': {
      next: 'template-helpers.liquid-bind',
      previous: 'transition-map'
    },
    '/template-helpers/liquid-bind': {
      next: 'template-helpers.liquid-if',
      previous: 'template-helpers.index'
    },
    '/template-helpers/liquid-if': {
      next: 'custom-animations',
      previous: 'template-helpers.liquid-bind'
    },
    '/custom-animations': {
      next: 'custom-animations-2',
      previous: 'template-helpers.liquid-if'
    },
    '/custom-animations-2': {
      next: 'custom-animations-3',
      previous: 'custom-animations'
    },
    '/custom-animations-3': {
      next: 'outro',
      previous: 'custom-animations-2'
    },
    '/outro': {
      next: 'intro',
      previous: 'custom-animations-3'
    }
  },
  actions: {
    previous: function() {
      this.transitionTo(this.navigation[window.location.pathname]['previous']);
    },
    next: function() {
      this.transitionTo(this.navigation[window.location.pathname]['next']);
    }
  }
});

export default ApplicationRoute;
