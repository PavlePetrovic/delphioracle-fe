import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import { useParams } from "react-router";
import {
  messageType,
  questionsCategoriesType,
} from "@features/chatBox/chatBoxTypes";
import {
  askSynastryQuestion,
  getSynastryData,
} from "../reducer/synastry.actions";
import { getRandomInt, isObjEmpty } from "@common/utility/Utils";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import delphiLogo from "@assets/icons/delphi-logo.png";
import { coolPunchLines } from "@features/chatBox/chatData";
import TextInput from "@components/TextInput/TextInput";
import CreditsIco from "@assets/icons/credits-ico.svg";
import { SlArrowRight } from "react-icons/sl";
import {
  clearSynastryPromptedMessage,
  setSynastryCentralizedLoading,
  setSynastryChatInitialFetch,
} from "../reducer/synastry.reducer";
import SynastryChatNavbar from "../components/SynastryChatNavbar";
import CreatePortal from "@components/CreatePortal/CreatePortal";
import Modal from "@components/Modal/Modal";
import ChatBoxQuestions from "@features/chatBox/pages/ChatBoxQuestions";
import SynastryQuestionsPills from "../components/SynastryQuestionsPills";
import MarkdownPreview from "@uiw/react-markdown-preview";
import {
  decrementCredits,
  updateCredits,
} from "@features/chatBox/reducer/chatBox.reducer";
import PDFButton from "@features/profile/components/PDFButton";

