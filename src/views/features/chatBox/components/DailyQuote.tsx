import { useAppSelector } from "@redux/reduxTypes";

const DailyQuote = () => {
  const authData = useAppSelector((state) => state.authentication.authData);
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

  console.log(dailyQuote);

  return (
    <div className="bg-dark-blue bg-glass w888:gap-[3px] w888:p-3 flex flex-col gap-0.5 rounded-xl border border-[#ffffff27] p-3">
      <h5 className="font-philosopher text-gold w888:text-sm text-[20px]">
        Your Daily Cosmic Whisper
      </h5>
      {authData ? (
        <p className="w888:text-xs text-sm font-extralight text-white">
          {dailyQuote}
        </p>
      ) : (
        <p className="w888:text-xs text-sm font-extralight text-white">
          Your journey has begun, and the stars have spoken. Create your account
          to unlock deeper insights into yourself and your relationships.
        </p>
      )}
    </div>
  );
};

export default DailyQuote;
