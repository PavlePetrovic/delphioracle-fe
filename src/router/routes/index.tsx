import MergeLayoutRoutes from "./MergeLayoutRoutes";

// ** Routes Imports
import userInfoRoutes from "@features/infoWizard/routes";
import chatRouter from "@features/chat/routes";
import authRouter from "@features/auth/routes";
import profileRouter from "@features/profile/routes";
import stripeRouter from "@features/stripe/routes";
import synastryRouter from "@features/synastry/routes";
import legalRouter from "@features/legal/routes";

// ** Merge Routes
const routes = [
  ...authRouter,
  ...userInfoRoutes,
  ...chatRouter,
  ...synastryRouter,
  ...profileRouter,
  ...stripeRouter,
  ...legalRouter,
];

const getRoutes = () => {
  const LayoutRoutes = MergeLayoutRoutes(routes);

  return LayoutRoutes;
};

export { routes, getRoutes };
