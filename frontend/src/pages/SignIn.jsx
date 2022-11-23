import React from "react";
import { Logo } from "../components/home/signIn/Logo";
import FormSign from "../components/home/signIn/FormSign";
import FooterSign from "../components/home/signIn/FooterSign";
import "../components/home/signIn/signIn.css";
import { AiFillCloseCircle } from "react-icons/ai";

//redux
import { useSelector, useDispatch } from "react-redux";
import { signClear } from "../features/sigIn/signSlice";

const SignIn = () => {
  const estado = useSelector((state) => state.sign);
  const dispatch = useDispatch();

  return (
    <div className="signIn">
      <Logo />
      <FormSign />
      <FooterSign />
      <span
        onClick={() => dispatch(signClear(!estado.estado))}
        className="signIn-close"
      >
        <AiFillCloseCircle />
      </span>
    </div>
  );
};

export default SignIn;
