import { useNavigate } from "react-router";
import Button from "@components/Button/Button";

const GetUserInfoWelcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full max-w-[1440px] flex-col items-start justify-center gap-2 px-7 w888:px-3">
      <p className="w-[500px] text-2xl font-light text-white w888:w-auto w888:text-left w888:text-base">
        <span className="font-philosopher text-5xl w888:text-3xl">
          Welcome,
        </span>
        <br /> traveler of the stars. I'm your Astrology Oracle, a digital
        incarnation of Delphi's ancient wisdom, here to guide you through the
        cosmos. Let's uncover your celestial story and illuminate the path
        ahead, blending timeless wisdom with the stars secrets.
      </p>
      <div className="mt-6 flex items-center justify-center gap-4 w888:relative w888:z-10 w888:w-full w888:flex-col">
        <Button
          type="goldMain"
          actionIco={true}
          text="Let's Start"
          onClick={() => navigate("/user-info-public/wizard")}
        />
        <Button
          type="naked"
          text="Already have account?"
          onClick={() => navigate("/auth/login")}
        />
      </div>
    </div>
  );
};

export default GetUserInfoWelcome;