const SynastryChat = () => {
  const dispatch = useAppDispatch();
  const scrollRef = useRef<HTMLSpanElement>(null);
  const key = useParams();

  const [messages, setMessages] = useState<Array<messageType>>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [questionsModal, setQuestionsModal] = useState<{
    isOpen: boolean;
    category: questionsCategoriesType | null;
  }>({
    isOpen: false,
    category: null,
  });

  const authData = useAppSelector((state) => state.authentication.authData);
  const synastryList = useAppSelector((state) => state.synastry.list);
  const chatData = useAppSelector((state) => state.synastry.chat);
  const promptedMessage = useAppSelector(
    (state) => state.synastry.promptedMessage,
  );
  const loading = useAppSelector((state) => state.synastry.centralizedLoading);

  const sendQuestion = (messageContent: string, credits: number) => {
    if (messageContent) {
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

      dispatch(setSynastryCentralizedLoading(true));
      dispatch(decrementCredits(5));
      dispatch(
        askSynastryQuestion({
          userId: `${authData?.uid}`,
          threadId: `${chatData.value?.thread?.thread_info?.thread_id}`,
          question: {
            message: messageContent,
            from: "user",
            created_at: `${Date.now()}`,
          },
        }),
      );
      setNewMessage("");
      alignChatView();
      setTimeout(() => {
        dispatch(
          getSynastryData({
            threadId: `${chatData.value?.thread?.thread_info?.thread_id}`,
            userId: `${authData?.uid}`,
          }),
        );
      }, 20000);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendQuestion(newMessage, 1);
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
      sendQuestion(promptedMessage.value, 1);
    }
    return () => {
      dispatch(clearSynastryPromptedMessage());
    };
  }, [promptedMessage.value]);

  // After get messages from fetching getUserData
  // we put them into local state "messages"
  useEffect(() => {
    if (!isObjEmpty(chatData.value?.thread)) {
      if (chatData.value?.thread?.messages?.length) {
        !promptedMessage.value &&
          dispatch(setSynastryCentralizedLoading(false));
        setMessages([...chatData.value?.thread?.messages]);
        alignChatView();
      }
    }
  }, [chatData.value?.thread]);

  // Fetch user data from DB
  useEffect(() => {
    // After a 20-second delay, we begin retrieving the getUserData EP in both, public and private cases,
    // on every 1s until we get proper data for the user. We have some edge cases that indicate if
    // fetching needs to continue, as you can see IF blocks.
    if (!chatData.initialSynastryChatFetch) {
      if (
        isObjEmpty(chatData.value?.thread) ||
        chatData.value?.thread?.processing ||
        !chatData.value?.thread?.messages?.length
      ) {
        dispatch(setSynastryCentralizedLoading(true));
        setTimeout(() => {
          dispatch(
            getSynastryData({
              threadId: `${chatData.value?.thread?.thread_info?.thread_id}`,
              userId: `${authData?.uid}`,
            }),
          );
        }, 1000);
      }
    }
  }, [chatData.value]);

  useLayoutEffect(() => {
    if (
      synastryList?.threads?.length &&
      key?.chatIndex &&
      chatData.initialSynastryChatFetch
    ) {
      if (synastryList.threads.length === Number(key?.chatIndex)) {
        dispatch(
          getSynastryData({
            threadId: `${
              synastryList?.threads[Number(key.chatIndex) - 1]?.thread_info
                ?.thread_id
            }`,
            userId: `${authData?.uid}`,
          }),
        );

        dispatch(setSynastryChatInitialFetch(false));
      }
    }
  }, [synastryList, chatData.initialSynastryChatFetch]);

  useLayoutEffect(() => {
    if (synastryList?.threads?.length < Number(key?.chatIndex)) {
      dispatch(setSynastryCentralizedLoading(true));
      setTimeout(() => {
        dispatch(
          getSynastryData({
            userId: `${authData?.uid}`,
          }),
        );
      }, 1000);
    }
  }, [synastryList, synastryList?.adding_partner_processing_flag]);

  useLayoutEffect(() => {
    const indexOfPromptedMessage = messages.findIndex(
      (message) => message.message === promptedMessage.value,
    );
    if (messages[indexOfPromptedMessage + 1] && indexOfPromptedMessage > 0) {
      dispatch(setSynastryCentralizedLoading(false));
      dispatch(clearSynastryPromptedMessage());
    }

    messages.forEach(
      (message) =>
        message.message === promptedMessage.value &&
        dispatch(clearSynastryPromptedMessage()),
    );
  }, [messages]);

  const chatContent = useMemo(() => {
    return (
      <ScrollWrapper
        id="scrollSynastry"
        className="bg-dark-blue w888:mt-0 w888:px-2 w888:pb-2 mt-3 flex w-full flex-col gap-2 rounded-xl px-5 pb-5"
      >
        <SynastryChatNavbar />
        {messages.map((message, i) => {
          return (
            <div
              key={`${message.message}${i}`}
              className={`${i === 0 ? "-mt-1.5" : ""} ${
                message.from === "bot" ? "mr-auto" : "ml-auto"
              } fade-in-message-animation w888:text-sm w480:max-w-[96%] max-w-[90%] rounded-xl bg-[#e0efff11] px-4 py-3.5 text-base font-light break-words text-[#d5d5d5]`}
            >
              {/* <span
                className="break-words mx-auto flex flex-col gap-[4px] w-fit"
                dangerouslySetInnerHTML={{
                  __html: formatText(message.message),
                }}
              ></span> */}
              <MarkdownPreview
                source={message.message}
                style={{
                  background: "transparent",
                  fontSize: "14px",
                  color: "#d5d5d5",
                }}
              />
            </div>
          );
        })}
        {!loading && messages?.length ? (
          <SynastryQuestionsPills
            onClick={(category) =>
              setQuestionsModal({ isOpen: true, category })
            }
          />
        ) : null}
        {loading && (
          <p
            className={`fade-in-message-animation w888:text-sm w888:max-w-[320px] mr-auto flex max-w-[950px] animate-pulse items-center gap-3 rounded-xl bg-[#e0efff11] px-4 py-3.5 text-sm font-light break-words text-[#d5d5d5]`}
          >
            <img
              src={delphiLogo}
              className="w888:w-[22px] h-auto w-[30px]"
              alt="delphi-logo"
            />
            <span className="mx-auto flex w-fit flex-col gap-[4px] break-words">
              ...{coolPunchLines[getRandomInt(0, coolPunchLines.length - 1)]}
              ...
            </span>
          </p>
        )}
        <span ref={scrollRef} />
      </ScrollWrapper>
    );
  }, [messages, loading]);

  return (
    <>
      {chatContent}
      <form
        onSubmit={submitHandler}
        className="bg-dark-blue w888:gap-1.5 mt-2 flex w-full items-center gap-2 rounded-xl py-[5px] pr-2.5"
      >
        <TextInput
          label=""
          onChange={(e) => {
            e.preventDefault();
            setNewMessage(e.target.value);
          }}
          placeholder={
            loading ? "Generating answer..." : "Type here to ask a question..."
          }
          value={newMessage}
          disabled={loading}
          className="!py-2.5"
        />
        <button
          className="just bg-transparent-gray w888:px-2 w888:py-[7.5px] w888:gap-1.5 flex items-center justify-center gap-2 rounded-full px-5 py-[7px] font-light"
          type="submit"
          disabled={loading}
        >
          <span className="text-gold w888:text-sm text-[17px]">Ask</span>
          <span className="bg-dark-dimmed-blue flex items-center gap-1 rounded-full pr-2 pl-1.5">
            <CreditsIco className="w888:w-[10px] w888:[&_path]:fill-gold h-auto w-[12px]" />
            <span className="text-gold w888:text-[10px] text-sm">5</span>
          </span>
          <SlArrowRight className="w888:w-[12px] w888:h-auto text-gold -ml-[2px]" />
        </button>
        <div
          className=""
          onClick={() => {
            dispatch(updateCredits({ userId: `${authData?.uid}` }));
            dispatch(decrementCredits(1));
          }}
        >
          <PDFButton synastry />
        </div>
      </form>
      {questionsModal.isOpen && (
        <CreatePortal root="modal">
          <Modal
            close={() => setQuestionsModal({ isOpen: false, category: null })}
          >
            <ChatBoxQuestions
              isPublic={!authData ? true : false}
              modal
              synastry
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
    </>
  );
};

export default SynastryChat;
