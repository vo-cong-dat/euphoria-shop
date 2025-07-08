import { KeyLocalStorage } from "@/constants/localstorage";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { routers } from "./routers";

export default function UnProtectedLayout() {
  const navigation = useNavigate();
  const hasAssetToken = localStorage.getItem(KeyLocalStorage.ACCESS_TOKEN);

  useEffect(() => {
    if (hasAssetToken) {
      navigation(routers.HOME);
    }
  }, [hasAssetToken, navigation]);

  return <>{!hasAssetToken ? <Outlet /> : null}</>;
}
