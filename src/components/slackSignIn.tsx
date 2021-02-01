import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SlackButton from "../media/slack/sign_in_with_slack.png";
import styles from "./slackSignIn.scss";

const SignIn = () => {
  const setIsHover = () => {
    return styles[`is-active`];
  };
  return (
    <div className="container">
      <div className="notification is-dark signBox">
        <div>Welcome back!</div>
        <Link to="https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=your_client_id">
          <img className="slackBtn" src={SlackButton} alt="slackbutton" />
        </Link>

        <div className="linkContainer tabs is-centered">
          <Link className="" to="/sign-up">
            <li
              className={classNames()}
              onMouseOver={(e) => {
                setIsHover();
              }}
            >
              Sign up
            </li>
          </Link>
          <li className="linkDivider"> |</li>
          <Link className="" to="/forgot-password">
            <li className="password"> Forgot your password?</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
