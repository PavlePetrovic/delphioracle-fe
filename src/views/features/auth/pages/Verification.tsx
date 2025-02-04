import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAuth, applyActionCode } from "firebase/auth";
import Spinner from "@components/Spinner/Spinner";
import { useAppSelector } from "@redux/reduxTypes";

const Verification = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const authData = useAppSelector((state) => state.authentication.authData);

  const [isVerified, setIsVerified] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const oobCode = searchParams.get("oobCode"); // Extract code from URL
    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          setIsVerified(true);
          navigate("/chat-box");
          // Redirect to app
        })
        .catch((error) => {
          console.error("❌ Verification failed", error);
        });
    }
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <h1 className="font-prata text-3xl text-gold w888:mt-3 w888:text-2xl">
        Email Verification
      </h1>

      <div className="flex flex-col items-center gap-3">
        <p className="text-center text-lg font-light text-white">
          {!isVerified ? `Please, check your inbox: ${authData?.email}` : ""}
        </p>
        <div className="flex items-center gap-3 text-center">
          <p className="text-base font-light text-white">
            {!isVerified
              ? "Email verification in progress..."
              : "Verification Completed"}
          </p>
          {!isVerified ? <Spinner classList="w-[20px] h-auto" /> : ""}
        </div>
      </div>

      <p className="h-[50px] w-[1px]"></p>
    </div>
  );
};

export default Verification;
