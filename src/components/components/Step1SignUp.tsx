import { FC } from "react";
import { MemberSignUpValues } from "../../api/api";

interface Step1SignUpProps {
  data: MemberSignUpValues;
  onGetStarted(): void;
  onChangePassword(newValue: string): void;
  onChangeEmail(newValue: string): void;
  onChangeTerms(newValue: boolean): void;
  onChangeUpdates(newValue: boolean): void;
}

export const Step1SignUp: FC<Step1SignUpProps> = ({
  data,
  onGetStarted,
  onChangePassword,
  onChangeEmail,
}) => {
  return (
    <div className="container">
      <h1>Sign up</h1>
      <form className="form">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={data?.email}
          onChange={(event) => {
            onChangeEmail(event?.target?.value);
          }}
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={data?.password}
          onChange={(event) => {
            onChangePassword(event?.target?.value);
          }}
        />
        <button
          onClick={() => {
            onGetStarted();
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
