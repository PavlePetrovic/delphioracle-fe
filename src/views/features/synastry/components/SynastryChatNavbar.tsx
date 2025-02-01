import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import { useNavigate, useParams } from "react-router";
import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";
import { getSynastryData } from "../reducer/synastry.actions";
import Button from "@components/Button/Button";
import { BsArrowLeft } from "react-icons/bs";
import { clearSynastryChatData } from "../reducer/synastry.reducer";
import Spinner from "@components/Spinner/Spinner";

const SynastryChatNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isMobile = useAppSelector((state) => state.global.isMobile);
  const authData = useAppSelector((state) => state.authentication.authData);
  const synastryList = useAppSelector((state) => state.synastry.list);
  const chatData = useAppSelector((state) => state.synastry.chat);

  const key = useParams();

  const handleTransport = (index: number) => {
    if (Number(key?.chatIndex) !== index) {
      dispatch(
        getSynastryData({
          threadId: `${synastryList?.threads[index]?.thread_info?.thread_id}`,
          userId: `${authData?.uid}`,
        }),
      )
        .unwrap()
        .then(() => {
          navigate(`/synastry/chat/${index}`);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="bg-dark-blue sticky top-0 left-0 z-[10] flex w-full items-center p-2">
      <Button
        type="main"
        CustomIco={<BsArrowLeft className={`text-xl`} />}
        className="mr-4 -ml-2 w-fit !px-2.5 py-[10px]"
        onClick={() => {
          navigate("/synastry/landing");
          dispatch(clearSynastryChatData());
        }}
      />
      <h3 className="font-philosopher mr-auto text-lg text-white">
        {chatData.initialSynastryChatFetch
          ? "Generating synastry..."
          : `You & ${chatData?.value?.thread?.thread_info?.other_person_info?.name}`}
      </h3>
      <div className="ml-3 flex items-center gap-3">
        {synastryList?.threads?.map((thread: any, index: number) => {
          return !isMobile && thread?.thread_info?.other_person_info?.name ? (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
              onClick={() => handleTransport(index)}
            >
              <p className="bg-transparent-gray bg-glass flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#ffffff2f] p-1.5 text-white  hover:cursor-pointer hover:opacity-80">
                <ZodiacSymbol
                  zodiac="lion"
                  className={`${
                    chatData?.value?.thread?.thread_info?.other_person_info
                      ?.name === thread?.thread_info?.other_person_info?.name
                      ? "[&_path]:fill-gold"
                      : ""
                  }`}
                />
              </p>
              <p
                className={`text-[11px] ${
                  chatData?.value?.thread?.thread_info?.other_person_info
                    ?.name === thread?.thread_info?.other_person_info?.name
                    ? "text-gold"
                    : "text-white"
                }`}
              >
                {thread?.thread_info?.other_person_info?.name}
              </p>
            </div>
          ) : (
            <p key={index} className="hidden"></p>
          );
        })}
        {chatData?.initialSynastryChatFetch ? (
          <Spinner classList="w-[20px] h-[20px] ml-1" />
        ) : null}
      </div>
    </div>
  );
};

export default SynastryChatNavbar;
