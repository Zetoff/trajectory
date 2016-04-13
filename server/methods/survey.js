import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import {Survey} from '/lib/collections/collections.js';

export default function() {
  Meteor.methods({
    'survey.create' (frontEnd) {
      check(frontEnd, String);

      // TODO: Demo the latency compensations (Delete this in production)
      //Meteor._sleepForMs(1000);

      // TODO: Do some user authorization
      const createdBy = Meteor.userId();
      const createdAt = new Date();
      const survey = { frontEnd, createdAt, createdBy };
      console.log(survey);
      Survey.insert(survey);

    }
  });
}
