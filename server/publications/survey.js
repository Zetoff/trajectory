import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Survey} from '/lib/collections';

export default function () {
  Meteor.publish('survey', function () {
    const selector = {};
    const options = {
      // fields: {_id: 1, title: 1},
      // sort: {createdAt: -1},
      // limit: 10
    };

    return Survey.find(selector, options);
  });
}
