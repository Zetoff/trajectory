import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  signUpPath: '/login',
  resetPasswordPath: '/reset-password',
  profilePath: '/profile',
  onSignedInHook: () => {if (FlowRouter.current().route.name === 'login'){
    FlowRouter.go('/');
  }},
  onSignedOutHook: () => FlowRouter.go('/'),
  minimumPasswordLength: 6
});
