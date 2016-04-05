import React from 'react';
import {Accounts} from 'meteor/std:accounts-ui';
import {Grid} from 'react-bootstrap';

const SignIn = () => (
  <Grid>
    <Accounts.ui.LoginForm/>
  </Grid>
);

export default SignIn;
