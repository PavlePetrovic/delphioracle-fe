import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "../../../../firebaseConfig/firebaseConfig";
import GoogleAuth from "./GoogleAuth";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import {
  clearAuthError,
  setAuth,
  setAuthError,
} from "../reducer/authentication.reducer";
import PasswordInput from "@components/PasswordInput/PasswordInput";
import EmailInput from "@components/EmailInput/EmailInput";
import { saveUser } from "../reducer/authentication.actions";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import {
  isStringEmpty,
  validateEmail,
  validatePassword,
} from "@common/utility/Utils";
import TextInput from "@components/TextInput/TextInput";
import CheckBox from "@components/CheckBox/CheckBox";
import { NavLink } from "react-router-dom";

const initialInput = {
  email: "",
  password: "",
  referalCode: "",
  privacyPolicy: false,
  error: false,
  googleFlowError: false,
};

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const initiateConversationId = useAppSelector(
    (state) => state.chat.initiateConversationId,
  );

  const [input, setInput] = useState(initialInput);

  const handleInputChange = (
    inputName: string,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputName]:
          inputName === "referalCode"
            ? e.target.value?.toLocaleUpperCase()
            : e.target.value,
      };
    });
  };

  const handleSignUp = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(clearAuthError());
      if (
        validateEmail(input.email) &&
        validatePassword(input.password) &&
        input.privacyPolicy
      ) {
        createUserWithEmailAndPassword(auth, input.email, input.password)
          .then((userCredential) => {
            // Handle Save User Flow
            const userIdFromLocalStorage = sessionStorage.getItem("userId");

            auth.currentUser
              ?.getIdToken()
              .then((accessToken) => {
                localStorage.setItem("delphiAccessToken", accessToken);
              })
              .catch((error) => console.log(error));

            dispatch(
              saveUser({
                userId: `${auth.currentUser?.uid}`,
                tmpUserId: initiateConversationId.value
                  ? initiateConversationId.value
                  : `${userIdFromLocalStorage}`,
                userEmail: `${auth.currentUser?.email}`,
                referralCode: input.referalCode,
              }),
            )
              .unwrap()
              .then(() => {
                sessionStorage.removeItem("userId");
                sessionStorage.removeItem("wizardPassed");
                localStorage.setItem("delphiOracleUser", "true");
                sessionStorage.setItem(
                  "verificationEmail",
                  `${auth.currentUser?.email}`,
                );
                // dispatch(setAuth(auth.currentUser));
                dispatch(clearAuthError());
                auth?.currentUser && sendEmailVerification(auth.currentUser);
                signOut(auth)
                  .then(() => navigate("/verification"))
                  .catch((error) => console.log(error));
              })
              .catch((error) => {
                navigate("/auth/signup");
              });
          })
          .catch((error) => {
            error.message === "Firebase: Error (auth/email-already-in-use)."
              ? dispatch(
                  setAuthError("Account already exists, please log in instead"),
                )
              : error.message === "Firebase: Error (auth/invalid-email)."
                ? dispatch(
                    setAuthError(
                      "Invalid email address, please check your email and try again.",
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

  useEffect(() => {
    if (params?.referralKey) {
      setInput((prevInput) => {
        return {
          ...prevInput,
          referalCode: `${params?.referralKey?.toLocaleUpperCase()}`,
        };
      });
    }
  }, [params]);

  return (
    <form
      onSubmit={handleSignUp}
      className={`flex w-full flex-col items-center justify-center ${
        input.error ? "gap-1.5" : "gap-3.5"
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
        invalidMessage="Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number."
        value={input.password}
        onChange={(e) => handleInputChange("password", e)}
        showPass={false}
      />
      <TextInput
        label="Referal Code (Optional)"
        value={input.referalCode}
        onChange={(e) => handleInputChange("referalCode", e)}
      />
      <CheckBox
        text="Privacy Policy*"
        isChecked={input.privacyPolicy}
        invalid={!input.privacyPolicy && (input.error || input.googleFlowError)}
        invalidMessage="Accepting our Privacy policy and Terms and Conditions is necessary to proceed!"
        onChange={(isChecked) => {
          setInput((prevInput) => {
            return { ...prevInput, privacyPolicy: isChecked };
          });
        }}
        linkNode={
          <p>
            By creating an account, you agree to our and{" "}
            <NavLink
              to={"/privacy-policy"}
              className={"cursor-pointer font-normal text-white underline"}
            >
              Privacy Policy{" "}
            </NavLink>
            &{" "}
            <NavLink
              to={"/terms-of-use"}
              className={"cursor-pointer font-normal text-white underline"}
            >
              Terms & Conditions
            </NavLink>
            .
          </p>
        }
      />
      <button
        type="submit"
        disabled={isStringEmpty(input.email) || isStringEmpty(input.password)}
        className={`mt-2 flex w-4/6 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#ffffff1d] bg-main-grey bg-transparent-gray py-[7px] text-sm font-normal text-gold w888:w-full ${
          isStringEmpty(input.email) || isStringEmpty(input.password)
            ? ""
            : "hover:opacity-90"
        }`}
      >
        <span className="leading-2 text-gold">Create Account</span>
        <BsArrowRight className="text-xl" />
      </button>
      <div className="mb-3 mt-4 h-[1px] w-full bg-[#ffffff38]"></div>
      <GoogleAuth
        authType="SIGN_UP"
        input={{
          referralCode: input.referalCode,
          privacyPolicy: input.privacyPolicy,
        }}
        setError={() =>
          setInput((prevInput) => {
            return { ...prevInput, googleFlowError: true };
          })
        }
      />
    </form>
  );
};

export default SignUp;
