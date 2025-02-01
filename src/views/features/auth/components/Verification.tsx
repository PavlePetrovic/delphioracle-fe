import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../redux/reduxTypes";
import { auth } from "../../../../firebaseConfig/firebaseConfig";
import { setAuth } from "../reducer/authentication.reducer";
import { useNavigate } from "react-router";

const Verification = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return <div>Pls udari verify jedan, {auth?.currentUser?.email}</div>;
};

export default Verification;
