import React, { FunctionComponent } from "react";
import SlackButton from "../../media/slack/sign_in_with_slack.png";
import "./signIn.scss";

export interface SigninProps {
  // onClick: (e: React.MouseEvent) => void;
}

let client_id: string = "33336676.569200954261";
let scope: string = "incoming-webhook";
const slackRedirectUrl: string = `https://slack.com/oauth/v2/authorize?scope=${scope}&client_id=${client_id}`;

const slackRedirect = () => {
  //not eactly sure how to implement slacksign in here..?
  return slackRedirectUrl;
};
export const SignIn: FunctionComponent<SigninProps> = () => {
  return (
    <div className="container is-widescreen outterContainer is-success">
      <div className="card signBox">
        <div className="title is-4">Greetings from Tovtov!</div>
        <div data-testid="slackSignin" onClick={slackRedirect}>
          <img
            className="slackBtn"
            data-testid="img"
            src={SlackButton}
            alt="slackbutton"
          />
        </div>
        <div className="howToSignIn">
          Don't have an account yet? Don't worry! Go ahead and click the sign in
          button above.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
