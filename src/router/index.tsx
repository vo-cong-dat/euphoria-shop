import MainLayout from "@/layout/main-layout";
import { lazy } from "react";
import { Route, Routes } from "react-router";
import { routers } from "./routers";
import UnProtectedLayout from "./UnProtected";
import ProtectedLayout from "./Protected";

const HomePage = lazy(() => import("@/pages/home"));
const SignInPage = lazy(() => import("@/pages/sign-in"));
const SignUpPage = lazy(() => import("@/pages/sign-up"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));

export const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<UnProtectedLayout />}>
          <Route path={routers.SIGN_IN} element={<SignInPage />} />
          <Route path={routers.SIGN_UP} element={<SignUpPage />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path={routers.HOME} element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
