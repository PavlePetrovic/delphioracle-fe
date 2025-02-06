import { useEffect, useMemo } from "react";
import { isObjEmpty } from "@common/utility/Utils";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import { getChatData } from "../reducer/chatBox.actions";
import { useNavigate } from "react-router";

const ChatBoxLanding = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const tmpUserId = useAppSelector(
    (state) => state.chat.initiateConversationId.value,
  );
  const chatData = useAppSelector((state) => state.chat.chatData);

  useEffect(() => {
    if (tmpUserId) {
      setTimeout(() => {
        console.log("ChatBoxLanding.tsx -> getChatData 1");
        dispatch(getChatData({ user_id: tmpUserId }));
      }, 20000);
      sessionStorage.setItem("userId", `${tmpUserId}`);
    }
  }, [tmpUserId]);

  useEffect(() => {
    if (
      tmpUserId &&
      (isObjEmpty(chatData.value) ||
        isObjEmpty(chatData.value?.main_thread) ||
        chatData.value?.main_thread?.processing ||
        !chatData.value?.main_thread?.messages?.length)
    ) {
      console.log("ChatBoxLanding.tsx -> getChatData 2");
      setTimeout(() => {
        dispatch(
          getChatData({
            user_id: `${tmpUserId}`,
          }),
        );
      }, 1000);
    }
  }, [chatData.value]);

  useEffect(() => {
    if (chatData.value?.main_thread?.messages?.length) {
      navigate("/chat-box-public");
    }
  }, [chatData.value?.main_thread?.messages]);

  const memoizedContent = useMemo(() => {
    return (
      <div className="mx-auto flex max-w-[620px] flex-col gap-16 w888:relative w888:z-10 w888:gap-10">
        <h2 className="text-center font-prata text-2xl text-white w888:mx-3 w888:text-lg">
          Initially, I shall offer you a brief overview based on what the stars
          reveal at first glance. Thereafter, your heart's queries are welcome -
          feel free to ask anything your soul yearns to know.
        </h2>
        <p className="rounded-2xl px-8 py-5 text-center text-lg font-extralight text-[#FFFFFF7A] text-white w888:mx-3 w888:px-6 w888:py-4 w888:text-base">
          {/* ...{coolPunchLines[getRandomInt(0, coolPunchLines.length - 1)]}... */}
          Please, be patient...
        </p>
      </div>
    );
  }, [chatData.value?.main_thread]);

  return (
    <div className="flex h-svh w-full items-center justify-center">
      {memoizedContent}
    </div>
  );
};

export default ChatBoxLanding;
