import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import MarkdownPreview from "@uiw/react-markdown-preview";

import { isObjEmpty } from "@common/utility/Utils";

import ChatBoxQuestions from "./ChatBoxQuestions";
import PDFButton from "@features/profile/components/PDFButton";

import TextInput from "@components/TextInput/TextInput";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import CreatePortal from "@components/CreatePortal/CreatePortal";
import BoxModal from "@components/BoxModal/BoxModal";
import AstroSignSelector from "@components/AstroSignSelector/AstroSignSelector";
import Button from "@components/Button/Button";
import Modal from "@components/Modal/Modal";

import ChatQuestionsPills from "../components/ChatQuestionsPills";
import SignUpModal from "../components/SignUpModal";

import CreditsIco from "@assets/icons/credits-ico.svg";
import { SlArrowRight } from "react-icons/sl";

import {
  clearPromptedMessage,
  setCentralizedLoading,
} from "../reducer/chatBox.reducer";
import { askQuestion, getChatData } from "../reducer/chatBox.actions";
import { decrementCredits } from "@features/auth/reducer/authentication.reducer";

import PdfModal from "../components/PdfModal";
import { messageType } from "@appTypes/universal";
import { questionsCategoriesType } from "../types";
import { getInternalAuthData } from "../../auth/reducer/authentication.actions";

