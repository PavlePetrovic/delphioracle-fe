import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import { useState } from "react";
import TextInput from "@components/TextInput/TextInput";
import { isStringEmpty } from "@common/utility/Utils";
import { changeReferral, deleteAccount } from "../reducer/profile.actions";
import { updateChatData } from "@features/chatBox/reducer/chatBox.reducer";
import { auth } from "../../../../firebaseConfig/firebaseConfig";
import { deleteUser, signOut } from "firebase/auth";
import { setAuth } from "@features/auth/reducer/authentication.reducer";
import { IoIosArrowForward } from "react-icons/io";
import ModalWithContent from "@components/ModalStandard/ModalStandard";

const Settings = () => {
  const dispatch = useAppDispatch();

  const authData = useAppSelector((state) => state.authentication.authData);
  const profileSettings = useAppSelector(
    (state) => state.profile.profileSettings,
  );
  const referralCode = useAppSelector(
    (state) => state.chat.chatData.value?.referral_code,
  );

  const [referralModal, setReferralModal] = useState(false);
  const [referralInput, setReferralInput] = useState({
    newCode: "",
    error: false,
  });
  const [deleteModal, setDeleteModal] = useState(false);

  const handleChangeReferral = () => {
    if (!isStringEmpty(referralInput.newCode)) {
      dispatch(
        changeReferral({
          userId: `${authData?.uid}`,
          oldReferralCode: `${referralCode}`,
          newReferralCode: `${referralInput.newCode}`,
        }),
      )
        .unwrap()
        .then((res) => {
          setReferralModal(false);
          dispatch(
            updateChatData({
              referral_code: referralInput.newCode?.toLocaleUpperCase(),
            }),
          );
        })
        .catch((error) => {
          console.log(error);
          setReferralInput((prevInput) => {
            return { ...prevInput, error: true };
          });
        });
    } else {
      setReferralInput((prevInput) => {
        return { ...prevInput, error: true };
      });
    }
  };

  const handleSignOut = async () => {
    const user = auth.currentUser;
    user &&
      signOut(auth)
        .then(() => {
          localStorage.removeItem("delphiAccessToken");
          dispatch(setAuth(null));
          deleteUser(user)
            .then(() => {
              handleSignOut();
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => console.log(error));
  };

  const handleDeleteUser = () => {
    const user = auth.currentUser;
    user &&
      dispatch(
        deleteAccount({
          userId: `${authData?.uid}`,
        }),
      )
        .unwrap()
        .then((res) => {
          handleSignOut();
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const settingsActions = [
    {
      name: "Referral Code",
      action: () => setReferralModal(true),
      content: referralCode?.toLocaleUpperCase(),
      contentLoading: !referralCode,
      disabled: !referralCode,
    },
    {
      name: "Delete Account",
      action: () => setDeleteModal(true),
    },
  ];

  return (
    <div className="flex h-full  w-full flex-col p-6 w888:p-2">
      <div className="mb-2 flex items-center justify-start">
        <h2 className="font-philosopher text-3xl font-normal tracking-wide w888:text-2xl">
          Settings
        </h2>
      </div>
      {settingsActions.map(
        ({ name, action, content, contentLoading, disabled }, index) => {
          return (
            <div
              key={index}
              className={`group flex w-full cursor-pointer items-center justify-between border-b border-[#ffffff32] py-5 transition-all hover:border-[#EBD9AD32] ${
                disabled ? "opacity-70" : ""
              }`}
              onClick={!disabled ? action : () => null}
            >
              <p className="text-lg font-light text-white transition-all group-hover:text-gold  w888:text-base">
                {name}{" "}
                {content || contentLoading ? (
                  <span className="ml-2.5 rounded-full bg-[#e0efff25] px-3 py-1 text-sm">
                    {contentLoading ? "Generating..." : ""}
                    {content ? content : ""}
                  </span>
                ) : (
                  ""
                )}
              </p>
              <IoIosArrowForward className="text-2xl text-white transition-all group-hover:text-gold  w888:text-lg" />
            </div>
          );
        },
      )}
      {referralModal && (
        <ModalWithContent
          close={() => setReferralModal(false)}
          modalClassName="!w-[500px] h-auto"
          title="Change Referral Code"
          actionButton={{
            text: "Confirm",
            processing: profileSettings.processing,
            disabled: isStringEmpty(referralInput.newCode),
            onSubmit: handleChangeReferral,
          }}
        >
          <div className="py-9">
            <TextInput
              value={referralInput.newCode}
              placeholder={"Enter new referral code"}
              // label="New Referral Code"
              onChange={(e) => {
                setReferralInput((prevInput) => {
                  return {
                    ...prevInput,
                    newCode: e.target.value?.toLocaleUpperCase(),
                  };
                });
              }}
              className="bg-white py-1.5 !text-dark-blue"
              invalid={
                referralInput.error && isStringEmpty(referralInput.newCode)
              }
            />
          </div>
        </ModalWithContent>
      )}
      {deleteModal && (
        <ModalWithContent
          close={() => setDeleteModal(false)}
          modalClassName="!w-[550px] h-auto"
          title="Are you sure you want to leave The Oracle?"
          actionButton={{
            text: "Confirm",
            processing: profileSettings.processing,
            onSubmit: handleDeleteUser,
          }}
        >
          <div className="mb-7 mt-12">
            <p className="text-center text-base font-light text-white w888:text-sm">
              This decision is final, and all your data will disappear. If
              you're certain, know that the stars will miss your presence!
            </p>
          </div>
        </ModalWithContent>
      )}
    </div>
  );
};

export default Settings;
