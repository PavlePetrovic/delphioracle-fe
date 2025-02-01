import { useNavigate } from "react-router";
import delphiLogo from "../../../assets/icons/delphi-logo-horizontal-text.png";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxTypes";
import { signOut } from "firebase/auth";
import { setAuth } from "@features/auth/reducer/authentication.reducer";
import { clearChatData } from "@features/chatBox/reducer/chatBox.reducer";
import { auth } from "../../../firebaseConfig/firebaseConfig";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { IoMdLogOut } from "react-icons/io";

const MainNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.authentication.authData);

  const handleSignOut = async () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("delphiAccessToken");
        dispatch(setAuth(null));
        dispatch(clearChatData());
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w888:px-2 relative z-50 flex w-full justify-center px-5">
      <div className="w888:py-2 flex w-full max-w-[1440px] items-center py-3">
        <div
          className="mr-auto flex cursor-pointer"
          onClick={() =>
            authData
              ? navigate("/chat-box")
              : navigate("/user-info-public/welcome")
          }
        >
          <img
            src={delphiLogo}
            className="w888:h-[26px] h-[34px] w-auto"
            alt="delphi-logo-header"
          />
        </div>

        <NavbarLinks />

        {authData && (
          <Button
            type="goldMain"
            CustomIco={<IoMdLogOut className="w888:w-[17px] h-auto w-[20px]" />}
            text=""
            onClick={handleSignOut}
            className="ml-2 !gap-1.5 !px-[4.5px] !py-[4.5px] text-sm"
            customStyle={{ icon: "w888:w-[15px] w888:h-auto" }}
          />
        )}

        {!authData ? (
          <Button
            type="goldMain"
            actionIco={true}
            text={sessionStorage.getItem("wizardPassed") ? "Sign Up" : "Log In"}
            onClick={() =>
              sessionStorage.getItem("wizardPassed")
                ? navigate("/auth/signup")
                : navigate("/auth/login")
            }
            className="w888:!py-[3px] w888:!px-2 w888:text-xs !gap-1.5 !px-3 !py-1 text-sm"
            customStyle={{ icon: "w888:w-[15px] w888:h-auto" }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
