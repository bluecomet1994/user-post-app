import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import LoadingSplash from "@/pages/LoadingSplash";
import { loginWithToken } from "../redux/actions/user.action";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const { isAuthorize } = useSelector(({ userReducer }) => userReducer);

  React.useEffect(() => {
    const accessToken: string | null = localStorage.getItem("access-token");

    if (accessToken) {
      dispatch(loginWithToken());
    }
  }, [dispatch]);

  return isAuthorize ? <React.Fragment></React.Fragment> : <React.Fragment>{children}</React.Fragment>;
}
