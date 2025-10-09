import { ActividadesPage } from "../../features/actividades/ActividadesPage";
import { CalculadoraPage } from "../../features/calculadora/CalculadoraPage";
import { CreditosPage } from "../../features/creditos/CreditosPage";
import { Eventos } from "../../features/Eventos/Eventos";
import { HomePage } from "../../features/home/HomePage";
import { RecursosPage } from "../../features/recursos/RecursosPage";
import { Header } from "../components/common/Header";
import { SectionWrapper } from "./SectionWrapper";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <SectionWrapper id="home">
          <HomePage />
        </SectionWrapper>
        <SectionWrapper id="activities">
          <ActividadesPage />
        </SectionWrapper>
        <SectionWrapper id="calculadora">
          <CalculadoraPage/>
        </SectionWrapper>
        <SectionWrapper id="events">
          <Eventos/>
        </SectionWrapper>
        <SectionWrapper id="resources">
          <RecursosPage />
        </SectionWrapper>
        <SectionWrapper id="credits">
          <CreditosPage />
        </SectionWrapper>
      </main>
    </>
  );
};
