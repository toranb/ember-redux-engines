import Ember from 'ember';
import { connect } from 'ember-redux';
import hbs from 'htmlbars-inline-precompile';

const stateToComputed = state => {
  return {
    status: state.routed.status
  };
};

const dispatchToActions = dispatch => {
  return {
    transition: () => dispatch({type: 'TRANSITION'})
  };
};

const Component = Ember.Component.extend({
  layout: hbs`<span class="status">{{status}}</span> <button onclick={{action "transition"}}>transition</button>`
});

export default connect(stateToComputed, dispatchToActions)(Component);
