import CloseIco from "@assets/icons/close-ico.svg";

type propsTypes = {
  children: React.ReactNode;
  close?: () => void;
  className?: string;
  hideCloseIco?: boolean;
};

// ModalHeader component that is inserted into the Modal component
const ModalHeader = ({
  children,
  close,
  className,
  hideCloseIco,
}: propsTypes) => {
  return (
    <div
      className={`bg-dark-blue relative z-[10] w-full py-[10px] ${
        className ? className : ""
      } rounded-t-2xl`}
    >
      <div
        className={
          "flex w-full items-center justify-between gap-3 px-[20px] py-[8px]"
        }
      >
        <div className="h-[24px] w-[24px] bg-transparent"></div>
        {children}
        {!hideCloseIco ? (
          <div className={"flex items-center"}>
            {!hideCloseIco ? (
              <div
                className={`group flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-lg`}
                onClick={() => {
                  close && close();
                }}
              >
                <CloseIco className="cursor-pointer opacity-60 transition-all group-hover:opacity-100 [&_path]:fill-white" />
              </div>
            ) : (
              <div className="h-[24px] w-[24px]"></div>
            )}
          </div>
        ) : (
          <div className="h-[24px] w-[24px]"></div>
        )}
      </div>
    </div>
  );
};

export default ModalHeader;
