import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./ui/layouts/AppLayout";
import { CalculadoraPage } from "./features/calculadora/CalculadoraPage";
import { isDevelopment } from "./utils/isDevelopment";
import { Header } from "./ui/components/common/Header";
export const IsilApplication = () => {
  const isDev = isDevelopment() ? "/" : "/landing-page";
  return (
    <>
      <BrowserRouter basename={isDev}>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/calculadora" element={<CalculadoraPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
