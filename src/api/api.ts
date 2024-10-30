export type MemberSignUpValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: string;
  inviteCode: string;
};

export function inviteCodeSignUp(data: MemberSignUpValues) {
  return {
    status: 200,
    message: "Success",
  };
}

export type PartnerCodeSignUpValues = {
  email: string;
  name: string;
  surname: string;
  partnerCode: string;
};

export function partnerCodeSignUp(data: PartnerCodeSignUpValues) {
  if (data.partnerCode !== "CORRECT_CODE") {
    throw new Error("Invalid code.");
  }

  return {
    status: 200,
    message: "Success",
  };
}
