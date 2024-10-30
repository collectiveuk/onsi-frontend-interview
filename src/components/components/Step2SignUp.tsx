import { FC } from "react";
import { MemberSignUpValues } from "../../api/api";

type Step2SignUpProps = {
  data: MemberSignUpValues;
  onChangeBirth(newValue: any): void;
  onChangeName(newValue: string): void;
  onChangeSurname(newValue: string): void;
  onSubmitFinish(): void;
};

export const Step2SignUp: FC<Step2SignUpProps> = ({
  data,
  onChangeBirth,
  onChangeName,
  onChangeSurname,
  onSubmitFinish,
}) => {
  return (
    <div>
      <h1>Tell us about yourself</h1>
      <form className="form">
        <label htmlFor="firstName">First name</label>
        <input
          value={data?.firstName}
          name="firstName"
          onChange={(event) => {
            onChangeName(event?.target?.value);
          }}
        />

        <label htmlFor="lastName">Last name</label>
        <input
          value={data?.lastName}
          name="lastName"
          onChange={(event) => {
            onChangeSurname(event?.target?.value);
          }}
        />

        <label htmlFor="dob">Date of birth</label>
        <input
          type="date"
          name="dob"
          value={data.dob}
          onChange={(event) => {
            onChangeBirth(event?.target?.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onSubmitFinish();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
