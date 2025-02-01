import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import { getUserData } from "@features/chatBox/reducer/chatBox.actions";

const Return = () => {
  const navigate = useNavigate();
  const key = useParams();
  const dispatch = useAppDispatch();

  const authData = useAppSelector((state) => state.authentication.authData);

  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

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
        setCustomerEmail(dataParsed.customer_details?.email);
      });
  }, []);

  useEffect(() => {
    if (status === "open") {
      navigate("/checkout");
    }
  }, [status]);

  return (
    <>
      {status === "complete" ? (
        <section className="flex h-full flex-col items-center justify-center gap-10 p-5">
          <p className="px-10 text-center font-light text-white uppercase">
            {status}
          </p>
          <p className="flex flex-col gap-3 px-10 text-center font-light text-white">
            <span className="text-xl">We appreciate your purchase.</span>
            <span>
              Your message credits are like cosmic tokens, ready to illuminate
              your journey ahead. {customerEmail}
            </span>
          </p>
          <button
            className="rounded-xl bg-white px-5 py-2"
            onClick={() => {
              dispatch(getUserData({ user_id: `${authData?.uid}` }));
              navigate("/chat-box");
            }}
          >
            Go back to chat
          </button>
        </section>
      ) : (
        <section className="flex h-full flex-col items-center justify-center gap-10 p-5">
          <p className="px-10 text-center font-light text-white uppercase">
            Loading...
          </p>
        </section>
      )}
    </>
  );
};

export default Return;
