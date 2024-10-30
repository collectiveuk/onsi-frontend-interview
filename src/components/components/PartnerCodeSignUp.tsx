import { FC } from "react";

type Props = {
  partnerName: string;
  partnerCode: string;
  onSubmit: () => void;
};

export const PartnerCodeSignUp: FC<Props> = ({
  partnerName,
  partnerCode,
  onSubmit,
}) => {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <div>
        Please enter your unique code provided by{" "}
        <strong>
          {partnerName.charAt(0).toUpperCase() + partnerName.slice(1)}
        </strong>
      </div>
      <form className="form">
        <input type="text" value={partnerCode} />
        <button
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          Continue
        </button>
      </form>
    </div>
  );
};
