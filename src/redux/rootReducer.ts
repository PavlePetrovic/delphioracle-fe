// ** Reducers Imports
import global from "./global";
import authentication from "@features/auth/reducer/authentication.reducer";
import chat from "@/views/features/chat/reducer/chatBox.reducer";
import infoWizard from "@features/infoWizard/reducer/userData.reducer";
import stripe from "@features/stripe/reducer/stripe.reducer";
import synastry from "@features/synastry/reducer/synastry.reducer";
import profile from "@features/profile/reducer/profile.reducer";

const rootReducer = {
  global,
  authentication,
  chat,
  profile,
  synastry,
  infoWizard,
  stripe,
};

export default rootReducer;
