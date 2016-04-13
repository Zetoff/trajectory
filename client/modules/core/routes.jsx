import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';
import Loader from './components/loader.jsx';
import Survey from './containers/survey.js';


export default function(injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);

    const publicRoutes = FlowRouter.group({name: 'public'});
    const authenticatedRoutes = FlowRouter.group({name: 'authenticated'});

    publicRoutes.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Home/>)
            });
        }
    });

    publicRoutes.route('/login', {
      name:'login',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Login/>)
            });
        }
    });

    publicRoutes.route('/loader', {
      name:'loader',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Loader/>)
            });
        }
    });

    authenticatedRoutes.route('/profile',{
      name:'profile',
      action(){
        mount(MainLayoutCtx,{
            content: () => (<Profile/>)
        });
      }
    });

    authenticatedRoutes.route('/survey',{
      name:'survey',
      action(){
        mount(MainLayoutCtx,{
            content: () => (<Survey/>)
        });
      }
    });

}
