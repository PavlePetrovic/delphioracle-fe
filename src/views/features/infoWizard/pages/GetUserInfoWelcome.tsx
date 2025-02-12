import { useNavigate } from "react-router";
import Button from "@components/Button/Button";

const GetUserInfoWelcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full max-w-[1440px] flex-col items-start justify-center gap-2 px-7 w888:px-3 h500:!pt-20 h600:overflow-y-scroll h600:pt-8">
      <h1 className="w-[600px] font-philosopher text-[40px] font-light leading-[46px] text-white w888:mx-auto w888:w-auto w888:text-center w888:text-[30px] w888:leading-9">
        The Oracle Awaits - Ask & Reveal <br />
        the Cosmic Truths Meant for You
      </h1>
      {/* <h1 className="-mt-5 w-[600px] font-philosopher text-[40px] font-light text-white w888:w-auto w888:text-left w888:text-[32px]">
        the Cosmic Truths Meant for You
      </h1> */}
      <p className="w-[650px] text-[19px] font-light text-white w888:w-auto w888:text-center w888:text-base">
        The stars hold the answers to your purpose, love, and growth. Let The
        Delphi Oracle be your cosmic guide, where AI-powered astrology meets
        human wisdom to bring you deeply personal insights. Your journey of
        self-discovery begins now. Ask, explore, and embrace the magic.
        <br />
      </p>
      <div className="mt-6 flex items-center justify-center gap-4 w888:relative w888:z-10 w888:w-full w888:flex-col">
        <Button
          type="goldMain"
          actionIco={true}
          text="Ask Oracle Now"
          onClick={() => navigate("/user-info-public/wizard")}
        />
        <Button
          type="naked"
          text="How It Works"
          onClick={() => navigate("/how-it-works")}
        />
      </div>
      <p className="mt-6 w-[75%] text-left text-xs font-light text-[#f6faffc6] w888:mt-3 w888:w-full w888:text-center">
        No sign-up needed! Get a free personalized reading and 3 free credits to
        explore the stars
      </p>
    </div>
  );
};

export default GetUserInfoWelcome;
