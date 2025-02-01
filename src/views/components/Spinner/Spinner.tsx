import { AiOutlineLoading3Quarters } from "react-icons/ai";

type propsTypes = {
  classList?: string;
};
const Spinner = ({ classList }: propsTypes) => {
  return (
    <div className="animate-spin w-fit h-fit">
      <AiOutlineLoading3Quarters className={`text-white ${classList}`} />
    </div>
  );
};

export default Spinner;
