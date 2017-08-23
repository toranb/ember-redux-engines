import Ember from 'ember';

const { getOwner, setOwner } = Ember;

export default Ember.Object.extend({
}).reopenClass({
  transitionTo(routeName) {
    if (!getOwner(this)) {
      throw new Error('RoutedService is without a container, ensure that setOwner was run from the initializer.');
    }
    getOwner(this).lookup('service:-routing').transitionTo(routeName);
  },
  setOwner(owner) {
    if (!getOwner(this)) {
      setOwner(this, owner);
    }
  }
});
