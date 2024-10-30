import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Step2SignUp } from "./components/Step2SignUp";
import { Step1SignUp } from "./components/Step1SignUp";
import { PartnerCodeSignUp } from "./components/PartnerCodeSignUp";
import { inviteCodeSignUp, MemberSignUpValues } from "../api/api";

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    partnerName,
    partnerCode,
    inviteCode,
  }: {
    partnerName?: string;
    partnerCode?: string;
    inviteCode?: string;
  } = useParams();

  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);

  useEffect(() => {
    if (inviteCode) {
      setShowStep1(true);
    }
  }, [inviteCode]);

  const [data, setData] = useState<MemberSignUpValues>({
    email: "",
    password: "",
    dob: "",
    firstName: "",
    lastName: "",
    inviteCode: inviteCode || "",
  });

  const handleOnSubmit = () => {
    inviteCodeSignUp({
      email: data.email,
      dob: data.dob,
      firstName: data.firstName || "",
      inviteCode: inviteCode || "",
      lastName: data.lastName || "",
      password: data.password,
    });

    navigate(`/success`);
  };

  const handleOnChange = (value: string | boolean, input: string) => {
    setData((state) => {
      return {
        ...state,
        [input]: value,
      };
    });
  };

  return (
    <div className="container">
      {partnerCode && !showStep2 && !showStep1 && (
        <PartnerCodeSignUp
          partnerName={partnerName || ""}
          partnerCode={partnerCode || ""}
          onSubmit={() => {
            alert("Not implemented!");
          }}
        />
      )}
      {showStep1 && (
        <Step1SignUp
          data={data}
          onChangeEmail={(value) => handleOnChange(value, "email")}
          onChangePassword={(value) => handleOnChange(value, "password")}
          onChangeTerms={(value) => handleOnChange(value, "terms")}
          onChangeUpdates={(value) => handleOnChange(value, "updates")}
          onGetStarted={() => {
            setShowStep1(false);
            setShowStep2(true);
          }}
        />
      )}
      {showStep2 && (
        <Step2SignUp
          data={data}
          onSubmitFinish={() => {
            handleOnSubmit();
          }}
          onChangeBirth={(value) => handleOnChange(value, "dob")}
          onChangeName={(value) => handleOnChange(value, "firstName")}
          onChangeSurname={(value) => handleOnChange(value, "lastName")}
        />
      )}
    </div>
  );
};

export default SignUp;
