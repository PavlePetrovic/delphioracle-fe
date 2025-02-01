import { useNavigate } from "react-router";
import Button from "@components/Button/Button";

const GetUserInfoWelcome = () => {
  const navigate = useNavigate();
  return (
    <div className="w888:px-3 mx-auto flex h-full w-full max-w-[1440px] flex-col items-start justify-center gap-2 px-7">
      <p className="w888:w-auto w888:text-base w888:text-left w-[500px] text-2xl font-light text-white">
        <span className="font-philosopher w888:text-3xl text-5xl">
          Welcome,
        </span>
        <br /> traveler of the stars. I'm your Astrology Oracle, a digital
        incarnation of Delphi's ancient wisdom, here to guide you through the
        cosmos. Let's uncover your celestial story and illuminate the path
        ahead, blending timeless wisdom with the stars secrets.
      </p>
      <div className="w888:flex-col w888:w-full w888:relative w888:z-10 mt-6 flex items-center justify-center gap-4">
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
