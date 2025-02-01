import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../../redux/reduxTypes";
import { isObjEmpty } from "@common/utility/Utils";

const WizardStatusButton = ({
  setInfoModal,
}: {
  setInfoModal: (e: boolean) => void;
}) => {
  const navigate = useNavigate();

  const chatData = useAppSelector((state) => state.chat.chatData);

  return (
    <div
      className={`w888:mb-10 right-0 mt-auto flex w-full justify-center ${
        chatData.value?.main_thread?.messages &&
        chatData.value?.main_thread?.messages?.length >= 6
          ? "hidden"
          : ""
      }`}
    >
      <button
        onClick={() => {
          if (!isObjEmpty(chatData.value?.main_thread)) {
            if (!chatData.value?.main_thread?.messages?.length) {
              navigate("/user-info-public");
            }
            if (chatData.value?.main_thread?.messages?.length) {
              navigate("/chat-box-public");
            } else {
              setInfoModal(true);
            }
          } else {
            navigate("/user-info-public");
          }
        }}
        className="z-10 w-fit rounded-full bg-white px-3 py-[3px] text-sm font-normal text-[#0D101A] shadow-md"
      >
        {!chatData.value?.main_thread?.messages?.length
          ? "<-- Go back to user wizard"
          : chatData.value?.main_thread?.messages?.length
            ? "<-- Go back to chat"
            : "Go back to chat"}
      </button>
    </div>
  );
};

export default WizardStatusButton;