const ChatBox = ({ isPublic }: { isPublic?: boolean }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLSpanElement>(null);

  const [messages, setMessages] = useState<Array<messageType>>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isDemoFinished, setIsDemoFinished] = useState(false);
  const [creditsModal, setCreditsModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [pdfModal, setPdfModal] = useState(false);
  const [questionsModal, setQuestionsModal] = useState<{
    isOpen: boolean;
    category: questionsCategoriesType | null;
  }>({
    isOpen: false,
    category: null,
  });

  const authData = useAppSelector((state) => state.authentication.authData);
  const internalAuthData = useAppSelector(
    (state) => state.authentication.internalAuthData.value,
  );
  const tmpUserId = useAppSelector(
    (state) => state.chat.initiateConversationId.value,
  );
  const credits = useAppSelector(
    (state) => state.authentication?.internalAuthData?.value?.credits,
  );
  const chatData = useAppSelector((state) => state.chat.chatData);
  const promptedMessage = useAppSelector((state) => state.chat.promptedMessage);
  const loading = useAppSelector((state) => state.chat.centralizedLoading);

  const sendQuestion = (messageContent: string) => {
    const lsTmpUserId = sessionStorage.getItem("userId");
    if (messageContent) {
      if (!isPublic && !credits) {
        setCreditsModal(true);
      } else {
        setMessages((prevMessages) => {
          return [
            ...prevMessages,
            {
              message: messageContent,
              from: "user",
              created_at: Date.now(),
            },
          ];
        });

        dispatch(decrementCredits(1));
        dispatch(
          askQuestion({
            userId: isPublic
              ? tmpUserId
                ? tmpUserId
                : `${lsTmpUserId}`
              : `${authData?.uid}`,
            threadId: `${chatData.value?.main_thread?.thread_info?.thread_id}`,
            question: {
              message: messageContent,
              from: "user",
              created_at: `${Date.now()}`,
            },
          }),
        );
        dispatch(setCentralizedLoading(true));
        setNewMessage("");
        alignChatView();
        console.log("ChatBox.tsx -> getChatData 1");
        setTimeout(() => {
          dispatch(
            getChatData({
              user_id: isPublic
                ? tmpUserId
                  ? tmpUserId
                  : `${lsTmpUserId}`
                : `${authData?.uid}`,
            }),
          );
        }, 20000);
      }
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendQuestion(newMessage);
  };

  const alignChatView = () => {
    setTimeout(() => {
      if (scrollRef?.current) {
        scrollRef.current.scrollIntoView();
      }
    }, 50);
  };

  useEffect(() => {
    if (promptedMessage.value) {
      sendQuestion(promptedMessage.value);
    }
    return () => {
      dispatch(clearPromptedMessage());
    };
  }, [promptedMessage.value]);

  // After get messages from fetching getUserData
  // we put them into local state "messages"
  useEffect(() => {
    if (chatData.value?.main_thread?.messages?.length) {
      !promptedMessage.value && dispatch(setCentralizedLoading(false));
      setMessages([...chatData.value?.main_thread?.messages]);
      alignChatView();

      // After we get response on first question, show Sing Up modal to public user
      isPublic &&
        chatData.value?.main_thread?.messages?.length === 3 &&
        setSignUpModal(true);
    }
  }, [chatData.value?.main_thread?.messages]);

  // After we get tmp_user_id from BE, for public chating, we set 20s timeout.
  // and after that 20s we start fetching getUserData EP. Also, we put tmp_user_id
  // into sessionStorage, if user refresh page, we get that tmp_user_id, fetch data
  // and continue with chating.
  // Tmp_user_id lasts for 30 min --> need to handle flow if id expire
  useEffect(() => {
    if (
      tmpUserId &&
      isPublic &&
      (isObjEmpty(chatData.value?.main_thread) ||
        !chatData.value?.main_thread?.messages?.length)
    ) {
      dispatch(setCentralizedLoading(true));
      console.log("ChatBox.tsx -> getChatData 2");
      setTimeout(() => {
        dispatch(getChatData({ user_id: tmpUserId }));
      }, 20000);
      sessionStorage.setItem("userId", `${tmpUserId}`);
    }
  }, [tmpUserId]);

  // Fetch user data from DB
  useEffect(() => {
    // After a 20-second delay, we begin retrieving the getUserData EP in both, public and private cases,
    // on every 1s until we get proper data for the user. We have some edge cases that indicate if
    // fetching needs to continue, as you can see IF blocks.
    const lsTmpUserId = sessionStorage.getItem("userId");

    // Private/LoggedIn user data fetch
    if (
      !isPublic &&
      internalAuthData?.user_id &&
      (chatData.value?.main_thread?.processing ||
        isObjEmpty(chatData.value) ||
        isObjEmpty(chatData.value?.main_thread) ||
        !chatData.value?.main_thread?.messages?.length)
    ) {
      dispatch(setCentralizedLoading(true));
      console.log("ChatBox.tsx -> getChatData 3");
      setTimeout(() => {
        dispatch(
          getChatData({
            user_id: `${authData?.uid}`,
          }),
        );
      }, 1000);
    }

    // Public/Tmp user data fetch
    if (
      (tmpUserId || lsTmpUserId) &&
      isPublic &&
      (chatData.value?.main_thread?.processing ||
        isObjEmpty(chatData.value) ||
        isObjEmpty(chatData.value?.main_thread) ||
        !chatData.value?.main_thread?.messages?.length)
    ) {
      dispatch(setCentralizedLoading(true));
      console.log("ChatBox.tsx -> getChatData 4");
      setTimeout(() => {
        dispatch(
          getChatData({
            user_id: tmpUserId ? tmpUserId : `${lsTmpUserId}`,
          }),
        );
      }, 1000);
    }
  }, [chatData.value, internalAuthData]);

  useLayoutEffect(() => {
    if (messages.length >= 6 && isPublic) {
      setIsDemoFinished(true);
    }

    const indexOfPromptedMessage = messages.findIndex(
      (message) => message.message === promptedMessage.value,
    );
    if (messages[indexOfPromptedMessage + 1] && indexOfPromptedMessage > 0) {
      dispatch(setCentralizedLoading(false));
      dispatch(clearPromptedMessage());
    }

    messages.forEach(
      (message) =>
        message.message === promptedMessage.value &&
        dispatch(clearPromptedMessage()),
    );

    messages?.length &&
      tmpUserId &&
      isPublic &&
      !internalAuthData?.user_id &&
      console.log("ChatBoxLanding.tsx -> getInternalAuthData");

    messages?.length &&
      tmpUserId &&
      isPublic &&
      !internalAuthData?.user_id &&
      dispatch(getInternalAuthData({ user_id: tmpUserId }));

    !isPublic && !isObjEmpty(authData) && navigate("/chat-box");
  }, [messages, isPublic]);

  const chatContent = useMemo(() => {
    return (
      <ScrollWrapper
        id="scrollChatBox"
        className="flex w-full flex-col gap-2 rounded-xl bg-dark-blue p-4 w888:mt-[5px] w888:p-2"
      >
        {messages.map((message, i) => {
          return (
            <div
              key={`${message.message}${i}`}
              className={`${
                message.from === "bot" ? "mr-auto" : "ml-auto"
              } fade-in-message-animation max-w-[90%] break-words rounded-xl bg-[#e0efff11] px-4 py-3.5 text-base font-light text-[#d5d5d5] w888:text-sm w480:max-w-[96%]`}
            >
              {message.from === "bot" ? (
                <MarkdownPreview
                  source={message.message}
                  style={{
                    background: "transparent",
                    fontSize: "14px",
                    color: "#d5d5d5",
                  }}
                />
              ) : (
                <span
                  className="mx-auto flex w-fit flex-col gap-[4px] break-words"
                  dangerouslySetInnerHTML={{
                    __html: message.message,
                  }}
                ></span>
              )}
            </div>
          );
        })}
        {!loading && messages?.length ? (
          <ChatQuestionsPills
            onClick={(category) =>
              setQuestionsModal({ isOpen: true, category })
            }
          />
        ) : null}
        {promptedMessage.value && (
          <p
            className={`fade-in-message-animation ml-auto max-w-[950px] break-words rounded-xl bg-[#e0efff11] px-4 py-3.5 text-base font-light text-[#d5d5d5] w888:max-w-[320px] w888:text-sm`}
          >
            <span className="mx-auto flex w-fit flex-col gap-[4px] break-words">
              {promptedMessage.value}
            </span>
          </p>
        )}
        {/* Animated loading three dots */}
        {(loading || chatData.loading) && (
          <div className="fade-in-message-animation flex flex-col gap-2">
            <div className="bouncing-loader mr-auto flex animate-pulse items-center rounded-xl bg-[#e0efff17] px-2.5 pb-2 pt-3 text-sm ">
              <div className="m-[2.5px] h-[4px] w-[4px] rounded-full bg-[#a1aac5e7] opacity-100"></div>
              <div className="m-[2.5px] h-[4px] w-[4px] rounded-full bg-[#a1aac5e7] opacity-100"></div>
              <div className="m-[2.5px] h-[4px] w-[4px] rounded-full bg-[#a1aac5e7] opacity-100"></div>
            </div>
          </div>
        )}
        <span ref={scrollRef} />
      </ScrollWrapper>
    );
  }, [messages, loading, promptedMessage]);

  return (
    <>
      {chatContent}
      {true ? (
        <form
          onSubmit={submitHandler}
          className="mt-2 flex w-full items-center gap-2 rounded-xl bg-dark-blue py-[2px] pr-2.5 w888:gap-1.5"
        >
          <TextInput
            label=""
            onChange={(e) => {
              e.preventDefault();
              setNewMessage(e.target.value);
            }}
            placeholder={
              loading
                ? "Generating answer..."
                : "Type here to ask a question..."
            }
            value={newMessage}
            disabled={loading}
            className="!py-2.5 text-[15px]"
          />
          <button
            className="just flex items-center justify-center gap-2 rounded-full bg-transparent-gray px-3 py-[5px] font-light w888:gap-1.5 w888:px-2.5 w888:py-[5.5px]"
            type="submit"
            disabled={loading}
          >
            <span className="text-[15px] text-gold w888:text-sm">Ask</span>
            <span className="flex items-center gap-1 rounded-full bg-dark-dimmed-blue pl-1.5 pr-2">
              <CreditsIco className="h-auto w-[12px] w888:w-[10px] w888:[&_path]:fill-gold" />
              <span className="text-sm text-gold w888:text-[10px]">1</span>
            </span>
            <SlArrowRight className="-ml-[2px] h-auto w-[16px] text-gold w888:w-[12px]" />
          </button>
          <div
            className="cursor-pointer"
            onClick={() => !authData && setPdfModal(true)}
          >
            <PDFButton disabled={!authData} />
          </div>
        </form>
      ) : (
        <div className="mx-auto mt-4 w-fit w888:mb-0.5 w888:mt-1.5">
          <Button
            type="main"
            text="Start Asking"
            onClick={() => navigate("/chat-box-questions-public")}
            CustomIco={<SlArrowRight />}
          />
        </div>
      )}
      {isDemoFinished && !authData && (
        <CreatePortal>
          <BoxModal>
            <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-10">
              <div className="rounded-full bg-[#ebebeb] p-2">
                <AstroSignSelector
                  type="icon"
                  className="text-[35px] text-[#0D101A]"
                />
              </div>
              <h2 className="w-fit text-center text-2xl font-medium text-[#ebebeb] drop-shadow-lg">
                Log in so that you can continue exploring the astrological realm
              </h2>
              {!isObjEmpty(internalAuthData?.user_info) && (
                <p className="w-fit text-center text-base font-medium text-[#ebebeb] drop-shadow-lg">
                  We are expecting you, {internalAuthData?.user_info?.name}!
                </p>
              )}
              <button
                onClick={() => navigate("/auth/signup")}
                className="mt-3 animate-pulse rounded-xl bg-[#ebebeb] px-10 py-1.5 font-medium text-[#0D101A] hover:bg-[#ebebebc7]"
              >
                Sign Up
              </button>
            </div>
          </BoxModal>
        </CreatePortal>
      )}
      {creditsModal && (
        <CreatePortal>
          <BoxModal>
            <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-10">
              <div className="rounded-full bg-[#ebebeb] p-2"></div>
              <h2 className="w-fit text-center text-2xl font-medium text-[#ebebeb] drop-shadow-lg">
                {!authData
                  ? "Sign Up to Unlock More Credits!"
                  : "Out of Credits!"}
              </h2>
              <p className="w-fit text-center text-base font-medium text-[#ebebeb] drop-shadow-lg">
                {!authData
                  ? "You've used up your credits, but don't worry—the stars are generous! Sign up now to claim more credits to continue your journey with the Oracle "
                  : "You've run out of credits, but your journey isn't over yet. The stars are still waiting to reveal their secrets! "}
              </p>
            </div>
          </BoxModal>
        </CreatePortal>
      )}
      {questionsModal.isOpen && (
        <CreatePortal root="modal">
          <Modal
            close={() => setQuestionsModal({ isOpen: false, category: null })}
          >
            <ChatBoxQuestions
              isPublic={!authData ? true : false}
              modal
              closeModal={() =>
                setQuestionsModal({ isOpen: false, category: null })
              }
              modalCategory={
                questionsModal.category ? questionsModal.category : undefined
              }
            />
          </Modal>
        </CreatePortal>
      )}
      {signUpModal && !authData && (
        <CreatePortal>
          <Modal close={() => setSignUpModal(false)} className=" ">
            <SignUpModal setSignUpModal={() => setSignUpModal(false)} />
          </Modal>
        </CreatePortal>
      )}
      {pdfModal && !authData && (
        <CreatePortal>
          <Modal close={() => setPdfModal(false)} className=" ">
            <PdfModal setPdfModal={() => setPdfModal(false)} />
          </Modal>
        </CreatePortal>
      )}
    </>
  );
};

export default ChatBox;
