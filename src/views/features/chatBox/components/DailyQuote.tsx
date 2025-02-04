import { useAppSelector } from "@redux/reduxTypes";

const DailyQuote = () => {
  const authData = useAppSelector((state) => state.authentication.authData);
  const dailyQuoteGenerating = useAppSelector(
    (state) =>
      state.chat.chatData?.value?.daily_quotes?.generating_daily_quotes,
  );
  const dailyQuote = useAppSelector(
    (state) => state.chat.chatData?.value?.daily_quotes?.daily_quotes_list,
  );
  const expiredAt = useAppSelector(
    (state) => state.chat.chatData?.value?.expiredAt,
  );

  if (expiredAt) {
    console.log(expiredAt);
    var timestamp = expiredAt * 1000;

    console.log(new Date(timestamp).toTimeString());
    console.log("Expired At: ", new Date(timestamp).toLocaleTimeString());
    console.log("Time Now: ", new Date().toLocaleTimeString());
    console.log(
      "Is User Expired",
      new Date(timestamp).toLocaleTimeString() <=
        new Date().toLocaleTimeString(),
    );
  }

  return (
    <div className="bg-glass flex flex-col gap-0.5 rounded-xl border border-[#ffffff27] bg-dark-blue p-3 w888:gap-[3px] w888:p-3">
      <h5 className="font-philosopher text-[20px] text-gold w888:text-sm">
        Your Daily Cosmic Whisper
      </h5>
      {authData ? (
        <p className="text-sm font-extralight text-white w888:text-xs">
          {dailyQuoteGenerating ? "Generating..." : dailyQuote}
        </p>
      ) : (
        <p className="text-sm font-extralight text-white w888:text-xs">
          Your journey has begun, and the stars have spoken. Create your account
          to unlock deeper insights into yourself and your relationships.
        </p>
      )}
    </div>
  );
};

export default DailyQuote;
