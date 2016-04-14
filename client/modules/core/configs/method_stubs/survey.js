import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'survey.create' (frontEnd) {
      check(frontEnd, String);

      console.log('stub');
      const createdBy = Meteor.userId();
      const createdAt = new Date();
      const survey = { frontEnd, createdAt, createdBy };
      Collections.Survey.insert(survey);
    }
  });
}
