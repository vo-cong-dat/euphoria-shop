import { KeyLocalStorage } from "@/constants/localstorage";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { routers } from "./routers";

export default function ProtectedLayout() {
  const navigation = useNavigate();
  const hasAssetToken = localStorage.getItem(KeyLocalStorage.ACCESS_TOKEN);

  useEffect(() => {
    if (!hasAssetToken) {
      navigation(routers.SIGN_IN);
    }
  }, [hasAssetToken, navigation]);

  return <>{hasAssetToken ? <Outlet /> : null}</>;
}
