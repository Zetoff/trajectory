import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';

export default function(injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);

    FlowRouter.route('/', {
        name: 'home',
        action() {
            if (Meteor.user())
            {
                mount(MainLayoutCtx, {
                    content: () => (<Home/>)
                });
            } else {
              mount(MainLayoutCtx, {
                  content: () => (<Login/>)
              });
            }
        }
    });

    FlowRouter.route('/login', {
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Login/>)
            });
        }
    });
}
