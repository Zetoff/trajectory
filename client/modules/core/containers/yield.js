import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Yield from '../components/yield.jsx';

export const composer = ({ context }, onData) => {
    const { Meteor, FlowRouter } = context();

    const canView = () => {
        return FlowRouter.current().route.group.name === 'public' || !!Meteor.user();
    };

    if (Meteor.loggingIn()) {
        onData(); //It shows a loading screen.
    } else {
        onData(null, { canView: canView() });
    }
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Yield);