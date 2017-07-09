import Ember from 'ember';
import { connect } from 'ember-redux';
import hbs from 'htmlbars-inline-precompile';

const stateToComputed = state => {
  return {
    people: state.people.data
  };
};

const dispatchToActions = dispatch => {
  return {
    alter: () => dispatch({type: 'PEOPLE', data: 'works!'})
  };
};

const Component = Ember.Component.extend({
  layout: hbs`<span class="people">{{people}}</span> <button onclick={{action "alter"}}>PEOPLE?</button>`
});

export default connect(stateToComputed, dispatchToActions)(Component);
