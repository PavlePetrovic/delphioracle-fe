import {
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  signOut,
} from "firebase/auth";
import { auth } from "../../../../firebaseConfig/firebaseConfig";
import {
  clearAuthError,
  setAuth,
  setAuthError,
} from "../reducer/authentication.reducer";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import { FcGoogle } from "react-icons/fc";
import {
  getInternalAuthData,
  saveUser,
} from "../reducer/authentication.actions";
import { useNavigate } from "react-router";

const GoogleAuth = ({
  authType,
  input,
  setError,
}: {
  authType: "LOG_IN" | "SIGN_UP";
  input?: { referralCode?: string; privacyPolicy: boolean };
  setError?: () => void;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initiateConversationId = useAppSelector(
    (state) => state.chat.initiateConversationId,
  );

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const googleSignIn = await signInWithPopup(auth, googleProvider)
        .then((result) => {
          // LOG_IN BLOCK
          if (authType === "LOG_IN") {
            if (getAdditionalUserInfo(result)?.isNewUser && auth.currentUser) {
              signOut(auth)
                .then(() => {})
                .catch((error) => console.log(error));

              auth.currentUser
                .delete()
                .then((res) => {})
                .catch((error) => {
                  console.log(error);
                });

              dispatch(
                setAuthError(
                  "The user account does not exist, please sign up instead",
                ),
              );
              dispatch(setAuth(null));
            } else {
              auth.currentUser
                ?.getIdToken()
                .then((accessToken) => {
                  localStorage.setItem("delphiAccessToken", accessToken);
                })
                .catch((error) => console.log(error));

              dispatch(clearAuthError());
              dispatch(setAuth(auth.currentUser));
              console.log("GoogleAuth.tsx -> getInternalAuthData 1");
              auth.currentUser &&
                dispatch(
                  getInternalAuthData({ user_id: auth.currentUser.uid }),
                );
              sessionStorage.removeItem("userId");
              sessionStorage.removeItem("wizardPassed");
              localStorage.setItem("delphiOracleUser", "true");

              navigate("/chat-box");
            }
          }

          // SIGN_UP BLOCK
          if (authType === "SIGN_UP") {
            if (!getAdditionalUserInfo(result)?.isNewUser && auth.currentUser) {
              signOut(auth)
                .then(() => {})
                .catch((error) => console.log(error));

              dispatch(
                setAuthError("Account already exists, please log in instead"),
              );
              dispatch(setAuth(null));
            } else {
              // Handle Save User Flow
              const userIdFromLocalStorage = sessionStorage.getItem("userId");

              dispatch(clearAuthError());
              auth.currentUser && dispatch(setAuth(auth.currentUser));

              dispatch(
                saveUser({
                  userId: `${auth.currentUser?.uid}`,
                  tmpUserId: initiateConversationId.value
                    ? initiateConversationId.value
                    : `${userIdFromLocalStorage}`,
                  userEmail: `${auth.currentUser?.email}`,
                  referralCode: `${input?.referralCode}`,
                }),
              )
                .unwrap()
                .then(() => {
                  auth.currentUser
                    ?.getIdToken()
                    .then((accessToken) => {
                      localStorage.setItem("delphiAccessToken", accessToken);
                    })
                    .catch((error) => console.log(error));

                  sessionStorage.removeItem("userId");
                  sessionStorage.removeItem("wizardPassed");
                  localStorage.setItem("delphiOracleUser", "true");
                  console.log("GoogleAuth.tsx -> getInternalAuthData 2");
                  auth.currentUser &&
                    dispatch(
                      getInternalAuthData({ user_id: auth.currentUser.uid }),
                    );
                  navigate("/chat-box");
                })
                .catch((error) => {
                  console.log(error);
                  navigate("/auth/signup");
                });
            }
          }
        })
        .catch((error) => {
          dispatch(
            setAuthError(
              "Authentication error with Firebase, please try again later",
            ),
          );
        });
    } catch (error) {
      dispatch(
        setAuthError(
          "Authentication error with Firebase, please try again later",
        ),
      );
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-3 w888:w-full">
      <button
        type="button"
        onClick={() => {
          if (
            (authType === "SIGN_UP" && input?.privacyPolicy) ||
            authType === "LOG_IN"
          ) {
            dispatch(clearAuthError());
            handleGoogleSignIn();
          } else {
            setError && setError();
          }
        }}
        className="mt-2 flex w-4/6 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#ffffff1d] bg-main-grey bg-transparent-gray py-[7px] text-sm font-normal text-white hover:opacity-90 w888:w-full"
      >
        <FcGoogle className="text-[21px]" />
        <span className="leading-2 mt-[1px]">Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleAuth;
