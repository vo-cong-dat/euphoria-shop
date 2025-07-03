import MainLayout from "@/layout/main-layout";
import { lazy } from "react";
import { Route, Routes } from "react-router";
import { routers } from "./routers";

const HomePage = lazy(() => import("@/pages/home"));
const SignInPage = lazy(() => import("@/pages/sign-in"));
const SignUpPage = lazy(() => import("@/pages/sign-up"));

export const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routers.SIGN_IN} element={<SignInPage />} />
        <Route path={routers.SIGN_UP} element={<SignUpPage />} />
        <Route path={routers.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
};
