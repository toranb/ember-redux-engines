import Ember from 'ember';
import { connect } from 'ember-redux';
import hbs from 'htmlbars-inline-precompile';

const stateToComputed = state => {
  return {
    name: state.foo.name
  };
};

const dispatchToActions = dispatch => {
  return {
    rename: () => dispatch({type: 'RENAME', name: 'app'})
  };
};

const Component = Ember.Component.extend({
  layout: hbs`{{name}} <button onclick={{action "rename"}}>APP</button>`
});

export default connect(stateToComputed, dispatchToActions)(Component);
