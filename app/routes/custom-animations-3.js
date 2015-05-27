import Ember from 'ember';

var CustomAnimations2Route = Ember.Route.extend({
  model: function() {
    return [
      {
        name: 'Acquire',
        description: 'FOR SALES AND SUPPORT TEAMS',
        color: '#d05150'
      },
      {
        name: 'Engage',
        description: 'FOR MARKETING TEAMS',
        color: '#e1bd00'
      },
      {
        name: 'Learn',
        description: 'FOR PRODUCT TEAMS',
        color: '#34b272'
      },
      {
        name: 'Support',
        description: 'FOR SUPPORT TEAMS',
        color: '#7766af'
      }
    ];
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('activeModel', model.get('firstObject'));
  }
});

export default CustomAnimations2Route;
