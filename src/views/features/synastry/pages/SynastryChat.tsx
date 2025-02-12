import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import { useParams } from "react-router";
import { messageType } from "@appTypes/universal";
import { questionsCategoriesType } from "@/views/features/chat/types";
import {
  askSynastryQuestion,
  getSynastryData,
} from "../reducer/synastry.actions";
import { isObjEmpty } from "@common/utility/Utils";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import TextInput from "@components/TextInput/TextInput";
import CreditsIco from "@assets/icons/credits-ico.svg";
import { SlArrowRight } from "react-icons/sl";
import {
  clearSynastryChatData,
  clearSynastryPromptedMessage,
  setSynastryCentralizedLoading,
  setSynastryChatData,
  setSynastryChatInitialFetch,
} from "../reducer/synastry.reducer";
import SynastryChatNavbar from "../components/SynastryChatNavbar";
import CreatePortal from "@components/CreatePortal/CreatePortal";
import Modal from "@components/Modal/Modal";
import ChatBoxQuestions from "@/views/features/chat/pages/ChatBoxQuestions";
import SynastryQuestionsPills from "../components/SynastryQuestionsPills";
import MarkdownPreview from "@uiw/react-markdown-preview";
import PDFButton from "@features/profile/components/PDFButton";
import { decrementCredits } from "@features/auth/reducer/authentication.reducer";

const SynastryChat = () => {
  const dispatch = useAppDispatch();
  const scrollRef = useRef<HTMLSpanElement>(null);
  const key = useParams();

  const [isFirstInitialFetchOver, setIsFirstInitialFetchOver] = useState(false);
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
  const internalAuthData = useAppSelector(
    (state) => state.authentication.internalAuthData.value,
  );
  const synastryList = useAppSelector((state) => state.synastry.list);
  const chatData = useAppSelector((state) => state.synastry.chat);
  const promptedMessage = useAppSelector(
    (state) => state.synastry.promptedMessage,
  );
  const loading = useAppSelector((state) => state.synastry.centralizedLoading);

  const sendQuestion = (messageContent: string) => {
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
      console.log("SynastryChat.tsx -> getSynastryData 1 CHAT");
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
    // After a 20-second delay, we begin retrieving the getUserData EP on every 1s
    // until we get proper data for the user. We have some edge cases that indicate if
    // fetching needs to continue, as you can see IF blocks.
    if (
      (isObjEmpty(chatData.value?.thread) ||
        chatData.value?.thread?.processing ||
        !chatData.value?.thread?.messages?.length) &&
      chatData.value?.thread?.thread_info?.thread_id &&
      !chatData.initialSynastryChatFetch
    ) {
      dispatch(setSynastryCentralizedLoading(true));
      console.log("SynastryChat.tsx -> getSynastryData 2 CHAT");
      setTimeout(() => {
        dispatch(
          getSynastryData({
            threadId: `${chatData.value?.thread?.thread_info?.thread_id}`,
            userId: `${authData?.uid}`,
          }),
        );
      }, 1000);
    }
  }, [chatData.value]);

  useEffect(() => {
    if (
      ((synastryList?.threads?.length
        ? synastryList?.threads?.length < Number(key?.chatIndex) + 1
        : true) ||
        synastryList?.adding_partner_processing_flag) &&
      isObjEmpty(chatData.value?.thread) &&
      isFirstInitialFetchOver
    ) {
      console.log("SynastryChat.tsx -> getSynastryData LIST 1");
      setTimeout(() => {
        dispatch(
          getSynastryData({
            userId: `${authData?.uid}`,
          }),
        )
          .unwrap()
          .then((res) => {
            if (
              key?.chatIndex &&
              res.data?.threads?.length === Number(key?.chatIndex) + 1
            ) {
              dispatch(setSynastryChatData(res.data?.threads[key.chatIndex]));
              dispatch(setSynastryChatInitialFetch(false));
            }
          })
          .catch((error) => console.log(error));
      }, 1000);
    }
  }, [synastryList]);

  useLayoutEffect(() => {
    if (chatData.initialSynastryChatFetch && authData?.uid) {
      console.log("SynastryChat.tsx -> getSynastryData LIST 2");
      dispatch(setSynastryCentralizedLoading(true));
      setTimeout(() => {
        dispatch(getSynastryData({ userId: `${authData?.uid}` }));
        setIsFirstInitialFetchOver(true);
      }, 20000);
    }
  }, [chatData.initialSynastryChatFetch]);

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

  useLayoutEffect(() => {
    if (
      isObjEmpty(chatData.value) &&
      authData?.uid &&
      key?.chatIndex &&
      !chatData.initialSynastryChatFetch
    ) {
      console.log("SynastryChat.tsx -> getSynastryData LIST 3");
      dispatch(
        getSynastryData({
          userId: `${authData?.uid}`,
        }),
      )
        .unwrap()
        .then((res) => {
          key?.chatIndex &&
            res.data?.threads?.length &&
            dispatch(setSynastryChatData(res.data?.threads[key.chatIndex]));
        })
        .catch((error) => console.log(error));
    }

    return () => {
      dispatch(clearSynastryChatData());
    };
  }, [authData?.uid]);

  const chatContent = useMemo(() => {
    return (
      <ScrollWrapper
        id="scrollSynastry"
        className="mt-3 flex w-full flex-col gap-2 rounded-xl bg-dark-blue px-5 pb-5 w888:mt-0 w888:px-2 w888:pb-2"
      >
        <SynastryChatNavbar />
        {messages.map((message, i) => {
          return (
            <div
              key={`${message.message}${i}`}
              className={`${i === 0 ? "-mt-1.5" : ""} ${
                message.from === "bot" ? "mr-auto" : "ml-auto"
              } fade-in-message-animation max-w-[90%] break-words rounded-xl bg-[#e0efff11] px-4 py-3.5 text-base font-light text-[#d5d5d5] w888:text-sm w480:max-w-[96%]`}
            >
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
  }, [messages, loading]);

  return (
    <>
      {chatContent}
      <form
        onSubmit={submitHandler}
        className="mt-2 flex w-full items-center gap-2 rounded-xl bg-dark-blue py-[5px] pr-2.5 w888:gap-1.5"
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
          className="just flex items-center justify-center gap-2 rounded-full bg-transparent-gray px-5 py-[7px] font-light w888:gap-1.5 w888:px-2 w888:py-[7.5px]"
          type="submit"
          disabled={
            loading ||
            (internalAuthData?.credits ? internalAuthData?.credits < 5 : true)
          }
        >
          <span className="text-[17px] text-gold w888:text-sm">Ask</span>
          <span className="flex items-center gap-1 rounded-full bg-dark-dimmed-blue pl-1.5 pr-2">
            <CreditsIco className="h-auto w-[12px] w888:w-[10px] w888:[&_path]:fill-gold" />
            <span className="text-sm text-gold w888:text-[10px]">5</span>
          </span>
          <SlArrowRight className="-ml-[2px] text-gold w888:h-auto w888:w-[12px]" />
        </button>
        <div className="">
          <PDFButton
            disabled={!chatData?.value?.thread?.messages?.length ? true : false}
            synastry
          />
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
