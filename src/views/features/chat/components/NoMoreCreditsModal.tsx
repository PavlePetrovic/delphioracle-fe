import { useAppSelector } from "@redux/reduxTypes";
import ModalWithContent from "@components/ModalStandard/ModalStandard";
import ClickClipboardCopy from "@components/ClickClipboardCopy/ClickClipboardCopy";
import { useNavigate } from "react-router";
import Button from "@/views/components/Button/Button";

const NoMoreCreditsModal = ({
  isPublic,
  closeNoMoreCreditsModal,
}: {
  isPublic: boolean;
  closeNoMoreCreditsModal: () => void;
}) => {
  const navigate = useNavigate();
  const internalAuthData = useAppSelector(
    (state) => state.authentication.internalAuthData.value,
  );

  return (
    <ModalWithContent
      close={() =>
        isPublic ? navigate("/auth/signup") : closeNoMoreCreditsModal()
      }
      title="Out of Credits"
      modalClassName={`${isPublic ? "!h-[409px] !w-[600px]" : "!h-[652px] !w-[900px]"}`}
      closeButtonText={`${isPublic ? "Sign Up" : "✨ Go Back to Chat"}`}
    >
      {!isPublic ? (
        <div className="flex w-full flex-col gap-3 text-white">
          <p className="text-center text-base font-light">
            ✨ Your journey with the Oracle doesn't end here. The stars have
            more to reveal, and it's super easy to keep the magic flowing.
          </p>
          <p className="text-center text-lg font-medium text-gold">
            Invite Friends & Earn Rewards
          </p>
          <p className="text-center text-base font-light">
            Share your referral code{" "}
            <span className="font-medium text-gold">
              {internalAuthData?.referral_code?.toLocaleUpperCase()}
            </span>{" "}
            - because sharing is caring and rewarding. 🫶
          </p>
          <ul>
            <li className="text-center text-base font-light">
              Your friends get{" "}
              <span className="font-medium">3 free credits</span> when they sign
              up.
            </li>
            <li className="text-center text-base font-light">
              You earn <span className="font-medium">5 bonus credits</span> for
              every traveler who joins through your code.
            </li>
          </ul>
          <div className="mx-auto mt-1">
            <ClickClipboardCopy
              containterClassName="!w-fit !py-1 !text-[14x]"
              text={`${internalAuthData?.referral_code?.toLocaleUpperCase()}`}
            />
          </div>
          <p className="text-center text-sm font-light">It's win-win</p>
          <p className="text-center text-lg font-medium text-gold">
            Top Up & Continue Exploring
          </p>
          <div className="mt-1.5 flex items-center justify-center gap-3 text-center text-base font-light w888:flex-col">
            <p className="text-base font-light">
              Perfect for quick insights - 40 credits
            </p>
            <Button
              type="goldMain"
              onClick={() =>
                navigate(
                  `/checkout/${import.meta.env.VITE_STARLIGHT_STARTER}/${internalAuthData?.user_id}`,
                )
              }
              text="Starlight Starter"
              actionIco
              className="!px-3 !py-[3px] !font-light"
            />{" "}
          </div>
          <div className="flex items-center justify-center gap-3 text-center text-base font-light w888:flex-col">
            <p className="text-base font-light">
              Unlock expansive cosmic wisdom - 200 credits
            </p>
            <Button
              type="goldMain"
              onClick={() =>
                navigate(
                  `/checkout/${import.meta.env.VITE_GALACTIC_SAGE}/${internalAuthData?.user_id}`,
                )
              }
              text="Galactic Sage"
              actionIco
              className="!px-3 !py-[3px] !font-light"
            />{" "}
          </div>
          <p className="mt-0.5 text-center text-sm font-light">
            Topping up keeps your journey flowing and your insights growing. ✨
          </p>
          <p className="text-center text-lg font-medium text-gold">
            Did You Know?
          </p>
          <p className="-mt-0.5 mb-3 text-center text-base font-light">
            80% of users say their journey deepened with Galactic Sage. 🌟
          </p>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-3 text-white">
          <p className="text-center text-lg font-medium text-gold">
            Your Free Exploration Awaits Its Next Chapter
          </p>
          <p className="text-center text-base font-light">
            ✨ You've received your first 3 insights,{" "}
            {internalAuthData?.user_info?.name}. The Oracle has so much more
            waiting for you.
          </p>
          <p className="text-center text-base font-medium text-gold">
            Sign up to:
          </p>
          <ul>
            <li className="text-center text-base font-light">
              Get more <span className="font-medium">free credits</span> to
              explore further.
            </li>
            <li className="text-center text-base font-light">
              Access <span className="font-medium">PDF downloads</span> of your
              readings to keep them forever.
            </li>
            <li className="text-center text-base font-light">
              Dive into <span className="font-medium">synastry readings</span>{" "}
              for deeper relationship insights.
            </li>
            <li className="text-center text-base font-light">
              Receive{" "}
              <span className="font-medium">daily Cosmic Whispers,</span>{" "}
              written just for you.
            </li>
          </ul>
          <p className="mt-0.5 text-center text-sm font-light text-gold">
            The Oracle is ready to guide you further.
          </p>
        </div>
      )}
    </ModalWithContent>
  );
};

export default NoMoreCreditsModal;
