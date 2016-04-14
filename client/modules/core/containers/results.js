import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Results from '../components/results.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  const getResults = () => {
    let results = {};
    results.blaze = Collections.Survey.find({'frontEnd':'blaze'}).count();
    results.angular = Collections.Survey.find({'frontEnd':'angular'}).count();
    results.react = Collections.Survey.find({'frontEnd':'react'}).count();
    return results;
  };

  let results = {};

  if(Meteor.subscribe('survey').ready()){
    results = getResults();
    onData(null, {results});
  }else{
    results = getResults();
    if(results){
      onData(null, {results});
    }else{
      onData();
    }
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Results);
