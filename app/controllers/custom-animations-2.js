import Ember from 'ember';

var CustomAnimations2Controller = Ember.Controller.extend({
  showCode: true,
  activeModelStyle : function() {
    return "background-color: %@".fmt(this.get('activeModel.color'));
  }.property('activeModel'),
  actions: {
    next: function() {
      var index = this.get('model').indexOf(this.get('activeModel'));
      if (index === this.get('model.length') - 1) {
        index = 0;
      } else {
        index++;
      }
      this.set('activeModel', this.get('model').objectAt(index));
    },
    toggleCode: function() {
      this.toggleProperty('showCode');
    }
  }
});

export default CustomAnimations2Controller;
