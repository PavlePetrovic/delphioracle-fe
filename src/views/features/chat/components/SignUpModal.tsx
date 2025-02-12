import { useNavigate } from "react-router";
import Button from "@components/Button/Button";
import { IoCloseOutline } from "react-icons/io5";

const SignUpModal = ({ setSignUpModal }: { setSignUpModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark-blue w888:px-4 w888:py-[16px] w888:w-[400px] w480:w-[300px] relative mx-3 flex h-fit w-[680px] flex-col gap-5 rounded-xl px-8 py-[26px]">
      <div
        className="hover:text-gold absolute top-[20px] right-[18px] cursor-pointer rounded-full bg-[#3c414f] text-white"
        onClick={() => setSignUpModal()}
      >
        <IoCloseOutline className="text-gold w888:text-2xl text-3xl" />
      </div>
      <h2 className="font-philosopher text-gold w480:text-xl text-center text-2xl font-normal">
        Unlock More Insights!
      </h2>
      <p className="w888:text-sm text-center text-base font-light text-white">
        Sign up to receive extra credits and explore exclusive features,
        including deeper insights into your relationships with our unique
        synastry readings.
      </p>
      <p className="w888:text-sm max-w-[620px] px-4 text-center text-base font-light text-white">
        Use the code <span className="text-gold font-medium">COSMICSTART</span>{" "}
        for bonus credits when you sign up!
      </p>
      <div className="mt-3 flex w-full items-center justify-center gap-2">
        <Button
          type="goldMain"
          text={"Sign Up"}
          onClick={() => navigate("/auth/signup/COSMICSTART")}
          className="!gap-1.5 !px-[12px] !py-[4px] text-sm"
          customStyle={{ icon: "w888:w-[15px] w888:h-auto" }}
        />
      </div>
    </div>
  );
};

export default SignUpModal;
