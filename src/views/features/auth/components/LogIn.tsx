import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebaseConfig/firebaseConfig";
import { useAppDispatch } from "../../../../redux/reduxTypes";
import {
  clearAuthError,
  setAuth,
  setAuthError,
} from "../reducer/authentication.reducer";
import GoogleAuth from "./GoogleAuth";
import PasswordInput from "@components/PasswordInput/PasswordInput";
import EmailInput from "@components/EmailInput/EmailInput";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";
import {
  isStringEmpty,
  validateEmail,
  validatePassword,
} from "@common/utility/Utils";

const initialInput = {
  email: "",
  password: "",
  error: false,
};

const LogIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState(initialInput);

  const handleInputChange = (
    inputName: string,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setInput((prevInput) => {
      return { ...prevInput, [inputName]: e.target.value };
    });
  };

  const handleLogIn = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(clearAuthError());
      if (validateEmail(input.email) && validatePassword(input.password)) {
        signInWithEmailAndPassword(auth, input.email, input.password)
          .then((userCredential) => {
            dispatch(clearAuthError());
            auth.currentUser
              ?.getIdToken()
              .then((accessToken) => {
                localStorage.setItem("delphiAccessToken", accessToken);
              })
              .catch((error) => console.log(error));
            auth.currentUser && dispatch(setAuth(auth.currentUser));
            sessionStorage.removeItem("userId");
            sessionStorage.removeItem("wizardPassed");
            localStorage.setItem("delphiOracleUser", "true");
            navigate("/chat-box");
          })
          .catch((error) => {
            error.message === "Firebase: Error (auth/invalid-credential)."
              ? dispatch(
                  setAuthError(
                    "Invalid credentials, please check your email and password and try again.",
                  ),
                )
              : dispatch(
                  setAuthError(
                    "Authentication error with Firebase, please try again later",
                  ),
                );
          });
      } else {
        setInput((prevInput) => {
          return { ...prevInput, error: true };
        });
      }
    },
    [input],
  );

  return (
    <form
      onSubmit={handleLogIn}
      className={`flex w-full flex-col items-center justify-center ${
        input.error ? "h600:gap-0.5 gap-1.5" : "h600:gap-2 h500:gap-0.5 gap-5"
      }`}
    >
      <EmailInput
        label="Email"
        onChange={(e) => handleInputChange("email", e)}
        invalid={input.error && !validateEmail(input.email)}
        invalidMessage="Only letters (a-z), numbers (0-9), and characters (.-_) are allowed."
        value={input.email}
      />
      <PasswordInput
        label="Password"
        invalid={input.error && !validatePassword(input.password)}
        invalidMessage="Password must be at least 8 characters long and to contain at least: one upper case letter, one lower case letter, one numeric character, one special character (#?!@$%^&*-)."
        value={input.password}
        onChange={(e) => handleInputChange("password", e)}
        showPass={false}
      />
      <button
        type="submit"
        disabled={isStringEmpty(input.email) || isStringEmpty(input.password)}
        className={`bg-transparent-gray bg-glass text-gold w888:w-full mt-2 flex w-4/6 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#ffffff1d] py-[7px] text-sm font-normal ${
          isStringEmpty(input.email) || isStringEmpty(input.password)
            ? ""
            : "hover:opacity-90"
        }`}
      >
        <span className="text-gold leading-2">Log In</span>
        <BsArrowRight className="text-xl" />
      </button>
      <div className="mt-4 mb-3 h-[1px] w-full bg-[#ffffff38]"></div>
      <GoogleAuth authType="LOG_IN" />
    </form>
  );
};

export default LogIn;
