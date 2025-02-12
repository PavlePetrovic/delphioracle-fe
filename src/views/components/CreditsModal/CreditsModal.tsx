import ClickClipboardCopy from "../ClickClipboardCopy/ClickClipboardCopy";
import { useAppSelector } from "../../../redux/reduxTypes";
import Button from "../Button/Button";
import { useNavigate } from "react-router";
import ModalWithContent from "../ModalStandard/ModalStandard";

const packagesTypes = [
  {
    name: "Starlight Starter",
    description: "💫 Perfect for quick insights",
    amountOfCredits: 40,
    price: 6.99,
    id: `${import.meta.env.VITE_STARLIGHT_STARTER}`,
  },
  {
    name: "Stellar Explorer",
    description: "🚀 Dive deeper into your journey",
    amountOfCredits: 100,
    price: 13.99,
    id: `${import.meta.env.VITE_STELLAR_EXPLORER}`,
  },
  {
    name: "Galactic Sage",
    description: "🌌 Unlock expansive cosmic wisdom",
    amountOfCredits: 200,
    price: 24.99,
    id: `${import.meta.env.VITE_GALACTIC_SAGE}`,
  },
  {
    name: "Celestial Prodigy",
    description: "🔮 The ultimate Oracle experience",
    amountOfCredits: 500,
    price: 49.99,
    id: `${import.meta.env.VITE_CELESTIAL_PRODIGY}`,
  },
];

const CreditsModal = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  const authData = useAppSelector((state) => state.authentication.authData);
  const referralCode = useAppSelector(
    (state) => state.authentication.internalAuthData.value?.referral_code,
  );

  return (
    <ModalWithContent
      close={closeModal}
      title="Need More Credits?"
      modalClassName="!w-[1600px] !h-[560px]"
      // hideModalFooter
    >
      <div className="flex h-full w-full flex-col gap-10 rounded-xl bg-dark-blue px-8 pt-2 w888:px-2 w888:py-3.5">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-10 w888:gap-5">
          <div className="flex h-[200px] w-full max-w-[370px] flex-col items-center justify-between gap-1 rounded-xl border-[0.5px] border-[#ffffff42] bg-[#3d465330] p-2 w888:max-w-full">
            <h4 className="font-philosopher text-[28px] font-normal text-gold w480:text-[24px]">
              Invite Friends & Earn ⚡
            </h4>
            <p className="mb-2 text-center text-sm font-light text-white">
              Earn 5 credits when someone signs up with your referral code -
              they get 3 credits too!
            </p>
            <p className="mb-2 text-center text-sm font-light text-white">
              Edit your code anytime in profile settings.
            </p>
            <div className="mb-2 w-fit px-3">
              <ClickClipboardCopy
                containterClassName="!py-1 !text-gold"
                text={`${referralCode ? referralCode?.toLocaleUpperCase() : "Generating..."}`}
              />
            </div>
          </div>
          {/* <div className="flex h-[180px] w-full max-w-[320px] cursor-not-allowed flex-col items-center gap-1 rounded-xl border border-[#ffffff42] p-2 opacity-60">
            <h4 className="text-gold font-philosopher text-2xl font-normal">
              Watch Ads
            </h4>
            <p className="mt-auto text-center text-sm  font-light text-[#E0EFFF]">
              Get one credit when you watch Ad. Maximum watches per day is 3
            </p>
            <div className="mt-[32px] mb-1 w-full px-3">
              <Button type="main" text="Start Watching" className="w-full" />
            </div>
          </div> */}
        </div>
        <div className="mx-auto mb-1 flex flex-wrap items-center justify-center gap-4 w888:grid-cols-1 w888:gap-5">
          {packagesTypes.map((type, index) => {
            return (
              <div
                key={index}
                className={`relative flex h-[165px] w-[259px] items-center justify-between rounded-xl border-[0.5px] w888:w-full ${type.price === 24.99 ? "border-gold" : "border-[#ffffff42]"} bg-[#3d465330] p-4 ${
                  type.name === "" ? "cursor-not-allowed opacity-60" : ""
                }`}
              >
                <div className="flex h-full flex-col justify-between">
                  <h3 className="w-1/2 font-philosopher text-[28px] leading-[29px] text-white">
                    {type.name}
                  </h3>
                  <p className="text-base font-light text-white">
                    {type.amountOfCredits} credits
                  </p>
                </div>
                <p className="let-2 absolute top-[82px] w-full text-sm font-light text-white">
                  {type.description}
                </p>
                <div className="flex h-full flex-col items-end justify-between">
                  <h3 className={`font-philosopher text-[26px] text-white`}>
                    ${type.price}
                  </h3>
                  <Button
                    type={type.price === 24.99 ? "goldMain" : "main"}
                    text="Buy Credits"
                    onClick={() =>
                      // type.name === "Starlight Starter" &&
                      navigate(`/checkout/${type.id}/${authData?.uid}`)
                    }
                    // actionIco
                    customStyle={{ icon: "w-[14px] h-auto" }}
                    className={`whitespace-nowrap !px-3 !py-1 !text-[13px] !font-light ${
                      type.name === "" ? "cursor-not-allowed opacity-60" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ModalWithContent>
  );
};

export default CreditsModal;
