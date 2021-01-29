import React, { FunctionComponent } from "react";

const SignIn = () => {
  return (
    <div className="container">
      <div className="notification is-primary">
        <div>Welcome back!</div>
        <div className="button">Sign in with Slack</div>
        <div>Sign up | Forgot your password?</div>
      </div>
    </div>
  );
};

export default SignIn;
