import React from "react";
import { Logo } from "../components/signIn/Logo";
import FormSign from "../components/signIn/FormSign";
import FooterSign from "../components/signIn/FooterSign";
import "../components/signIn/signIn.css";

const SignIn = () => {
  return (
    <div className="signIn">
      <Logo />
      <FormSign />
      <FooterSign />
    </div>
  );
};

export default SignIn;
