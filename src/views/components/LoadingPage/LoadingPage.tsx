import Spinner from "../Spinner/Spinner";

const LoadingPage = () => {
  return (
    <div className="flex h-svh w-full items-center justify-center">
      <Spinner classList="w-[30px] h-auto" />
    </div>
  );
};

export default LoadingPage;
