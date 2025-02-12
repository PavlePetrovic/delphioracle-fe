import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAuth, applyActionCode } from "firebase/auth";
import Spinner from "@components/Spinner/Spinner";
import Button from "@components/Button/Button";

const Verification = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isVerified, setIsVerified] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    auth?.currentUser?.emailVerified && setIsVerified(true);
  }, [auth?.currentUser]);

  useEffect(() => {
    const oobCode = searchParams.get("oobCode"); // Extract code from URL
    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          setIsVerified(true);
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

      {!isVerified ? (
        <div className="flex flex-col items-center gap-5">
          <p className="text-center text-lg font-light text-white">
            Please, check your inbox:{" "}
            {sessionStorage.getItem("verificationEmail") && (
              <span className="ml-1 rounded-full bg-main-grey px-3.5 py-1.5 font-medium text-gold">
                {sessionStorage.getItem("verificationEmail")}
              </span>
            )}
          </p>
          <p className="max-w-[500px] text-center text-lg font-light text-white">
            Verification emails can sometimes hide - don't forget to check your
            junk or spam folder just in case.
          </p>
          <div className="flex animate-pulse items-center gap-3 text-center">
            <p className={`text-base font-light text-gold`}>
              Email verification in progress...
            </p>
            <Spinner classList="w-[20px] h-auto" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <p className="text-center text-2xl font-light text-white w888:text-lg">
            Verification successfully completed!
          </p>

          <Button
            type="goldMain"
            text="Go to Login"
            actionIco
            onClick={() => navigate("/auth/login")}
            className="mt-5"
          />
        </div>
      )}

      <p className="h-[50px] w-[1px]"></p>
    </div>
  );
};

export default Verification;
