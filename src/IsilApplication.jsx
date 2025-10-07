import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./ui/layouts/AppLayout";
import { CalculadoraPage } from "./features/calculadora/CalculadoraPage";
import { isDevelopment } from "./utils/isDevelopment";

export const IsilApplication = () => {
  const isDev = isDevelopment() ? '/' : '/landing-page';
  return (
    <>
      <BrowserRouter basename={isDev}>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/calculadora" element={<CalculadoraPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
