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
    rename: () => dispatch({type: 'RENAME', name: 'engine'})
  };
};

const Component = Ember.Component.extend({
  layout: hbs`<span class="foo">{{name}}</span> <button onclick={{action "rename"}}>ENGINE</button>`
});

export default connect(stateToComputed, dispatchToActions)(Component);
