import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from './../../utils/constans/constans';

const Header = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <header>
      <Link to="/">Homepage</Link>
      <br />
      <Link to="/create">Create Pokemon View</Link>
      <br />
      <div>
        {authToken ? (
          <div
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              this.props.history.push(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link to="/login">login</Link>
        )}
      </div>
    </header>
  );
};

export default withRouter(Header);
