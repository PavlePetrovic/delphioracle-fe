import { PDFDownloadLink } from "@react-pdf/renderer";
import { useAppSelector } from "@redux/reduxTypes";
import PDFChatHistory from "../PDF/PDFChatHistory";
// import { PiFilePdf } from "react-icons/pi";
import PDFIco from "@assets/icons/pdf-ico.svg";

const PDFButton = ({
  customText,
  synastry,
  disabled,
}: {
  customText?: string;
  synastry?: boolean;
  disabled?: boolean;
}) => {
  const internalAuthData = useAppSelector(
    (state) => state.authentication.internalAuthData.value,
  );
  const chatData = useAppSelector((state) => state.chat.chatData);
  let messages = chatData.value?.main_thread?.messages;
  const chatSynastryData = useAppSelector((state) => state.synastry.chat);
  let synastryMessages = chatSynastryData?.value?.thread?.messages;

  return disabled ? (
    <div
      title="PDF Export"
      className={`flex items-center justify-center gap-2 rounded-full border border-[#ffffff1d] bg-main-grey px-2 py-1.5 text-sm font-light text-white transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-65 w888:py-[5px] w888:text-sm`}
    >
      <PDFIco className="text-base" />
    </div>
  ) : messages?.length ? (
    <PDFDownloadLink
      document={
        <PDFChatHistory messages={synastry ? synastryMessages : messages} />
      }
      fileName={`${internalAuthData?.user_info?.name?.toLocaleLowerCase()}-${internalAuthData?.user_info?.surname?.toLocaleLowerCase()}-delphi-oracle.pdf`}
    >
      {/* @ts-ignore */}
      {({ url, loading }) =>
        loading ? (
          <div>{url}</div>
        ) : (
          <div data-url={url}>
            <div
              title="PDF Export"
              className={`flex items-center justify-center gap-2 rounded-full border border-[#ffffff1d] bg-main-grey px-2 py-1.5 text-sm font-light text-white transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-65 w888:py-[5px] w888:text-sm`}
            >
              <PDFIco className="text-base" />
              {/* <p>{customText ? `${customText}` : "Download"}</p> */}
            </div>
          </div>
        )
      }
    </PDFDownloadLink>
  ) : (
    // </div>
    <></>
  );
};

export default PDFButton;
