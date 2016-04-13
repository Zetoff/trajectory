import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/survey-test.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null,{error});

return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.survey.create,
  clearErrors: actions.survey.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
