import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Component from '../components/navbar_header.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  if (Meteor.user()){
    const user = Meteor.user();
    onData(null,{user});
  }else{
    onData(null,{});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component);
