import Spinner from "../Spinner/Spinner";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spinner classList="w-[30px] h-auto" />
    </div>
  );
};

export default LoadingPage;
