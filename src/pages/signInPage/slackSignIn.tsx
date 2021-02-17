import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SlackButton from "../../media/slack/sign_in_with_slack.png";
import * as styles from "./slackSignIn.scss";

export interface SigninProps {
  onClick: (e: React.MouseEvent) => void;
}
const setIsHover = () => {
  return styles[`is-active`];
};
let client_id: string = "33336676.569200954261";
let scope: string = "incoming-webhook";
const slackRedirectUrl: string = `https://slack.com/oauth/v2/authorize?scope=${scope}&client_id=${client_id}`;

const slackRedirect = () => {
  console.log(slackRedirectUrl);
};
export const SignIn: FunctionComponent<SigninProps> = ({ onClick }) => {
  return (
    <div className="container is-widescreen outterContainer is-success">
      <div className="card signBox">
        <div className="title is-4">Welcome back!</div>
        <div onClick={slackRedirect}>
          <img
            className="slackBtn"
            data-testid="img"
            src={SlackButton}
            alt="slackbutton"
          />
        </div>

        <div className="linkContainer tabs is-centered">
          <div className="linkDivider"> Don't have an account yet? </div>
          <Router>
            <Link className="links" to="/sign-up">
              <li
                onMouseOver={() => {
                  setIsHover();
                }}
              >
                Sign up
              </li>
            </Link>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
