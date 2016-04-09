import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Layout from '../components/main_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter} = context();

  const loggingIn = Meteor.loggingIn();

  const isPublic = (route) => {
    let publicRoutes =[
      'home', 'login'
    ];
    return publicRoutes.indexOf(route) > -1;
  };

  const canView = () => {
    return isPublic(FlowRouter.current().route.name) || !!Meteor.user();
  };

  onData(null, {canView: canView()});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Layout);
