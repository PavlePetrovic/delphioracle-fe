// ** Reducers Imports
import global from "./global";
import authentication from "@features/auth/reducer/authentication.reducer";
import chat from "@features/chatBox/reducer/chatBox.reducer";
import infoWizard from "@features/getUserInfo/reducer/userData.reducer";
import stripe from "@features/stripe/reducer/stripe.reducer";
import synastry from "@features/synastry/reducer/synastry.reducer";
import profile from "@features/profile/reducer/profile.reducer";

const rootReducer = {
  global,
  authentication,
  profile,
  chat,
  synastry,
  infoWizard,
  stripe,
};

export default rootReducer;
