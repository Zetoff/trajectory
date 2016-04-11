import React from 'react';
import Helmet from 'react-helmet';

class Profile extends React.Component {
  render() {
    const Head = <Helmet
      title="Trajectory profile"
      />

    return (
      <div>
        {Head}
        <h1>Dummy content for the profile page</h1>
      </div>
    );
  }
}

export default Profile;
