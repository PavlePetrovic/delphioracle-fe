import { useEffect, useState } from "react";
import { auth } from "../../../../firebaseConfig/firebaseConfig";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import LoadingPage from "@components/LoadingPage/LoadingPage";
import { useNavigate, useParams } from "react-router";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import { useAuthState } from "react-firebase-hooks/auth";
import BigStar from "@assets/icons/big-star-ico.svg";
import { clearAuthError } from "../reducer/authentication.reducer";
import Button from "@components/Button/Button";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const authError = useAppSelector((state) => state.authentication.authError);

  const [loading] = useAuthState(auth);

  const [authType, setAuthType] = useState<"SIGN_UP" | "LOG_IN">("SIGN_UP");

  useEffect(() => {
    dispatch(clearAuthError());
  }, [authType]);

  useEffect(() => {
    if (params?.authType === "login") {
      setAuthType("LOG_IN");
    } else if (params?.authType === "signup") {
      setAuthType("SIGN_UP");
    }
  }, [params?.authType]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <ScrollWrapper id="scrollAuth" className="h-full w-full max-w-[600px]">
          <div className="flex h-full w-full flex-col items-center justify-start gap-1.5 w888:gap-1">
            <h1 className="mx-auto mb-2 mt-3 text-center font-philosopher text-2xl font-light leading-9 text-white w888:text-xl">
              To continue please
            </h1>
            <div className="flex h-full w-full flex-col items-center gap-1">
              {/* LOG_IN & SIGN_UP Navigation */}
              <div className="z-20 flex items-center justify-center gap-1 rounded-full bg-[#e0efff11] px-1.5 py-1.5 w888:py-1">
                <button
                  className={`rounded-full px-[44px] py-1.5 font-light text-white ${
                    authType === "SIGN_UP" ? "bg-[#E0EFFF1F]" : ""
                  } w888:text-base`}
                  onClick={() => navigate("/auth/signup")}
                >
                  Sign Up
                </button>
                <button
                  className={`rounded-full px-[44px] py-1.5  font-light text-white ${
                    authType === "LOG_IN" ? "bg-[#E0EFFF1F]" : ""
                  } w888:text-base`}
                  onClick={() => navigate("/auth/login")}
                >
                  Log In
                </button>
              </div>
              {/* Auth Content */}
              <div
                className={`mx-auto flex h-full w-full flex-col items-center justify-center gap-5 px-4 ${
                  authType === "SIGN_UP"
                    ? "h600:mt-[40px]"
                    : authType === "LOG_IN"
                      ? "h600:mt-[5px]"
                      : ""
                } w888:px-4`}
              >
                {authType === "SIGN_UP" &&
                  !JSON.parse(`${sessionStorage.getItem("wizardPassed")}`) && (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
                      <BigStar className="h-auto w-[60px]" />
                      <h2 className="w-fit text-center text-lg font-light text-[#f5f5f5] drop-shadow-lg w888:text-base">
                        Hold on! Our Oracle needs a few details from you before
                        you can sign up. It's a short magical journey!
                      </h2>
                      <Button
                        type="goldMain"
                        text="Let's start"
                        onClick={() => navigate("/user-info-public/wizard")}
                        className="mt-1"
                      />
                    </div>
                  )}
                {authType === "SIGN_UP" &&
                  JSON.parse(`${sessionStorage.getItem("wizardPassed")}`) && (
                    <SignUp />
                  )}
                {authType === "LOG_IN" && <LogIn />}
              </div>
              {authError && (
                <p className="flex h-fit items-center justify-center rounded-xl bg-red-100 px-2 pb-1 pt-0.5 text-[15px] font-normal text-red-700 w888:-mb-7 w888:mt-2 w888:px-1.5 w888:pb-[1.5px] w888:pt-[1px] w888:text-sm">
                  {authError}
                </p>
              )}
            </div>
          </div>
        </ScrollWrapper>
      )}
    </>
  );
};

export default Auth;
