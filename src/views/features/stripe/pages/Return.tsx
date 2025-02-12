import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import { getInternalAuthData } from "../../auth/reducer/authentication.actions";
import Button from "@/views/components/Button/Button";

const Return = () => {
  const navigate = useNavigate();
  const key = useParams();
  const dispatch = useAppDispatch();

  const authData = useAppSelector((state) => state.authentication.authData);

  const [status, setStatus] = useState(null);

  useEffect(() => {
    const sessionId = key.sessionId;

    const body = JSON.stringify({
      sessionId: sessionId,
    });

    fetch(`${import.meta.env.VITE_API_BASELINK}/stripe-get-session`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `${localStorage.getItem("delphiAccessToken")}`,
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        const dataParsed = JSON.parse(data.body)?.checkout_session;

        setStatus(dataParsed.status);
        // setCustomerEmail(dataParsed.customer_details?.email);
      });
  }, []);

  useEffect(() => {
    if (status === "open") {
      navigate("/checkout");
    }
    if (status === "complete" && authData?.uid) {
      dispatch(getInternalAuthData({ user_id: authData?.uid }));
    }
  }, [status, authData]);

  return (
    <>
      {status === "complete" ? (
        <section className="flex h-full flex-col items-center justify-center gap-10 p-5">
          {/* <p className="px-10 text-center font-light uppercase text-white">
            {status}
          </p> */}
          <p className="flex flex-col gap-8 px-10 text-center font-light text-white">
            <span className="text-2xl">You're Powered Up! ⚡</span>
            <span className="text-xl">
              Big thanks for fueling the magic! 🫶
            </span>
            <span>
              Your credits are now in your cosmic vault - ready to spark your
              journey. ✨
            </span>
            <span className="-mt-4">
              Need anything? Reach us at: support@thedelphioracle.com 🔮
            </span>
          </p>
          <Button
            type="goldMain"
            text="Back To Chat"
            actionIco
            onClick={() => navigate("/chat-box")}
          />
        </section>
      ) : (
        <section className="flex h-full flex-col items-center justify-center gap-10 p-5">
          <p className="px-10 text-center font-light uppercase text-white">
            Loading...
          </p>
        </section>
      )}
    </>
  );
};

export default Return;
