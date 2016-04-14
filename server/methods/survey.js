import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import {Survey} from '/lib/collections';

export default function() {
  Meteor.methods({
    'survey.create' (frontEnd) {
      check(frontEnd, String);

      // TODO: Demo the latency compensations (Delete this in production)
      Meteor._sleepForMs(3000);

      // TODO: Do some user authorization
      const createdBy = Meteor.userId();
      const createdAt = new Date();
      const survey = { frontEnd, createdAt, createdBy };
      Survey.insert(survey);

    }
  });
}
