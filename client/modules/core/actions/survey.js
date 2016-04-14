export default {
  create({ Meteor, LocalState, FlowRouter }, frontEnd) {
      if (!frontEnd) {
        return LocalState.set('SAVING_ERROR', 'A choice is required');
      }
      LocalState.set('SAVING_ERROR', null);
      Meteor.call('survey.create', frontEnd, (err) => {
        if (err) {
          return LocalState.set('SAVING_ERROR', err.message);
        }
      });
      // FlowRouter.go('/');
    },
    clearErrors({ LocalState }) {
      return LocalState.set('SAVING_ERROR', null);
    }
};
