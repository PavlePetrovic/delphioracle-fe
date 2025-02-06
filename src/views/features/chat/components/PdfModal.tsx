import { useNavigate } from "react-router";
import Button from "@components/Button/Button";
import { IoCloseOutline } from "react-icons/io5";

const PdfModal = ({ setPdfModal }: { setPdfModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <div className="relative mx-3 flex h-fit w-[680px] flex-col gap-5 rounded-xl bg-dark-blue px-8 py-[26px] w888:w-[400px] w888:px-4 w888:py-[16px] w480:w-[300px]">
      <div
        className="absolute right-[18px] top-[20px] cursor-pointer rounded-full bg-[#3c414f] text-white hover:text-gold"
        onClick={() => setPdfModal()}
      >
        <IoCloseOutline className="text-3xl text-gold w888:text-2xl" />
      </div>
      <h2 className="text-center font-philosopher text-2xl font-normal text-gold w480:text-xl">
        Unlock Full Access
      </h2>
      <p className="text-center text-base font-light text-white w888:text-sm">
        Save Your Insights! To export and save your readings, please sign up.
        It's quick and free!
      </p>
      <div className="mt-3 flex w-full items-center justify-center gap-2">
        <Button
          type="goldMain"
          text={"Sign Up"}
          onClick={() => navigate("/auth/signup")}
          className="!gap-1.5 !px-[12px] !py-[4px] text-sm"
          customStyle={{ icon: "w888:w-[15px] w888:h-auto" }}
        />
      </div>
    </div>
  );
};

export default PdfModal;
